import * as S from './styles'
import { firaSans } from '@/assets/fonts'

export default function NavBar() {
  return (
    <S.Nav>
      <S.LinksContainer>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          HOME
        </S.CustomizedLinks>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          SOBRE MIM
        </S.CustomizedLinks>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          PROJETOS
        </S.CustomizedLinks>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          CURSOS
        </S.CustomizedLinks>
        <S.CustomizedLinks className={firaSans.className} href={'/'}>
          CONTATO
        </S.CustomizedLinks>
      </S.LinksContainer>
    </S.Nav>
  )
}
