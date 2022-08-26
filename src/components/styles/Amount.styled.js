import styled from "styled-components";

export const Button = styled.button`
  margin: 0 9px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: none !important;
  font-size: 0;
  img {
    width: 42px;
    height: 42px;
  }
`;

export const Par = styled.p`
  font-family: "FiraGO";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const ParForAuto = styled.p`
  text-align: left;
  font-family: "FiraGO";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  font-feature-settings: "case" on;
  color: #ffffff;
  padding: 10px 0 14px 12px;
`;

export const LineDiv = styled.div`
  margin: 0 44px 24px 12px;
  background: linear-gradient(
    270deg,
    #45397c 21.15%,
    #ddd3f8 48.23%,
    #44377b 83.65%
  );
  border-radius: 4px;
  height: 6px;

  div {
    background: #ffffff;
    border: 1px solid #214834;
    box-shadow: 0px 0px 6px rgba(23, 174, 67, 0.8);
    border-radius: 50%;
    width: 26px;
    height: 26px;
    position: relative;
    bottom: 12px;
    left: 30px;
  }
`;

export const MainDiv = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
