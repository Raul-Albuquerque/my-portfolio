'use client'

import styled from 'styled-components'

type Padding = {
  paddingL?: string
}

export const MainContainer = styled.main`
  text-align: start;
  max-height: 85vh;
  height: 85vh;
  height: 85dvh;
  padding: 60px 40px;
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

export const Detail = styled.img`
  display: block;
  padding-left: 54%;
  margin-top: -60px;
`

export const SectionTitle = styled.h2`
  font-size: 40px;
  color: ${(props) => props.theme.sectionTitle};
  width: 200px;
  font-weight: 700;
`

export const P = styled.p`
  max-width: 1140px;
  width: 100%;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.contrastColor};
  margin: 20px 0;
  padding-left: 20px;
`
