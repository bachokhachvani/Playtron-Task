import React from "react";
import { Flex } from "./styles/Flex.styled";
import {
  Button,
  LineDiv,
  MainDiv,
  Par,
  ParForAuto,
} from "./styles/Amount.styled";
import Plus from "../assets/icons/plusIcon.svg";
import Minus from "../assets/icons/minusIcon.svg";

export default function AmountComp(props) {
  return (
    <MainDiv>
      <div
        style={{
          backgroundColor: "red",
          margin: "12px 8px 0 12px",
          background: "#160F37",
          borderRadius: "8px",
        }}
      >
        <Flex>
          <Button>
            <img src={Minus} alt="" />
          </Button>
          <Par>{props.text}</Par>
          <Button>
            <img src={Plus} alt="" />
          </Button>
        </Flex>
      </div>
      <ParForAuto>{props.autoText}</ParForAuto>
      <LineDiv>
        <div></div>
      </LineDiv>
    </MainDiv>
  );
}
