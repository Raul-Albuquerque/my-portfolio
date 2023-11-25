import Button from '../Button'
import * as S from './styles'
import { firaSans } from '@/assets/fonts'

type Props = {
  type?: 'home'
  title?: string
  children?: JSX.Element
}

export default function ContentContainer({ children, title, type }: Props) {
  return (
    <>
      {type === 'home' ? (
        <S.MainContainer>
          <div>
            <S.TextContainer>
              <S.Text className={firaSans.className} paddingL="60px">
                OLÁ, SEJA BEM-VINDO(A)!
              </S.Text>
              <S.Text className={firaSans.className} paddingL="100px">
                ME CHAMO <span>RAUL</span> E SOU
              </S.Text>
              <S.Text className={firaSans.className} paddingL="140px">
                <span>DESENVOLVEDOR FRONT-END</span>
              </S.Text>
              <S.Detail src="/detalhe.svg" />
            </S.TextContainer>
            <Button type="button">ENTRE EM CONTATO</Button>
          </div>
        </S.MainContainer>
      ) : (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          {children}
        </S.MainContainer>
      )}
    </>
  )
}
