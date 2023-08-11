import { Divider } from "@mui/material";
import "../assets/styles/mainbody.scss";

interface MainBodyProps {}

const MainBody: React.FunctionComponent<MainBodyProps> = () => {
  return (
    <div
      style={{
        minHeight: "83vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>
        <Divider>Today</Divider>
      </div>
      <div className="container_main" style={{ justifyContent: "left" }}>
        <div className="reciever">
          <div className="recievers_message">
            This is recievers message 
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "right" }}>
        <div className="sender">
          <div className="senders_message">
            This is Senders message This is Senders message This is Senders
            message This is Senders message This is Senders message This is
            Senders message This is Senders message This is Senders message This
            is Senders message
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "left" }}>
        <div className="reciever">
          <div className="recievers_message">
            This is recievers message This is recievers message This is
            recievers message This is recievers message This is recievers This
            is recievers message This is recievers message This is recievers
            message This is recievers
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "right" }}>
        <div className="sender">
          <div className="senders_message">
            This is Senders message This is Senders message This is Senders
            message This is Senders message This is Senders message This is
            Senders message This is Senders message This is Senders message This
            is Senders message
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
      <div className="container_main" style={{ justifyContent: "right" }}>
        <div className="sender">
          <div className="senders_message">
            This is Senders message This is Senders message This is Senders
            message This is Senders message This is Senders message This is
            Senders message This is Senders message This is Senders message This
            is Senders message
          </div>
          <div className="time_stamp">11:03 </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
