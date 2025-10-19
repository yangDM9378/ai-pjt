/** @jsxImportSource @emotion/react */
import { useState } from "react";
import ReactDOM from "react-dom/client";
import UploadForm from "./components/UploadForm";
import ChatBox from "./components/ChatBox";
import { GlobalStyle } from "styles";

const App = () => {
  const [uploadedFile, setUploadedFile] = useState("");

  return (
    <>
      <GlobalStyle />
      <div style={{ padding: "24px" }}>
        <h1>📄 PDF Q&A</h1>
        <UploadForm onUpload={setUploadedFile} />
        {uploadedFile && (
          <>
            <hr style={{ margin: "24px 0" }} />
            <ChatBox />
          </>
        )}
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
