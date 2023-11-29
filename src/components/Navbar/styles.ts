'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  max-width: 160px;
  width: 100%;
  height: 85vh;
  background-color: blue;
  padding: 20px;
`

export const LinksContainer = styled.ul`
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
    color: ${(props) => props.theme.hoverColor};
  }
`
