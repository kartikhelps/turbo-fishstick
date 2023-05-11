import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Buttons from "./components/Buttons";

const GrapesJSComponent = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      components: "<div>Hello World!</div>",
      storageManager: false,
      styleManager: {
        sectors: [
          {
            name: "Dimension",
            open: false,
            buildProps: ["width", "height"],
          },
          {
            name: "Extra",
            open: false,
            buildProps: ["background-color", "box-shadow", "custom-prop"],
            properties: [
              {
                name: "Custom Property",
                property: "custom-prop",
                type: "integer",
                defaults: "0",
                min: 0,
              },
            ],
          },
        ],
      },
      blockManager: {
        blocks: [
          {
            id: "custom components",
            label: "btns",
            category: "custom components",
            content: '<article class="hello">Hello world</article>',
            style: ".hello{color: red;background:green}",
          },
          {
            id: "block-id",
            label: "Block Label",
            category: "Basic",
            content: "<div>Block content</div>",
            icon: "icon-component",
          },
          {
            id: "image-block",
            label: "Image Block",
            category: "Media",
            content: "<img src='https://picsum.photos/200/300'/>",
            icon: "icon-image",
          },
          {
            id: "text-block",
            label: "Text Block",
            category: "Basic",
            content: "<p>Text content</p>",
            icon: "icon-text",
          },
          {
            id: "grid-block",
            label: "Grid Block",
            category: "Layout",
            attributes: { class: "grid-block" },
            content: `
              <div class="row">
                <div class="col-md-6">Column 1</div>
                <div class="col-md-6">Column 2</div>
              </div>
            `,
            icon: "icon-layout",
          },
          {
            id: "grid-block-7",
            label: "Grid Block",
            category: "kartik",
            attributes: { class: "grid-block" },
            content: "<div >Plane Div</div>",
            icon: "icon-layout",
          },
          {
            id: "mui-form",
            label: "Material-UI Form",
            category: "Forms",
            content: `
              <form>
                <TextField label="Name" />
                <TextField label="Email" />
                <TextField label="Password" type="password" />
                <Button variant="contained" color="primary">Submit</Button>
              </form>
            `,
          },
        ],
      },
      layerManager: {
        appendTo: ".some-element",
      },
    });

    setEditor(editor);

    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="gjs"></div>;
};

export default GrapesJSComponent;
