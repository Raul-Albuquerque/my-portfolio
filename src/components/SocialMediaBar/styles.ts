'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 70px 40px;
  height: 75vh;
  background-color: var(--color-dark-gray);
  max-width: 140px;
  width: 100%;
  position: relative;
`
export const SocialMediaList = styled.ul`
  color: var(--color-gray);
  padding: 20px 20px 0 20px;
  border: 2px solid var(--color-green);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius);
  position: absolute;
  left: 40px;
  bottom: 50px;
`
export const LinkCustomizado = styled(Link)`
  color: var(--color-gray);
  margin-bottom: 20px;

  &:hover {
    color: var(--color-green);
  }
`
