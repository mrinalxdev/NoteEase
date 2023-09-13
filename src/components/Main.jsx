import React from "react";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Write your note here ..." />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title Preview</h1>
        <div className="markdown-preview">Notes Preview</div>
      </div>
    </div>
  );
};

export default Main;
