import { Paper } from "@mui/material";
import RecieverProfile from "./RecieverProfile";
interface WindowProps {}

const Window: React.FunctionComponent<WindowProps> = () => {
  return (
    <div>
    <Paper className='appbar'>
      <RecieverProfile/>
    </Paper>
    </div>
  );
};

export default Window;
