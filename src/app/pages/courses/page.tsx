import CardList from '@/components/CardList'
import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'

export default function Courses() {
  return (
    <div className="main-container">
      <SocialMediaBar />
      <ContentContainer title="MEUS CURSOS">
        <>
          <CardList layout="courses" />
        </>
      </ContentContainer>
      <NavBar />
    </div>
  )
}
