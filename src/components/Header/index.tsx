import React from "react";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../../ts/interfaces/header-interfaces";
import { Container, Menu, Title } from "./styles";

const Header: React.FC = () => {
  const menuList: HeaderMenu[] = [
    {
      menuName: "General",
      iconPath: "/images/home-icon.svg",
      pageLink: "home",
    },
    {
      menuName: "By Year",
      iconPath: "/images/graph-icon.svg",
      pageLink: "yearly",
    },
  ];

  return (
    <Container>
      <Title>
        <img src="/images/sales-icon.svg" alt="" />

        <p>Sales Dashboard</p>
      </Title>
      <Menu>
        {menuList.map((menu: HeaderMenu, index: number) => {
          return (
            <Link to={menu.pageLink} key={`${menu.menuName}-${index}`}>
              <img src={menu.iconPath} alt="" />
              <span>{menu.menuName}</span>
            </Link>
          );
        })}
      </Menu>
    </Container>
  );
};

export default Header;
