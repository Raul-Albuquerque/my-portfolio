import { Fira_Sans } from 'next/font/google'
import Button from '../Button'
import * as S from './styles'

const firaSans = Fira_Sans({
  weight: ['700'],
  subsets: ['latin'],
})

export default function ContentContainer() {
  return (
    <S.MainContainer className="container">
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
  )
}
