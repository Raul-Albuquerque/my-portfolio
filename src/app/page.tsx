import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'

export default function Home() {
  return (
    <div className="main-container">
      <SocialMediaBar />
      <ContentContainer />
      <NavBar />
    </div>
  )
}
