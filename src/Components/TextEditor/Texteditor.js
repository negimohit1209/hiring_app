import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React, { Component } from "react";

export default class Texteditor extends Component {
  state = { editorState: EditorState.createEmpty() };
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ maxWidth: 650, display: "inline-block" }}
          editorStyle={{ border: "1px solid #F1F1F1", height: 250 }}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
