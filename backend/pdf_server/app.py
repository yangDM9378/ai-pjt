import threading
from mcp_server import run_mcp
from openai_api_server import run_openAI_api
from gemini_api_server import run_gemini_api

if __name__ == "__main__":
    # # openAI FastAPI 서버를 별도 스레드에서 실행
    # api_thread = threading.Thread(target=run_openAI_api)
    # api_thread.start()
    # Gemini FastAPI 서버를 별도 스레드에서 실행
    gemini_thread = threading.Thread(target=run_gemini_api)
    gemini_thread.start()
    gemini_thread.join()
    # # MCP 서버 실행
    # run_mcp()
