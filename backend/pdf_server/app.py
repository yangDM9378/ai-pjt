import threading
from mcp_server import run_mcp
from api_server import run_fastapi

if __name__ == "__main__":
    # FastAPI 서버를 별도 스레드에서 실행
    api_thread = threading.Thread(target=run_fastapi)
    api_thread.start()

    # MCP 서버 실행
    run_mcp()
