import React from "react";
import grapesjs from "grapesjs";
import { useState, useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "../styles/main.scss";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const WebBuilder = () => {
  const [editor, setEditor] = useState();
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default WebBuilder;
