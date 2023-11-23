'use client'

import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--color-full-black);
  padding: 30px 0;
  height: 100px;
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
