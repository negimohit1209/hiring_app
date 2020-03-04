import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { connect } from "react-redux";
import DraftPasteProcessor from "draft-js/lib/DraftPasteProcessor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as actions from "../../Store/actions";

import React, { Component } from "react";
class Texteditor extends Component {
  constructor(props) {
    super(props);
    let editorState;
    if (this.props.content !== null) {
      const processedHTML = DraftPasteProcessor.processHTML(this.props.content);
      const contentState = ContentState.createFromBlockArray(processedHTML);
      //move focus to the end.
      editorState = EditorState.createWithContent(contentState);
      editorState = EditorState.moveFocusToEnd(editorState);
    } else {
      editorState = EditorState.createEmpty();
    }
    this.state = {
      editorState: editorState
    };
  }
  onEditorStateChange = editorState => {
    // console.log(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      editorState
    });
    this.props.handleUpdateTextEditor(
      convertToRaw(editorState.getCurrentContent())
    );
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Editor
          editorState={this.state.editorState}
          wrapperStyle={{ maxWidth: 650, display: "inline-block" }}
          editorStyle={{ border: "1px solid #F1F1F1", height: 250 }}
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
