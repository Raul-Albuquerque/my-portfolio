'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 20px;
  height: 85vh;
  width: 5vw;
  display: flex;
  align-items: end;
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
  margin: 0 auto;
`
export const LinkCustomizado = styled(Link)`
  color: var(--color-gray);
  margin-bottom: 20px;
  font-size: 16px;
  transition: 0.5s;

  &:hover {
    color: var(--color-green);
    transform: scale(1.2);
    transition: 0.5s;
  }
`
