import React, { useState } from "react";
import { menuData } from "../../data/menuData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../static/images/logos/logo.svg";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltip";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper>
      <Link exact to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);
`;
