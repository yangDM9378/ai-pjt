import { Button } from "ui";
import { GlobalStyle } from "styles";
import { apiRequest } from "utils";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button label="PDF 분석 요청" onClick={() => apiRequest("/analyze")} />
    </>
  );
}
export default App;