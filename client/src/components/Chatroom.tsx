import { Paper } from "@mui/material";
import "../assets/styles/chatroom.scss"
import Sidebar from "./subComps/Sidebar";
import Window from "./subComps/Window";
import ControlMenu from "./ControlMenu";
interface ChatRoomProps {}

const ChatRoom: React.FunctionComponent<ChatRoomProps> = () => {
  return (
    <div className="chatroom_container" >
      <div style={{borderRight:'1px solid lightgrey',padding:'5px',display:'flex',flexDirection:'column',gap:'77.29%'}}>
      <ControlMenu/>
      </div>
      <Paper className="chatroom_sidebar" elevation={0}><Sidebar/></Paper>
      <Paper className="chatroom_window" elevation={0}><Window/></Paper>
    </div>
  );
};

export default ChatRoom;
