import CardList from '@/components/CardList'
import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'

export default function Contact() {
  return (
    <ContentContainer title="MEUS CONTATOS">
      <CardList layout="contact" />
    </ContentContainer>
  )
}
