import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Icon from '@mui/icons-material/AccountCircleOutlined';
import Edit from "@mui/icons-material/Edit";
import "../../assets/styles/profile.scss";
import { Button } from "@mui/material";
import user from "../../assets/user.png";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LaptopWindowsOutlinedIcon from "@mui/icons-material/LaptopWindowsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const style = {
  position: "absolute" as "absolute",
  bottom: "10px",
  border: "transparent",
  width: 500,
  left: "10px",
  height: 550,
  borderRadius: "10px",
  bgcolor: "white",
  boxShadow: 10,
};

interface ProfileModalProps {}

const ProfileModal: React.FunctionComponent<ProfileModalProps> = () => {
  const [theme, settheme] = React.useState('true'===localStorage.getItem('theme'))
  const [backdrop, setbackdrop] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setbackdrop(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setbackdrop(false);
    handleClose();
  };
  return (
    <div>
      <Icon onClick={handleOpen} style={{ fontSize: "25px", color:theme?'white':'black' }} />
      <Modal
        hideBackdrop={backdrop}
        onClick={() => handleClick()}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <Box sx={style} className={`profile ${open && "animate"}`}>
            <div className="profile_menu">
              <div className="setting_menu">
                <div className="setting_menu_item">
                  <LaptopWindowsOutlinedIcon style={{paddingLeft:'12px'}} />
                  <div className="setting_menu_item">General</div>
                </div>
                <div className="setting_menu_item">
                  <ManageAccountsOutlinedIcon style={{paddingLeft:'12px'}} />
                  <div className="setting_menu_item">Account</div>
                </div>
                <div className="setting_menu_item">
                  <ForumOutlinedIcon style={{paddingLeft:'12px'}} />
                  <div className="setting_menu_item">Chats</div>
                </div>
                <div className="setting_menu_item">
                  <NotificationsActiveOutlinedIcon style={{paddingLeft:'12px'}} />
                  <div>Notifications</div>
                </div>
              </div>
            </div>
            <div className="profile_content">
              <div className="pic">
                <img src={user} alt="..." />
              </div>
              <div className="name">
                <h3>Jimmy Jackson</h3>
                <Button>
                  <Edit />
                </Button>
              </div>
              <div className="about">About</div>
              <div className="name">
                <h4>Available</h4>
                <Button>
                  <Edit />
                </Button>
              </div>
              <div className="about">Phone</div>
              <div className="name">
                <h4>+91 000-000-0000</h4>
                <Button>
                  <Edit />
                </Button>
              </div>
            </div>
          </Box>
        </>
      </Modal>
    </div>
  );
};

export default ProfileModal;
