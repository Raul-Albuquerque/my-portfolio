'use client'

import styled from 'styled-components'

export const P = styled.p`
  max-width: 85vw;
  width: 100%;
  font-size: 16px;
  line-height: 32px;
  color: ${(props) => props.theme.contrastColor};
  margin: 20px 0;
`
