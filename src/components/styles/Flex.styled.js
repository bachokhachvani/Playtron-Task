import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div,
  & > ul {
    flex: 1;
  }
`;

export const FlexForMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
