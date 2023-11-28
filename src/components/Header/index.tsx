'use client'

import React, { useState } from 'react'
import * as S from './styles'
import { audiowide } from '../../assets/fonts'
import Link from 'next/link'

type Props = {
  themeSwitch: () => void
}

export default function Header(props: Props) {
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
          <label htmlFor="theme" onClick={props.themeSwitch}>
            <S.Sun src="/sun.png" />
            <S.Moon src="/moon.png" />
          </label>
        </S.SlideContainer>
      </S.HeaderContainer>
    </S.Header>
  )
}
