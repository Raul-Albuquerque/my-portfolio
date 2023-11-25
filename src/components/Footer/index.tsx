import * as S from './styles'
import { firaSans } from '@/assets/fonts'

export default function Footer() {
  return (
    <S.Footer>
      <p className={firaSans.className}>
        © 2023 - Raul Albuquerque - Todos os direitos reservados.
      </p>
    </S.Footer>
  )
}
