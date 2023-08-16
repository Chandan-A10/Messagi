import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import Ham from "@mui/icons-material/Menu";
import { useState } from "react";
interface RecieverProfileProps {}

const RecieverProfile: React.FunctionComponent<RecieverProfileProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  return (
    <>
      <List sx={{ width: "100%", bgcolor: theme?'#272727':'background.paper' }}>
        <ListItem
          alignItems="flex-start"
          sx={{ display: "flex", justifyContent: "space-between",marginTop:'1%' }}
        >
          <div style={{ display: "flex" }}>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <div
              style={{
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemText
                style={{
                  minWidth: "30%",
                  display: "flex",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  flexDirection: "column",
                  color:theme?'white':'black'
                }}
                primary={<div className="heading">Jimmy Jackson</div>}
                secondary={
                  <>
                    <p
                      className="typing"
                      style={{
                        color:theme?'white':'black',
                        //   display: "none",
                        width: "100%",
                        margin: "0",
                        marginLeft: "-58%",
                        overflow: "hidden",
                      }}
                    >
                      typing...
                    </p>
                  </>
                }
              />
            </div>
          </div>
          <div style={{display:'flex',gap:'1rem'}}>
            <div className="logout">
              <Logout sx={{ fontSize: "30px", color:theme?'#fcfcfc' :"#272727"}} />
            </div>
            <div className="logout">
              <Ham sx={{ fontSize: "30px", color:theme?'#fcfcfc' :"#272727"}} />
            </div>
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default RecieverProfile;
