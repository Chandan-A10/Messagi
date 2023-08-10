import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import Ham from "@mui/icons-material/Menu";
interface RecieverProfileProps {}

const RecieverProfile: React.FunctionComponent<RecieverProfileProps> = () => {
  return (
    <h1>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          alignItems="flex-start"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex" }}>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <div
              style={{
                minHeight: "55px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemText
                style={{
                  minWidth: "30%",
                  backgroundColor: "white",
                  display: "flex",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                primary={<div className="heading">Jimmy Jackson</div>}
                secondary={
                  <>
                    <p
                      className="typing"
                      style={{
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
          <div style={{display:'flex',gap:'0.3rem'}}>
            <div className="logout">
              <Logout sx={{ fontSize: "30px" }} />
            </div>
            <div className="logout">
              <Ham sx={{ fontSize: "30px" }} />
            </div>
          </div>
        </ListItem>
      </List>
    </h1>
  );
};

export default RecieverProfile;
