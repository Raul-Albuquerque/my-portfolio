import * as S from './styles'
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <h1 className={audiowide.className}>
          Raul<span>Albuquerque</span>
        </h1>
        <div>
          <input type="checkbox" />
        </div>
      </S.HeaderContainer>
    </S.Header>
  )
}
