'use client'

import styled from 'styled-components'

import { Props } from './index'
import Link from 'next/link'

export const Button = styled(Link)<Props>`
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  background-color: transparent;
  font-family: 'Roboto', Arial, 'Segoe UI', sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: ${(props) => props.theme.contrastColor};
  z-index: 2;
  box-sizing: border-box;
  text-decoration: none;

  &:after {
    box-sizing: border-box;
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  &:hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
    display: block;
    padding: 2em 2em;
    width: 200px;
    margin: 0 auto;
  }

  @media (min-width: 2500px) {
    font-size: 24px;
  }
`

export const ProjectButton = styled(Button)`
  font-size: 12px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 8px;
    display: inline-block;
    width: 80px;
    padding: 2em 1em;
  }
`
