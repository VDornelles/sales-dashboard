import styled from "styled-components";

export const StyYearSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.8);
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    border: 1px solid rgba(0, 0, 0, 0.2);

    :hover {
      cursor: default;
    }
  }
`;
