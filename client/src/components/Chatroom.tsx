import { Paper } from "@mui/material";
import "../assets/styles/chatroom.scss"
import Sidebar from "./subComps/Sidebar";
import Window from "./subComps/Window";
interface ChatRoomProps {}

const ChatRoom: React.FunctionComponent<ChatRoomProps> = () => {
  return (
    <div className="chatroom_container" >
      <Paper className="chatroom_sidebar" elevation={0}><Sidebar/></Paper>
      <Paper className="chatroom_window" elevation={0}><Window/></Paper>
    </div>
  );
};

export default ChatRoom;
