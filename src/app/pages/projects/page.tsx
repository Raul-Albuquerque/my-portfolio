import CardList from '@/components/CardList'
import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'

export default function Projects() {
  return (
    <ContentContainer title="PRINCIPAIS PROJETOS">
      <CardList layout="project" />
    </ContentContainer>
  )
}
