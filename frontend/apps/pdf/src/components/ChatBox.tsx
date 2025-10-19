/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { askQuestion } from "../api/pdfApi";

const ChatBox = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return;
    try {
      const res = await askQuestion(question);
      setAnswer(res.answer);
    } catch (err) {
      console.error(err);
      alert("질문 처리 중 오류 발생");
    }
  };

  return (
    <div>
      <textarea
        placeholder="질문을 입력하세요..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <button onClick={handleAsk}>질문하기</button>

      {answer && (
        <div style={{ marginTop: "16px", whiteSpace: "pre-wrap" }}>
          <strong>답변:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
