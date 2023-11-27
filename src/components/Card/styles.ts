'use client'
import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.sectionTitle};
  margin-top: 40px;
  border-radius: var(--border-radius);
  padding: 16px;
`
export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.contrastColor};
  text-transform: uppercase;
  margin-left: 16px;
`
