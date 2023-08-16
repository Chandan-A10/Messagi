import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/main";
import { useEffect } from "react";

const App = () => {

  //finding out the default theme of browser
  useEffect(()=>{
    const settheme = localStorage.getItem('theme')
    if(!settheme){
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('theme',`${theme}`)
    }
  },[])

  //clears local storage in case a tab or browser is closed
  useEffect(()=>{
    const handleBeforUnload = () =>{
      localStorage.clear()
    }
    window.addEventListener('beforeunlload',handleBeforUnload)
    return ()=>{
      window.removeEventListener('beforeunload',handleBeforUnload)
    }
    
  },[])
  return (
    <Routes>
      {publicRoutes.map((route,index)=> <Route key={index} path={route.path} element={route.element} />)}
    </Routes>
  );
};

export default App;
