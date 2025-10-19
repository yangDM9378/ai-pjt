
import {api} from "utils";

export async function uploadPDF(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const {data} = await api.post("/upload", formData);
  return data
}

export async function askQuestion(question: string) {
  const formData = new FormData();
  formData.append("question", question);
  const { data } = await api.post("/ask", formData);
  return data;
}