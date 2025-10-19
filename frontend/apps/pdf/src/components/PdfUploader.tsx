import {useState} from 'react';
import {uploadPDF} from "../api/pdfApi"

export const FileUploader = () =>{
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  
  const handleUpload = async () => {
    if (!file) return;
    try {
      const res = await uploadPDF(file);
      console.log(res);
      setUploaded(true);
    } catch {
      alert("파일 업로드에 실패했습니다.")
    }
  }
  
  return (
    <div>
      <input
        type = 'file'
        accept = "application/pdf"
        onChange = {(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>업로드</button>
      {uploaded && <p>업로드 완료!</p>}
    </div>
  )
}
