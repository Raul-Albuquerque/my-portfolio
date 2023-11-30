'use client'
import styled from 'styled-components'

export const Tag = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--color-full-black);
  display: inline-block;
  padding: 6px 12px;
  color: var(--color-white);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 4px 8px;
    color: var(--color-white);
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.1);
  }
`
