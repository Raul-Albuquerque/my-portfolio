'use client'
import styled, { ThemeProvider } from 'styled-components'
import darkTheme from '../themes/dark'
import lightTheme from '@/themes/light'
import Header from '@/components/Header'
import { useState } from 'react'

const Providers = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function switchTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Body>
        <Header themeSwitch={switchTheme} />
        {children}
      </Body>
    </ThemeProvider>
  )
}

export default Providers

export const Body = styled.body`
  background-color: ${(props) => props.theme.bgColor};
`
