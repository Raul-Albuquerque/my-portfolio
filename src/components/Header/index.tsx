import * as S from './styles'
import { audiowide } from '../../assets/fonts'
import Link from 'next/link'

export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <S.HeaderLogo href="/">
          <h1 className={audiowide.className}>
            Raul<span>Albuquerque</span>
          </h1>
        </S.HeaderLogo>
        <div>
          <input type="checkbox" />
        </div>
      </S.HeaderContainer>
    </S.Header>
  )
}
