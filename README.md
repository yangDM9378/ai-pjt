# ai-projects

LangChain + MCP + React 기반의 **AI 문서 분석 프로젝트 모노레포**입니다.  
하나의 레포지토리에서 여러 AI 모듈(PDF, Word, Excel 등)을 독립적으로 개발·실행할 수 있도록 설계되어 있습니다.

---

## 📘 프로젝트 정보

1. **PDF Q&A Project** – LangChain 기반 RAG 시스템
   > 사용자가 업로드한 여러 PDF 문서 중 관련성이 높은 문서를 추천하고,  
   > 선택된 문서를 기반으로 GPT가 답변을 생성하는 Q&A 서비스

---

## ⚙️ 주요 기능

- 🧠 **LangChain + OpenAI GPT-4o** 기반 RAG 구현
- 📄 **다중 PDF 문서 업로드 및 임베딩 처리**
- 🔍 **문서별 유사도 기반 우선순위 추천 시스템**
- 💬 **사용자 선택 기반 응답 생성 (참조 문서 표시)**
- 🔗 **MCP 연동 (Cursor, Claude 등 IDE 내 PDF 분석 지원)**
- 🧩 **모듈형 Monorepo 구조 (Turborepo)**

---

## 🧱 개발 환경

### **Frontend**

- React 19 + Vite + TypeScript
- Emotion (CSS-in-JS) 기반 공통 스타일링
- React Router v7
- Axios 인스턴스 관리
- 공통 패키지 구조
  - `packages/ui` → 공용 컴포넌트
  - `packages/styles` → 테마/GlobalStyle
  - `packages/utils` → API 및 유틸 함수

### **Backend**

- Python 3.13 + LangChain + FastMCP
- OpenAI API (`gpt-4o`, `text-embedding-3-large`)
- Chroma VectorDB
- RAG 기반 PDF 검색 및 응답 생성
- MCP 서버로 IDE 연동 지원

---

## 📁 프로젝트 구조

```
ai-projects/
├── frontend/
│ ├── apps/
│ │ └── pdf/ # PDF Q&A 프론트엔드
│ ├── packages/ # 공용 패키지
│ │ ├── ui/
│ │ ├── styles/
│ │ └── utils/
│ ├── turbo.json
│ └── package.json
│
└── backend/
├── pdf_server/ # LangChain + MCP 서버
│ ├── app.py
│ ├── rag_chain.py
│ ├── requirements.txt
│ └── venv/
└── ...
```

---

## ✅ 진행 상황

### **📦 Backend**

- [x] LangChain + Chroma + OpenAI 세팅
- [x] PDF 로더 및 텍스트 분할
- [x] 문서 임베딩 및 벡터 저장
- [x] RetrievalQA 체인 구성
- [x] MCP 도구 등록 및 실행
- [ ] REST API 연동 (프론트용)

### **🧩 Frontend**

- [x] Vite + React + TS 초기 세팅
- [x] Turborepo 기반 공용 패키지 구성
- [x] Emotion 스타일 구조 적용
- [ ] PDF 업로드 UI 구현
- [ ] 질문 입력 및 답변 출력 UI 구성
- [ ] 관련 문서 추천 리스트 표시

---

## 🚀 실행 방법

```bash
# Backend (LangChain + MCP)
cd backend/pdf_server
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Frontend (React)
cd frontend
npm install
npm run dev
```
