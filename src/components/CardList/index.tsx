'use client'

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
import {
  HardSkills,
  SoftSkills,
  Courses,
  Contacts,
  Projects,
} from '@/models/Developer'

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
            {Projects.map((project) => (
              <S.ProjectCard key={project.id}>
                <h4 className={firaSans.className}>{project.name}</h4>
                <S.ProjectContainer>
                  <S.ProjectImage src={project.image} />
                  <p className={roboto.className}>{project.description}</p>
                  <S.TagsContainer>
                    {project.techs.map((item) => (
                      <Tag key={item.tech}>{item.tech}</Tag>
                    ))}
                  </S.TagsContainer>
                  <S.LinksContainer>
                    <S.LinkCustomizado href={project.gitHubUrl}>
                      <FaGithub size={32} />
                    </S.LinkCustomizado>
                    <Button fontSize="10px" href={project.url}>
                      VER PROJETO
                    </Button>
                  </S.LinksContainer>
                </S.ProjectContainer>
              </S.ProjectCard>
            ))}
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
