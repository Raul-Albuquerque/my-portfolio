'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  max-width: 146px;
  width: 100%;
  position: relative;
  padding: 60px 24px;
  height: 75vh;
`

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
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
