import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
// import Addfile from "@mui/icons-material/FileUpload";
import Send from "@mui/icons-material/SendOutlined";
import EmojiPallete from "./EmojiPallete";
import { Button, TextareaAutosize } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";

interface EditorProps {}

const Editor: React.FunctionComponent<EditorProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  const [flag, setflag] = useState<boolean>(true);
  const handleInputChange = () =>{
    setflag(!flag)
  }
  useEffect(() => {
    const ele = document.getElementById("main_c")!;
    ele.scrollTop = ele?.scrollHeight;
  }, [flag]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        paddingTop:'3px',
        paddingBottom: "10px",
        backgroundColor:theme?'#272727':"white",
        gap: "0.5rem",
        borderTop: `2px solid ${theme?'#1c1c1c':'lightgrey'}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          marginLeft: "10px",
        }}
      >
        <Button>
          <AttachFileRoundedIcon style={{ color:theme?'#fcfcfc' :"#272727" }} />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <EmojiPallete />
      </div>
      <div
      className={`tdiv ${theme?'dark':'light'}`}
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          padding:'3px',
          alignItems: "center",
        }}
      >
        <TextareaAutosize
          id="editor"
          autoCapitalize="on"
          autoComplete="on"
          className={`editor_input ${theme?'dark':'light'}`}
          autoFocus={true}
          placeholder="Type a message"
          maxRows={5}
          onInput={handleInputChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Button>
            <Send style={{ color:theme?'#fcfcfc' :"#272727"  }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
