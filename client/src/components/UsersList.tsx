import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Userdata } from "../store/userSlice";

interface UserListProps {
  users: Userdata[];
}

const UserList: React.FunctionComponent<UserListProps> = (props) => {
  return (
    <div>
      {props.users.length !== 0 ? (
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          {props.users.map((usr: Userdata, idx) => (
            <div key={idx}>
              <ListItem className="list_item" alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={usr.email}
                  secondary={
                    <p
                      style={{
                        margin: "0",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        wordWrap: "break-word",
                        textOverflow: "ellipsis",
                      }}
                    >
                      I'll be in your neighfdsfsddfdsfdsfsdborhood doing errands
                      this
                    </p>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserList;
