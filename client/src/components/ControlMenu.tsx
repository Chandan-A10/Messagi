import Setting from "@mui/icons-material/SettingsOutlined";
import Message from "@mui/icons-material/ChatBubbleOutlineRounded";
import Archived from "@mui/icons-material/ArchiveOutlined";
import "../assets/styles/controllermenu.scss";
import ChatRoundedIcon from '@mui/icons-material/ChatOutlined';
import ProfileModal from "./MenuModals/ProfileModal";
import { useState } from "react";

const ControlMenu: React.FunctionComponent = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  return (
    <>
      <div className="sdbar">
        <div>
          <div className={`menu_items ${theme?'dark':'light'}`}>
          <ChatRoundedIcon sx={{ fontSize: "25px",color:theme?'white':'black'}} />
          </div>
          <div className={`menu_items ${theme?'dark':'light'}`}>
            <Message sx={{ fontSize: "25px" ,color:theme?'white':'black'}} />
          </div>
        </div>
        <div>
          <div className={`menu_items ${theme?'dark':'light'}`}>
            <Archived sx={{ fontSize: "25px" ,color:theme?'white':'black'}} />
          </div>
          <div className={`menu_items ${theme?'dark':'light'}`}>
            <Setting sx={{ fontSize: "25px" ,color:theme?'white':'black'}} />
          </div>
          <div className={`menu_items ${theme?'dark':'light'}`}>
            <ProfileModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlMenu;
