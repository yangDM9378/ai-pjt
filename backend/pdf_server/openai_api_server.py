from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_classic.chains import RetrievalQA
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
import os
from dotenv import load_dotenv

# .env 로드
load_dotenv()
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

app = FastAPI()
# CORS 허용 (React 서버와 통신)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# 글로벌 변수 (PDF 내용 저장)
vectorstore = None

@app.post('/upload')
async def upload_pdf(file: UploadFile = File(...)):
    global vectorstore
    file_path = f"./data/{file.filename}"
    os.makedirs("./data", exist_ok=True)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    loader = PyPDFLoader(file_path)
    pages = loader.load()
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = splitter.split_documents(pages)

    embeddings = OpenAIEmbeddings()
    vectorstore = Chroma.from_documents(docs, embeddings)
    return {"status": "ok", "filename": file.filename}

@app.post("/ask")
async def ask_question(question: str = Form(...)):
    if vectorstore is None:
        return {"error": "먼저 PDF를 업로드해주세요"}
    
    # OPENAI_API_KEY 명칭 사용시 명시 안해도 자동 적용 (api_key 인자 전달 필요)
    # 예시 api_key=os.getenv("OPENAI_API_KEY") or "fallback-key"
    llm = ChatOpenAI(model="gpt-4o")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm, retriever=vectorstore.as_retriever()
    )
    answer = qa_chain.run(question)
    return {"answer": answer}

def run_openAI_api():
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)