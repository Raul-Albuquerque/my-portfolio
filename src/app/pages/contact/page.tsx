import CardList from '@/components/CardList'
import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'

export default function Contact() {
  return (
    <div className="main-container">
      <SocialMediaBar />
      <ContentContainer title="MEUS CONTATOS">
        <CardList layout="contact" />
      </ContentContainer>
      <NavBar />
    </div>
  )
}
