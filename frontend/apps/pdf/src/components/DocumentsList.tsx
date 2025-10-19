import { useState } from "react";

const sampleDocs = ["스마트팜_기술백서.pdf", "스마트팜_개요.pdf", "IoT_센서 메뉴얼.pdf"]

export const DocumentList = () =>{
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <h4>관련 문서</h4>
      <ul>
        {sampleDocs.map((doc) => (
          <li
            key={doc}
            style={{
              cursor: "pointer",
              color: selected === doc ? "blue" : "black",
            }}
            onClick={() => setSelected(doc)}
          >
            {doc}
          </li>
        ))}
      </ul>
    </div>
  )
}