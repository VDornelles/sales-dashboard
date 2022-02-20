import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-areas: "general general" "graph1 graph2";
  grid-template-columns: 50% 50%;
  grid-auto-rows: 50px 200px;
  grid-gap: 50px;
  width: 80%;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 30px;

  & > :first-child {
    grid-area: general;
  }

  & > :nth-child(2) {
    grid-area: graph1;
  }

  & > :nth-child(3) {
    grid-area: graph2;
  }
`;
