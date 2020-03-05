import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { connect } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as actions from "../../Store/actions";

import React, { Component } from "react";
class Texteditor extends Component {
  constructor(props) {
    super(props);
    let editorState;
    const { desc } = this.props.selected;
    if (desc !== null) {
      const data = convertFromRaw(desc);
      editorState = EditorState.createWithContent(data);
      editorState = EditorState.moveFocusToEnd(editorState);
    } else {
      editorState = EditorState.createEmpty();
    }
    this.state = {
      editorState: editorState
    };
  }
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
    const data = convertToRaw(editorState.getCurrentContent());
    this.props.handleUpdateTextEditor(data);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Editor
          editorState={this.state.editorState}
          wrapperStyle={{ maxWidth: 650, display: "inline-block" }}
          editorStyle={{ border: "1px solid #F1F1F1", height: 650 }}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selected: state.jobs.selected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleUpdateTextEditor: data => dispatch(actions.updateTextEditor(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Texteditor);
