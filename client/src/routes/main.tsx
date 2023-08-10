import ChatRoom from "../components/Chatroom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
];
