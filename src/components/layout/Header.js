import React from "react";
import { menuData } from "../../data/menuData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../static/images/logos/logo.svg";
import MenuButton from "../buttons/MenuButton";

export default function Header() {
  return (
    <Wrapper>
      <Link exact to="/">
        <img src={logo} />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
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
