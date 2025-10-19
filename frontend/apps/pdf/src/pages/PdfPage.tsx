import { useState } from "react";
import { FileUploader } from "../components/PdfUploader";
import { QuestionForm } from "../components/QuestionForm";
import { AnswerBox } from "../components/AnswerBox";
import { DocumentList } from "../components/DocumentsList";

export const PdfPage = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <h2>PDF Q&A 서비스</h2>
      <FileUploader />
      <QuestionForm onAnswer={setAnswer} />
      <DocumentList />
      <AnswerBox answer={answer} />
    </div>
  )
}