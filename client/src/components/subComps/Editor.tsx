import Emoji from "@mui/icons-material/EmojiEmotions";
import Addfile from "@mui/icons-material/FileUpload";
import Send from "@mui/icons-material/SendOutlined";
import EmojiPallete from "./EmojiPallete";

interface EditorProps {}

const Editor: React.FunctionComponent<EditorProps> = () => {
  const handleInputSize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const tag = e.target as HTMLTextAreaElement;
    const maxrow = 5;
    tag.style.height = "auto";
    console.log(getComputedStyle(tag).lineHeight);
    const scrollHeight = Math.min(
      tag.scrollHeight,
      maxrow * parseInt(getComputedStyle(tag).lineHeight)
    );
    tag.style.height = scrollHeight + "px";
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 8px 10px",
        backgroundColor:'white',
        gap: "0.8rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <Addfile />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EmojiPallete />
      </div>
      <div style={{ width: "100%", display: "flex",gap:'1rem' }}>
        <textarea
          id="editor"
          rows={1}
          className="editor_input"
          autoFocus={true}
          autoComplete="off"
          placeholder=" Type a message"
          onInput={(e) => handleInputSize(e)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Send />
        </div>
      </div>
    </div>
  );
};

export default Editor;
