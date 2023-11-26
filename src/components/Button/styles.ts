'use client'

import styled from 'styled-components'

import { Props } from './index'

export const Button = styled.button<Props>`
  font-size: ${(props) => props.fontSize || '16px'};
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  cursor: pointer;
  border: 2px solid var(--color-green);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  color: var(--color-green);
  box-shadow:
    inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);

  &:hover {
    color: #82ffc9;
    box-shadow:
      inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);

    &:before {
      transform: translateX(15em);
    }
  }
`
