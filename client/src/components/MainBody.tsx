import { Divider } from "@mui/material";
import "../assets/styles/mainbody.scss";
import { useEffect, useState } from "react";

interface MainBodyProps {}

const MainBody: React.FunctionComponent<MainBodyProps> = () => {
  const [theme, settheme] = useState('true'===localStorage.getItem('theme'))
  useEffect(() => {
    const ele = document.getElementById("main_c")!;
    ele.scrollTop = ele?.scrollHeight;
  }, []);
  return (
    // <>
    <div id="main_c" style={{ flex: "1", width: "100%", overflowY: "auto" }}>
      <Divider>Today</Divider>
      <div className="container_main" style={{ justifyContent: "right" }}>
        <div className={`sender ${theme?'dark':'light'}`}>
          <div className={`senders_message ${theme?'dark':'light'}`}>
            This is Senders message This is Senders message This is Senders
            message This is Senders message This is Senders message This is
            Senders message This is Senders message This is Senders message This
            is Senders message
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "left" }}>
      <div className={`reciever ${theme?'dark':'light'}`}>
          <div className={`recievers_message ${theme?'dark':'light'}`}>
            This is recievers message This is recievers message This is
            recievers message This is recievers message This is recievers This
            is recievers message This is recievers message This is recievers
            message This is recievers
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "left" }}>
      <div className={`reciever ${theme?'dark':'light'}`}>
          <div className={`recievers_message ${theme?'dark':'light'}`}>
            This is recievers message This is recievers message This is
            recievers message This is recievers message This is recievers This
            is recievers message This is recievers message This is recievers
            message This is recievers
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "left" }}>
        <div className={`reciever ${theme?'dark':'light'}`}>
          <div className={`recievers_message ${theme?'dark':'light'}`}>
            This is recievers message This is recievers message This is
            recievers message This is recievers message This is recievers This
            is recievers message This is recievers message This is recievers
            message This is recievers
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
    </div>
    
    // </>
    // <div
    //   style={{
    //     overflowY:'scroll',
    //     overflowX:'hidden',
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "1rem",
    //   }}
    // >
    //   <div>
    //   </div>
    //   <div className="container_main" style={{ justifyContent: "left" }}>
    //     <div className="reciever">
    //       <div className="recievers_message">
    //         This is recievers message
    //       </div>
    //       <div className="time_stamp">11:03 </div>
    //     </div>
    //   </div>
    //   </div>
    //   <div className="container_main" style={{ justifyContent: "right" }}>
    //     <div className="sender">
    //       <div className="senders_message">
    //         This is Senders message This is Senders message This is Senders
    //         message This is Senders message This is Senders message This is
    //         Senders message This is Senders message This is Senders message This
    //         is Senders message
    //       </div>
    //       <div className="time_stamp">11:03 </div>
    //     </div>
    //   </div>
    //   <div className="container_main" style={{ justifyContent: "right" }}>
    //     <div className="sender">
    //       <div className="senders_message">
    //         This is Senders message This is Senders message This is Senders
    //         message This is Senders message This is Senders message This is
    //         Senders message This is Senders message This is Senders message This
    //         is Senders message
    //       </div>
    //       <div className="time_stamp">11:03 </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainBody;
