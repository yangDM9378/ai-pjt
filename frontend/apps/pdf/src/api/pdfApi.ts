
import {axiosAPI} from "utils";

export async function uploadPDF(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const {data} = await axiosAPI.post("/upload", formData);
  return data
}

export async function askQuestion(question: string) {
  const formData = new FormData();
  formData.append("question", question);
  const { data } = await axiosAPI.post("/ask", formData);
  return data;
}