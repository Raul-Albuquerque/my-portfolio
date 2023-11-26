import Link from 'next/link'
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import Card from '../Card'
import Tag from '../Tag'
import * as S from './styles'
import Button from '../Button'
import { roboto, firaSans } from '@/assets/fonts'
import { LinkCustomizado } from '../SocialMediaBar/styles'

type Props = {
  layout: 'about' | 'project' | 'courses' | 'contact'
}

export default function CardList({ layout }: Props) {
  return (
    <>
      {layout === 'about' && (
        <S.CardsContainer>
          <Card title="Hard Skills">
            <S.TagsContainer>
              <Tag>Equilibrio emocional</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
            </S.TagsContainer>
          </Card>
          <Card title="Soft Skills">
            <S.TagsContainer>
              <Tag>Equilibrio emocional</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
              <Tag>Equilibrio emocional</Tag>
            </S.TagsContainer>
          </Card>
        </S.CardsContainer>
      )}
      {layout === 'project' && (
        <>
          <S.CardsContainer>
            <Card title="Projeto 1">
              <S.ProjectContainer>
                <S.ProjectImage src="/projeto.png" />
                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <S.TagsContainer>
                  <Tag>JavaScript</Tag>
                </S.TagsContainer>
                <S.LinksContainer>
                  <S.LinkCustomizado href="https://github.com/Raul-Albuquerque">
                    <FaGithub size={32} />
                  </S.LinkCustomizado>
                  <Button fontSize="10px" type="link">
                    VER PROJETO
                  </Button>
                </S.LinksContainer>
              </S.ProjectContainer>
            </Card>
            <Card title="Projeto 2">
              <S.ProjectContainer>
                <S.ProjectImage src="/projeto.png" />
                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <S.TagsContainer>
                  <Tag>JavaScript</Tag>
                </S.TagsContainer>
                <S.LinksContainer>
                  <S.LinkCustomizado href="https://github.com/Raul-Albuquerque">
                    <FaGithub size={32} />
                  </S.LinkCustomizado>
                  <Button fontSize="10px" type="button">
                    VER PROJETO
                  </Button>
                </S.LinksContainer>
              </S.ProjectContainer>
            </Card>
            <Card title="Projeto 3">
              <S.ProjectContainer>
                <S.ProjectImage src="/projeto.png" />
                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <S.TagsContainer>
                  <Tag>JavaScript</Tag>
                </S.TagsContainer>
                <S.LinksContainer>
                  <S.LinkCustomizado href="https://github.com/Raul-Albuquerque">
                    <FaGithub size={32} />
                  </S.LinkCustomizado>
                  <Button fontSize="10px" type="button">
                    VER PROJETO
                  </Button>
                </S.LinksContainer>
              </S.ProjectContainer>
            </Card>
            <S.LinkCustomizado className="as-btn see-more" href="/">
              Ver mais
            </S.LinkCustomizado>
          </S.CardsContainer>
        </>
      )}
      {layout === 'courses' && (
        <>
          <S.CardsContainer>
            <Card>
              <S.CourseContainer>
                <S.CourseImage src="/ebac.png" />
                <S.CourseTitle className={firaSans.className}>
                  DESENVOLVEDOR FULL-STACK PYTHON
                </S.CourseTitle>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Conhecimentos</S.CourseDetails>
                  <p className={roboto.className}>
                    HTML, JS, TS, CSS, SASS, LESS, GRUNT, GULP, React, Vue.JS,
                    Python, DJANGO, Docker, CircleCI, DevOps e SQL.
                  </p>
                </S.CourseDetailsContainer>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Período</S.CourseDetails>
                  <p className={roboto.className}>04/2023 - 04/2024</p>
                </S.CourseDetailsContainer>
              </S.CourseContainer>
            </Card>
            <Card>
              <S.CourseContainer>
                <S.CourseImage src="/origamid.png" />
                <S.CourseTitle className={firaSans.className}>
                  UI DESIGN PARA INICIANTES
                </S.CourseTitle>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Conhecimentos</S.CourseDetails>
                  <p className={roboto.className}>
                    UI Design, UX Design, Cores, Tipografia, Protótipo, Figma.
                  </p>
                </S.CourseDetailsContainer>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Período</S.CourseDetails>
                  <p className={roboto.className}>04/2023 - 11/2023</p>
                </S.CourseDetailsContainer>
              </S.CourseContainer>
            </Card>
            <Card>
              <S.CourseContainer>
                <S.CourseImage src="/udemy.png" />
                <S.CourseTitle className={firaSans.className}>
                  DESENVOLVIMENTO WEB 2023
                </S.CourseTitle>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Conhecimentos</S.CourseDetails>
                  <p className={roboto.className}>
                    HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP, OO, MySQL,
                    JQuery, MVC, APIs, IONIC e Wordpress as CMS.
                  </p>
                </S.CourseDetailsContainer>
                <S.CourseDetailsContainer className={firaSans.className}>
                  <S.CourseDetails>Período</S.CourseDetails>
                  <p className={roboto.className}>12/2022 - 04/2023</p>
                </S.CourseDetailsContainer>
              </S.CourseContainer>
            </Card>
          </S.CardsContainer>
        </>
      )}
      {layout === 'contact' && (
        <>
          <S.ContactContainer>
            <Card title="WHATSAPP">
              <S.ContactLinkContainer>
                <S.LinkCustomizado
                  target="_blank"
                  href="https://wa.me/5581997080397?text=Oi,%20vim%20pelo%20seu%20site."
                >
                  <FaWhatsapp size={60} />
                </S.LinkCustomizado>
              </S.ContactLinkContainer>
            </Card>
            <Card title="REDES SOCIAIS">
              <>
                <S.ContactLinkContainer>
                  <S.LinkCustomizado
                    target="_blank"
                    href="https://github.com/Raul-Albuquerque"
                  >
                    <FaGithub size={60} />
                  </S.LinkCustomizado>
                  <S.LinkCustomizado
                    target="_blank"
                    href="https://linkedin.com/in/dev-raul-albuquerque"
                  >
                    <FaLinkedin size={60} />
                  </S.LinkCustomizado>
                </S.ContactLinkContainer>
              </>
            </Card>
            <Card title="OUTROS CONTATOS">
              <S.OtherContacts>
                <S.ContactLinkContainer>
                  <S.LinkCustomizado
                    target="_blank"
                    href="mailto:raulmalbuquerque2014@gmail.com"
                  >
                    <FaEnvelope size={30} />
                    raulmalbuquerque2014@gmail.com
                  </S.LinkCustomizado>
                  <S.LinkCustomizado
                    target="_blank"
                    href="https://wa.me/5581997080397?text=Oi,%20vim%20pelo%20seu%20site."
                  >
                    <FaPhone size={30} />
                    +55 81 99708-0397
                  </S.LinkCustomizado>
                </S.ContactLinkContainer>
              </S.OtherContacts>
            </Card>
          </S.ContactContainer>
        </>
      )}
    </>
  )
}
