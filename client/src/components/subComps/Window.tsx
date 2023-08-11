import { Paper } from "@mui/material";
import RecieverProfile from "./RecieverProfile";
import Editor from "./Editor";
import MainBody from "../MainBody";

interface WindowProps {}

const Window: React.FunctionComponent<WindowProps> = () => {
  return (
    <div style={{minHeight:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <Paper className='appbar'>
      <RecieverProfile/>
    </Paper>
    <MainBody/>
    <Editor/>
    </div>
  );
};

export default Window;
