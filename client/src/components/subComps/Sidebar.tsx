import { Divider, Box, Paper } from "@mui/material";
import UserList from "../UsersList";
import ControlMenu from "../ControlMenu";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch, userSelector } from "../../store/store";
import { fetchUsers } from "../../actions/userAction";
import { useAppSelector } from "../../hooks/main";
import { Userdata } from "../../store/userSlice";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const state = useAppSelector(userSelector)
  const [users, setusers] = useState<Userdata[] | []>([]);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if(state.length === 0){
      console.log('fetching list')
      dispatch(fetchUsers())
        .then((val) => {
          setusers(val.payload);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      console.log('list available')
      setusers(state)
    }
  }, []);
  return (
    <div>
      <Box className="Menu">
        {/* <Paper
          elevation={0}
          className="Menu_item"
          id="inbox"
          style={{ width: "50%" }}
        >
          Inbox
        </Paper>
        <Paper
          elevation={0}
          className="Menu_item"
          id="all_users"
          style={{ width: "50%" }}
        >
          All Users
        </Paper> */}
        Chats
      </Box>
      <Box className="search_bar">
        <div className="sub_bar">
          <SearchOutlined />
          <input
            placeholder="Search..."
            // autoComplete="off"
            autoFocus={true}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </Box>
      <Divider />
      <UserList users={users} />
    </div>
  );
};

export default Sidebar;
