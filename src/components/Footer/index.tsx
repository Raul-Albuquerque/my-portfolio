import * as S from './styles'
import { Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <S.Footer>
      <p className={firaSans.className}>
        © 2023 - Raul Albuquerque - Todos os direitos reservados.
      </p>
    </S.Footer>
  )
}
