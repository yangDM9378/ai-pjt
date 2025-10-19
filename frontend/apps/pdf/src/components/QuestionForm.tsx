import { useState } from "react";
import {askQuestion} from "../api/pdfApi"

export const QuestionForm = ({ onAnswer }: { onAnswer: (a: string) => void }) => {
  const [question, setQuestion] = useState("");

  const handleAsk = async () => {
    try {
      const res = await askQuestion(question);
      onAnswer(res.answer)
    } catch {
      alert('질문 중 오류 발생하였습니다.')
    }
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="질문을 입력해주세요"
      />
      <button onClick={handleAsk}>질문하기</button>
    </div>
  )
}