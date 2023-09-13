import React from "react";
import Add from "../button/Add";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NotEase</h1>
        <button>
          Add 
        </button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Note Preview</p>

          <small className="note-meta">Last modified</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
