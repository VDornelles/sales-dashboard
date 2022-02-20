import styled from "styled-components";

export const InformationCard = styled.div`
  display: flex;
  width: 80%;
  max-height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto 50px auto;
  margin-right: auto;
  box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const InformationData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: rgba(66, 65, 65);
  width: 20%;
  justify-content: center;
  align-items: center;

  & > :first-child {
    font-size: 12px;
    color: rgba(66, 65, 65, 0.5);
  }
`;

export const VerticalSeparator = styled.div`
  height: 30px;
  margin: 0px 5px;
  width: 2px;
  background-color: rgba(66, 65, 65, 0.2);
`;
