'use client'

import styled from 'styled-components'

type Padding = {
  paddingL?: string
}

export const MainContainer = styled.main`
  text-align: start;
  max-height: 85vh;
  height: 100%;
  padding: 80px 40px;
  max-width: 1140px;
  width: 100%;
  position: relative;
`
export const Text = styled.p<Padding>`
  font-size: 64px;
  color: var(--color-gray);
  font-weight: bold;
  padding-left: ${(props) => props.paddingL || '0'};
  margin-bottom: 60px;
  text-transform: uppercase;

  span {
    color: ${(props) => props.theme.contrastColor};
  }
`

export const TextContainer = styled.div``

export const Detail = styled.img`
  display: block;
  padding-left: 54%;
  margin-top: -60px;
`

export const SectionTitle = styled.h2`
  font-size: 48px;
  color: ${(props) => props.theme.sectionTitle};
  width: 150px;
  font-weight: 700;
`
