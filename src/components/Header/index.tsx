'use client'

import React, { useState } from 'react'
import * as S from './styles'
import { audiowide } from '../../assets/fonts'
import Link from 'next/link'

export default function Header() {
  const [isLight, setIsLight] = React.useState(false)

  console.log('is light', isLight)

  const handleCheck = () => {
    setIsLight((prevState) => !prevState)
  }

  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <S.HeaderLogo href="/">
          <h1 className={audiowide.className}>
            Raul<span>Albuquerque</span>
          </h1>
        </S.HeaderLogo>
        <S.SlideContainer>
          <input type="checkbox" name="theme" id="theme" />
          <label htmlFor="theme" onClick={handleCheck}>
            <S.Moon src="/moon.png" />
            <S.Sun src="/sun.png" />
          </label>
        </S.SlideContainer>
      </S.HeaderContainer>
    </S.Header>
  )
}
