'use client'

import styled from 'styled-components'

type Padding = {
  paddingL?: string
}

export const MainContainer = styled.main`
  text-align: left;
  max-height: 85vh;
  height: 85vh;
  height: 85dvh;
  padding: 60px 40px;
  max-width: 1140px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 10px;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 10px;
    height: 100%;
    text-align: center;
  }

  @media (min-width: 2500px) {
    max-width: 1440px;
    padding: 180px 70px;
    width: 100%;
  }
`

export const Text = styled.p<Padding>`
  font-size: 64px;
  color: var(--color-gray);
  font-weight: bold;
  padding-left: ${(props) => props.paddingL || '0'};
  margin-bottom: 60px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 60px;
    padding-left: 20px;
  }

  @media (min-width: 2500px) {
    font-size: 72px;
    margin-bottom: 80px;
  }

  span {
    color: ${(props) => props.theme.contrastColor};
  }
`

export const Detail = styled.img`
  display: block;
  padding-left: 54%;
  margin-top: -60px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    display: none;
    margin-bottom: 0px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 40px;
  color: ${(props) => props.theme.sectionTitle};
  width: 200px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    padding-left: 20px;
  }
`

export const P = styled.p`
  max-width: 1140px;
  width: 100%;
  font-size: 16px;
  line-height: 32px;
  text-align: left;
  color: ${(props) => props.theme.contrastColor};
  margin: 20px 0;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    padding-left: 8px;
    text-align: center;
  }
`
