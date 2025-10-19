import os
import logging
from mcp.server.fastmcp import FastMCP
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

logging.basicConfig(level=logging.INFO)
mcp = FastMCP("PDF-RAG")

PDF_PATH = "./data/sample.pdf"
qa_chain = None

if os.path.exists(PDF_PATH):
    loader = PyPDFLoader(PDF_PATH)
    pages = loader.load()
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = splitter.split_documents(pages)

    embeddings = OpenAIEmbeddings(model="text-embedding-3-small", api_key=OPENAI_API_KEY)
    llm = ChatOpenAI(model="gpt-3.5-turbo", api_key=OPENAI_API_KEY)
    vectorstore = Chroma.from_documents(docs, embeddings)
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever())

@mcp.tool()
def ask_pdf(query: str) -> str:
    """PDF 내용을 기반으로 질문에 답변합니다."""
    if qa_chain is None:
        return "PDF가 로드되지 않았습니다."
    return qa_chain.run(query)

def run_mcp():
    mcp.run(transport="stdio")
