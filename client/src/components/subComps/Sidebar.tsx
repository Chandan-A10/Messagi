import { Divider, Box, Paper } from "@mui/material";
import UserList from "../UsersList";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch, userSelector } from "../../store/store";
import { fetchUsers } from "../../actions/userAction";
import { useAppSelector } from "../../hooks/main";
import { Userdata } from "../../store/userSlice";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
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
    <div style={{background:'transparent'}}>
      <Box className="Menu">
        <div>
        Chats
        </div>
        <MenuRoundedIcon/>
      </Box>
      <Box className="search_bar">
        <div className={`sub_bar ${theme?'dark':'light'}`}>
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
