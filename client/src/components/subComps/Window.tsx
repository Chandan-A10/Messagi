import { Paper } from "@mui/material";
import RecieverProfile from "./RecieverProfile";
import Editor from "./Editor";
import MainBody from "../MainBody";
import { useState } from "react";

interface WindowProps {}

const Window: React.FunctionComponent<WindowProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  return (
    <div
      style={{
        minHeight:'100vh',
        maxHeight:'100vh',
        display:'flex',
        backgroundColor:theme?'#292929':'#f9f9f9',
        flexDirection:'column',
        justifyContent:'space-between'
      }}
    >
      <Paper className="appbar">
        <RecieverProfile />
      </Paper>
      <div style={{
        minHeight:'0',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'}}>
      <MainBody />
      <Editor />
      </div>
    </div>
  );
};

export default Window;
