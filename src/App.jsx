import React from "react";
import grapesjs from "grapesjs";
import { useState, useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./styles/main.scss";
import gjsPresetWebpage from "grapesjs-preset-webpage";

function App() {
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
    <>
      <div id="editor"></div>
    </>
  );
}

export default App;
