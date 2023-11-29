'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 40px;
  height: 80vh;
  max-width: 140px;
  width: 100%;
  display: flex;
  align-items: end;
  background-color: red;
`
export const SocialMediaList = styled.ul`
  color: var(--color-gray);
  padding: 10px 20px;
  border: 2px solid var(--color-green);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: var(--border-radius);
  margin: 0 auto;
`
export const LinkCustomizado = styled(Link)`
  color: var(--color-gray);
  margin-top: 10px;
  margin-botoom: 10px;
  font-size: 16px;
  transition: 0.5s;

  &:hover {
    color: var(--color-green);
    transform: scale(1.2);
    transition: 0.5s;
  }
`
