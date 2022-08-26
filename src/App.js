import { Container } from "../src/components/styles/Container.styled";
import AmountComp from "./components/AmountComp";
import { BetButton } from "./components/styles/BetButton.styled";
import { Flex, FlexForMobile } from "./components/styles/Flex.styled";
import { HeaderAuto, HeaderGame } from "./components/styles/Header.styled";

function App() {
  return (
    <div>
      <Container>
        <div style={{ margin: "0 30%" }}>
          <Flex>
            <HeaderGame>
              <p>Game</p>
            </HeaderGame>
            <HeaderAuto>
              {" "}
              <p>Auto</p>
            </HeaderAuto>
          </Flex>
        </div>
        <FlexForMobile>
          <AmountComp text="10.00₾" autoText="Auto Bet"></AmountComp>
          <AmountComp text="10.00X" autoText="Auto Cashout"></AmountComp>
        </FlexForMobile>
        <BetButton>BET</BetButton>
      </Container>
    </div>
  );
}

export default App;
