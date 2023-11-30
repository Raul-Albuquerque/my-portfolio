'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--color-black);
  padding: 20px 0;
  max-height: 120px;
  height: 100%;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    line-height: 60px;
    color: var(--color-white);

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }

    span {
      color: var(--color-green);
    }
  }
`
export const HeaderLogo = styled(Link)`
  text-decoration: none;
`

export const SlideContainer = styled.div`
  height: 60px;
  label {
    width: 90px;
    height: 40px;
    border-radius: 20px;
    display: block;
    background: var(--color-gray);
    position: relative;
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 50px;
      height: 20px;
      border-radius: 20px;
    }

    &:after {
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0px;
      left: 0px;
      background: var(--color-white);
      border-radius: 20px;
      transition: 1s;

      @media (max-width: 1024px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  input {
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label {
      background: var(--color-white);
    }

    &:checked + label:after {
      left: 90px;
      transform: translateX(-100%);
      background-color: var(--color-gray);
      transition: 1s;

      @media (max-width: 1024px) {
        left: 50px;
      }
    }
  }
`
export const Moon = styled.img`
  position: absolute;
  width: 20px;
  top: 10px;
  left: 60px;

  @media (max-width: 1024px) {
    width: 10px;
    height: 10px;
    left: 30px;
    top: 5px;
  }
`
export const Sun = styled.img`
  position: absolute;
  width: 20px;
  top: 10px;
  left: 10px;

  @media (max-width: 1024px) {
    width: 10px;
    height: 10px;
    top: 5px;
  }
`

export const Hamburger = styled.div`
  width: 32px;
  display: none;

  span {
    height: 2px;
    width: 100%;
    background-color: var(--color-white);
    margin-bottom: 4px;
    border-radius: var(--border-radius);
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavBarContainer = styled.div`
  display: none;

  &.isOpen {
    display: block;
  }
`

export const NavBar = styled.nav``

export const ListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Item = styled(Link)`
  text-decoration: none;
  font-size: 10px;
  color: var(--color-white);
  padding: 8px;
  font-weight: bold;

  &:hover {
    color: var(--color-green);
  }
`
