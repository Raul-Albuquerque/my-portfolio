import ContentContainer from '@/components/ContentContainer'
import NavBar from '@/components/Navbar'
import SocialMediaBar from '@/components/SocialMediaBar'
import { roboto } from '@/assets/fonts'
import * as S from './styles'
import CardList from '@/components/CardList'

export default function About() {
  return (
    <div className="main-container">
      <SocialMediaBar />
      <ContentContainer title="SOBRE MIM">
        <>
          <S.P className={roboto.className}>
            Sou um desenvolvedor Front End🧑🏻‍💻 com um perfil criativo,
            extremamente interessado em tecnologia e pela capacidade de promover
            experiências através de uma tela. Fui Oficial do Exército durante 7
            (sete) anos, onde pude desenvolver minha disciplina, resiliência,
            responsabilidade, liderança, colaboratividade, equilíbrio emocional,
            flexibilidade e sempre busquei solucionar os problemas da melhor
            forma. Nesse período, tive contato com pessoas de diferentes locais
            do país, fortalecendo minha empatia, comunicação e capacidade de
            trabalhar em equipe.
          </S.P>
          <CardList layout="about" />
        </>
      </ContentContainer>
      <NavBar />
    </div>
  )
}
