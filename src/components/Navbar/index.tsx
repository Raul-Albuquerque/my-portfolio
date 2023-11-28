import { useState } from 'react'
import * as S from './styles'
import { firaSans } from '@/assets/fonts'

export default function NavBar() {
  return (
    <S.Nav>
      <S.LinksContainer>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          HOME
        </S.CustomizedLinks>
        <S.CustomizedLinks className={firaSans.className} href={'/pages/about'}>
          SOBRE MIM
        </S.CustomizedLinks>
        <S.CustomizedLinks
          className={firaSans.className}
          href={'/pages/projects'}
        >
          PROJETOS
        </S.CustomizedLinks>
        <S.CustomizedLinks
          className={firaSans.className}
          href={'/pages/courses'}
        >
          CURSOS
        </S.CustomizedLinks>
        <S.CustomizedLinks
          className={firaSans.className}
          href={'/pages/contact'}
        >
          CONTATO
        </S.CustomizedLinks>
      </S.LinksContainer>
    </S.Nav>
  )
}
