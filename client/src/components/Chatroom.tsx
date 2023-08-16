import { Paper } from "@mui/material";
import "../assets/styles/chatroom.scss"
import Sidebar from "./subComps/Sidebar";
import Window from "./subComps/Window";
import ControlMenu from "./ControlMenu";
import { useState } from "react";
interface ChatRoomProps {}

const ChatRoom: React.FunctionComponent<ChatRoomProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  return (
    <div className="chatroom_container" >
      <div className={`controller_menu ${theme ? 'dark' : 'light'}`}>
      <ControlMenu/>
      </div>
      <Paper className={`chatroom_sidebar ${theme ? 'dark' : 'light'}`} elevation={0}><Sidebar/></Paper>
      <Paper className="chatroom_window" elevation={0}><Window/></Paper>
    </div>
  );
};

export default ChatRoom;
