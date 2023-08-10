import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/main";

const App = () => {
  return (
    <Routes>
      {publicRoutes.map((route,index)=> <Route key={index} path={route.path} element={route.element} />)}
    </Routes>
  );
};

export default App;