import "./App.css";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Components/NavBar";
import ContentBox from "./Components/ContentBox";
import MainContentBox from "./Components/MainContentBox";

import * as S from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <S.Container>
        <Navbar />
        <S.MainContainer>
          <MainContentBox />
          <S.BottomBoxes>
            <ContentBox color="pink"></ContentBox>
          </S.BottomBoxes>
        </S.MainContainer>
      </S.Container>
    </div>
  );
}

export default App;
