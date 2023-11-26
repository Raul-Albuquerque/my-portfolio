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
