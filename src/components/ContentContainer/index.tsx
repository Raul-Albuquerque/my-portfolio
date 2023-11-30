import Button from '../Button'
import CardList from '../CardList'
import * as S from './styles'
import { firaSans, roboto } from '@/assets/fonts'
import Developer from '@/models/Developer'

type Props = {
  type?: 'home' | 'about' | 'projects' | 'courses' | 'contact'
  title?: string
  children?: JSX.Element
}

export default function ContentContainer({ children, title, type }: Props) {
  return (
    <>
      {type === 'home' && (
        <S.MainContainer>
          {Developer.map((info) => (
            <div key={info.name}>
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
            </div>
          ))}
          <Button href="/pages/contact" fontSize="16px">
            ENTRE EM CONTATO
          </Button>
        </S.MainContainer>
      )}
      {type === 'about' && (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          <div className="container">
            {Developer.map((e) => (
              <S.P key={e.about} className={roboto.className}>
                {e.about}
              </S.P>
            ))}
            <CardList layout="about" />
          </div>
        </S.MainContainer>
      )}
      {type === 'projects' && (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          <div className="container">
            <CardList layout="project" />
          </div>
        </S.MainContainer>
      )}
      {type === 'courses' && (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          <div className="container">
            <CardList layout="courses" />
          </div>
        </S.MainContainer>
      )}
      {type === 'contact' && (
        <S.MainContainer>
          <S.SectionTitle className={firaSans.className}>
            {title}
          </S.SectionTitle>
          <div className="container">
            <CardList layout="contact" />
          </div>
        </S.MainContainer>
      )}
    </>
  )
}
