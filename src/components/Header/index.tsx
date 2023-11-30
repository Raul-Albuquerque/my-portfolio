'use client'

import React, { useState } from 'react'
import * as S from './styles'
import { audiowide, firaSans } from '../../assets/fonts'

type Props = {
  themeSwitch: () => void
}

export default function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburger>
        <S.HeaderLogo href="/">
          <h1 className={audiowide.className}>
            Raul<span>Albuquerque</span>
          </h1>
        </S.HeaderLogo>
        <S.SlideContainer>
          <input type="checkbox" name="theme" id="theme" />
          <label htmlFor="theme" onClick={props.themeSwitch}>
            <S.Sun src="/sun.png" />
            <S.Moon src="/moon.png" />
          </label>
        </S.SlideContainer>
      </S.HeaderContainer>
      <S.NavBarContainer className={isMenuOpen ? 'isOpen' : ''}>
        <S.NavBar className="container">
          <S.ListItem>
            <S.Item
              className={firaSans.className}
              href={'/pages/about'}
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE MIM
            </S.Item>
            <S.Item
              className={firaSans.className}
              href={'/pages/projects'}
              onClick={() => setIsMenuOpen(false)}
            >
              PROJETOS
            </S.Item>
            <S.Item
              className={firaSans.className}
              href={'/pages/courses'}
              onClick={() => setIsMenuOpen(false)}
            >
              CURSOS
            </S.Item>
            <S.Item
              className={firaSans.className}
              href={'/pages/contact'}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTATO
            </S.Item>
          </S.ListItem>
        </S.NavBar>
      </S.NavBarContainer>
    </S.Header>
  )
}
