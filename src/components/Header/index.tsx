import React, { useState } from "react";
import { HeaderMenu } from "../../ts/interfaces/header-interfaces";
import { Container, Menu, StyLink, Title } from "./styles";

const Header: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>();

  const menuList: HeaderMenu[] = [
    {
      menuName: "Home",
      iconPath: "/images/home-icon.svg",
      pageLink: "home",
    },
    {
      menuName: "Books",
      iconPath: "/images/book-icon.svg",
      pageLink: "books-and-magazines",
    },
    {
      menuName: "Clothing",
      iconPath: "/images/incognito-icon.svg",
      pageLink: "clothing-and-accessories",
    },
    {
      menuName: "Electronics",
      iconPath: "/images/controller-icon.svg",
      pageLink: "electronics-and-appliances",
    },
    {
      menuName: "Sporting Goods",
      iconPath: "/images/target-icon.svg",
      pageLink: "sporting-goods",
    },
  ];

  const selectMenu = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  return (
    <Container>
      <Title>
        <img src="/images/sales-icon.svg" alt="" />

        <p>Sales Dashboard</p>
      </Title>
      <Menu>
        {menuList.map((menu: HeaderMenu, index: number) => {
          return (
            <StyLink
              to={menu.pageLink}
              key={`${menu.menuName}-${index}`}
              onClick={() => selectMenu(menu.menuName)}
              isSelected={menu.menuName === selectedMenu}
            >
              <img src={menu.iconPath} alt="" />
              <span>{menu.menuName}</span>
            </StyLink>
          );
        })}
      </Menu>
    </Container>
  );
};

export default Header;
