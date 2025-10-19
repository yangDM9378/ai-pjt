/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { uploadPDF } from "../api/pdfApi";

const UploadForm = ({ onUpload }: { onUpload: (filename: string) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("PDF 파일을 선택하세요.");
    setLoading(true);
    try {
      const res = await uploadPDF(file);
      onUpload(res.filename);
      alert("파일 업로드 완료!");
    } catch (err) {
      console.error(err);
      alert("업로드 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "업로드 중..." : "업로드"}
      </button>
    </div>
  );
};

export default UploadForm;