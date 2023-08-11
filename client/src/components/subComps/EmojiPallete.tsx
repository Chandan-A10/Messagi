import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Emoji from "@mui/icons-material/EmojiEmotions";
import "../../assets/styles/profile.scss";

const style = {
  position: "absolute" as "absolute",
  top: "49%",
  left: "13%",
  bgcolor: "none",
  boxShadow: 10,
};
const EmojiPallete = () => {
  const [backdrop, setbackdrop] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setbackdrop(true);
  };
  const handleClose = () => setOpen(false);

  const handleEmojiSelect = (value: any) => {
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
        <Emoji style={{color:'black'}}/>
      </Button>
      <Modal
        hideBackdrop={backdrop}
        onClick={() => handleClick()}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className={open ? "animate" : ""}>
          <Picker
            theme="light"
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
