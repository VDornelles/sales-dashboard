import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  max-height: 100px;
  background-color: #411bfa;
  padding: 30px;

  img {
    height: 50px;
  }

  * {
    color: #ffffff;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  font-size: 20px;

  img {
    fill: #ffffff;
    margin-right: 15px;
  }
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;

interface IStyLink {
  readonly isSelected: boolean;
}

export const StyLink = styled(Link)<IStyLink>`
  display: flex;
  align-items: center;
  padding: 0 12px;

  img {
    height: 15px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
    margin-right: 5px;
  }

  span {
    color: ${(props) => (props.isSelected ? "rgb(249, 249, 249)" : "rgb(150, 150, 150)")};
    font-size: 16px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before {
      background: rgb(249, 249, 249);
      border-radius: 4px 4px 4px 4px;
      bottom: -6px;
      display: block;
      content: "";
      height: 1.5px;
      left: 0;
      opacity: 1;
      position: absolute;
      right: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
    }
  }
`;
