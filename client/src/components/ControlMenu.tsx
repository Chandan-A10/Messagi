import Setting from "@mui/icons-material/Settings";
import User from "@mui/icons-material/CircleOutlined";
import Message from "@mui/icons-material/ChatBubbleOutlineRounded";
import Archived from "@mui/icons-material/Archive";
import "../assets/styles/controllermenu.scss";
import ProfileModal from "./MenuModals/ProfileModal";
interface ControlMenuProps {}

const ControlMenu: React.FunctionComponent<ControlMenuProps> = () => {
  return (
    <>
      <div style={{}}>
        <div className="menu_items">
          <Message sx={{ fontSize: "30px" }} />
        </div>
        <div className="menu_items">
          <Message sx={{ fontSize: "30px" }} />
        </div>
      </div>
      <div>
        <div className="menu_items">
          <Archived sx={{ fontSize: "30px" }} />
        </div>
        <div className="menu_items">
          <Setting sx={{ fontSize: "30px" }} />
        </div>
        <div className="menu_items">
          <ProfileModal />
        </div>
      </div>
    </>
  );
};

export default ControlMenu;
