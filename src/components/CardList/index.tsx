'use client'

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
import { HardSkills, SoftSkills, Courses, Contacts } from '@/models/Developer'

type Props = {
  layout: 'about' | 'project' | 'courses' | 'contact'
}

export default function CardList({ layout }: Props) {
  return (
    <>
      {layout === 'about' && (
        <S.CardsContainer>
          <S.SkillCard>
            <h4 className={firaSans.className}>hard Skills</h4>
            <S.TagsContainer>
              {HardSkills.map((e) => (
                <Tag key={e.skill}>{e.skill}</Tag>
              ))}
            </S.TagsContainer>
          </S.SkillCard>
          <S.SkillCard>
            <h4 className={firaSans.className}>Soft Skills</h4>
            <S.TagsContainer>
              {SoftSkills.map((e) => (
                <Tag key={e.skill}>{e.skill}</Tag>
              ))}
            </S.TagsContainer>
          </S.SkillCard>
        </S.CardsContainer>
      )}
      {layout === 'project' && (
        <>
          <S.CardsContainer>
            <S.ProjectCard>
              <h4 className={firaSans.className}>Projeto 1</h4>
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
                  <Button fontSize="10px" href="/">
                    VER PROJETO
                  </Button>
                </S.LinksContainer>
              </S.ProjectContainer>
            </S.ProjectCard>
            <S.ProjectCard>
              <h4 className={firaSans.className}>Projeto 2</h4>
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
                  <Button fontSize="10px" href="/">
                    VER PROJETO
                  </Button>
                </S.LinksContainer>
              </S.ProjectContainer>
            </S.ProjectCard>
            <S.LinkCustomizado className="as-btn see-more" href="/">
              Ver mais
            </S.LinkCustomizado>
          </S.CardsContainer>
        </>
      )}
      {layout === 'courses' && (
        <>
          <S.CardsContainer>
            {Courses.map((course) => (
              <Card key={course.id}>
                <S.CourseContainer>
                  <S.CourseImage src={course.image} />
                  <S.CourseTitle className={firaSans.className}>
                    {course.title}
                  </S.CourseTitle>
                  <S.CourseDetailsContainer className={firaSans.className}>
                    <S.CourseDetails>Conhecimentos</S.CourseDetails>
                    <p className={roboto.className}>{course.knowledges}</p>
                  </S.CourseDetailsContainer>
                  <S.CourseDetailsContainer className={firaSans.className}>
                    <S.CourseDetails>Período</S.CourseDetails>
                    <p className={roboto.className}>{course.period}</p>
                  </S.CourseDetailsContainer>
                </S.CourseContainer>
              </Card>
            ))}
          </S.CardsContainer>
        </>
      )}
      {layout === 'contact' && (
        <>
          <S.ContactContainer>
            {Contacts.map((contact) => (
              <Card title={contact.name} key={contact.id}>
                <S.ContactLinkContainer>
                  <S.LinkCustomizado target="_blank" href={contact.url}>
                    {contact.name === 'Whatsapp' && <FaWhatsapp size={60} />}
                    {contact.name === 'Github' && <FaGithub size={60} />}
                    {contact.name === 'Linkedin' && <FaLinkedin size={60} />}
                    {contact.name === 'email' && <FaEnvelope size={60} />}
                    {contact.name === 'phone' && <FaPhone size={60} />}
                  </S.LinkCustomizado>
                </S.ContactLinkContainer>
              </Card>
            ))}
          </S.ContactContainer>
        </>
      )}
    </>
  )
}
