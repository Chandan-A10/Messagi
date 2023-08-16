import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Emoji from "@mui/icons-material/EmojiEmotionsOutlined";
import "../../assets/styles/profile.scss";

const style = {
  position: "absolute" as "absolute",
  bottom:'50px',
  left: "13%",
  bgcolor: "none",
  boxShadow: 10,
};
const EmojiPallete = () => {
  const [theme, settheme] = React.useState('true'===localStorage.getItem('theme'))
  const [backdrop, setbackdrop] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setbackdrop(true);
  };
  const handleClose = () => setOpen(false);

  const handleEmojiSelect = (value: any,e:any) => {
    console.log(value?.native);
    const tag = document.getElementById("editor") as HTMLTextAreaElement;
    tag.value = tag.value + value?.native;
  };

  const handleClick = () => {
    setbackdrop(false);
    handleClose();
  };
  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        <Emoji style={{color:theme?'white':'#272727'}}/>
      </Button>
      <Modal
        hideBackdrop={backdrop}
        onClick={() => handleClick()}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} onClick={(e)=>e.stopPropagation()} className={open ? "animate" : ""}>
          <Picker
            theme={theme?'dark':'light'}
            data={data}
            onEmojiSelect={handleEmojiSelect}
            previewPosition="none"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default EmojiPallete;
