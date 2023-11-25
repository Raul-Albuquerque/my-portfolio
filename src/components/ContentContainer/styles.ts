'use client'

import styled from 'styled-components'

type Padding = {
  paddingL?: string
}

export const MainContainer = styled.main`
  padding: 60px 60px;
  height: 75vh;
`
export const Text = styled.p<Padding>`
  font-size: 64px;
  color: var(--color-gray);
  font-weight: bold;
  padding-left: ${(props) => props.paddingL || '0'};
  margin-bottom: 60px;

  span {
    color: var(--color-white);
  }
`

export const TextContainer = styled.div`
  text-align: start;
  height: 100%;
`

export const Detail = styled.img`
  display: block;
  padding-left: 50%;
  margin-top: -60px;
`
