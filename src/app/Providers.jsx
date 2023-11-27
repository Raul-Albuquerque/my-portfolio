'use client'
import styled, { ThemeProvider } from 'styled-components'
import darkTheme from '../themes/dark'
import lightTheme from '@/themes/light'

const Providers = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}

export default Providers

export const Body = styled.body`
  background-color: ${(props) => props.theme.bgColor};
`
