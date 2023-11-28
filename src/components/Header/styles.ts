'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--color-black);
  padding: 30px 0;
  max-height: 10vh;
  height: 100%;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    line-height: 40px;
    color: var(--color-white);

    span {
      color: var(--color-green);
    }
  }
`
export const HeaderLogo = styled(Link)`
  text-decoration: none;
`

export const SlideContainer = styled.div`
  label {
    width: 90px;
    height: 40px;
    border-radius: 20px;
    display: block;
    background: var(--color-gray);
    position: relative;
    cursor: pointer;

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
    }
  }
`
export const Moon = styled.img`
  position: absolute;
  width: 20px;
  top: 10px;
  left: 60px;
`
export const Sun = styled.img`
  position: absolute;
  width: 20px;
  top: 10px;
  left: 10px;
`
