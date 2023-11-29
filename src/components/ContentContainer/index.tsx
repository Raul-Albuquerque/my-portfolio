import Button from '../Button'
import * as S from './styles'
import { firaSans } from '@/assets/fonts'
import { Developer } from '@/models/Developer'

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
          {Developer.map((info) => (
            <S.TextContainer key={info.name}>
              <S.Text className={firaSans.className} paddingL="60px">
                OLÁ, SEJA BEM-VINDO(A)!
              </S.Text>
              <S.Text className={firaSans.className} paddingL="100px">
                ME CHAMO <span>{info.name}</span> E SOU
              </S.Text>
              <S.Text className={firaSans.className} paddingL="140px">
                <span>DESENVOLVEDOR FRONT-END</span>
              </S.Text>
              <S.Detail src="/detalhe.svg" />
            </S.TextContainer>
          ))}
          <Button href="/pages/contact" fontSize="16px">
            ENTRE EM CONTATO
          </Button>
        </S.MainContainer>
      ) : (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          <div className="container">{children}</div>
        </S.MainContainer>
      )}
    </>
  )
}
