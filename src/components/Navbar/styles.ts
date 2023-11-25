'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  max-width: 10vw;
  width: 100%;
  height: 75vh;
`

export const LinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 40px auto;
`
export const CustomizedLinks = styled(Link)`
  margin-bottom: 40px;
  text-decoration: none;
  font-weight: 700;
  color: var(--color-gray);

  &:hover {
    color: var(--color-white);
  }
`
