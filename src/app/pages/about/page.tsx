import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'
import { roboto } from '@/assets/fonts'
import * as S from './styles'
import CardList from '@/components/CardList'
import { Developer } from '@/models/Developer'

export default function About() {
  return (
    <ContentContainer title="SOBRE MIM">
      <>
        {Developer.map((e) => (
          <S.P key={e.about} className={roboto.className}>
            {e.about}
          </S.P>
        ))}

        <CardList layout="about" />
      </>
    </ContentContainer>
  )
}
