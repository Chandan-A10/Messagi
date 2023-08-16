import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Userdata } from "../store/userSlice";
import { useState } from "react";

interface UserListProps {
  users: Userdata[];
}

const UserList: React.FunctionComponent<UserListProps> = (props) => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  return (
    <div>
      {props?.users?.length !== 0 ? (
        <List
          sx={{ width: "98%", bgcolor: "transparent" ,marginLeft:'1%' }}
        >
          {props?.users?.map((usr: Userdata, idx) => (
            <div key={idx}>
              <ListItem className={`list_item ${theme?'dark':'light'}`} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div>{usr.email}</div><div style={{fontSize:'12px'}}>Yestarday</div></div>}
                  secondary={
                    <p
                      style={{
                        color:theme?'#fcfcfc':'#272727',
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
