'use client'

import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaFileDownload,
} from 'react-icons/fa'
import Tag from '../Tag'
import * as S from './styles'
import Button from '../Button'
import { roboto, firaSans } from '@/assets/fonts'
import Developer from '@/models/Developer'

type Props = {
  layout: 'about' | 'project' | 'courses' | 'contact'
}

export default function CardList({ layout }: Props) {
  return (
    <>
      {Developer.map((info) => (
        <>
          {layout === 'about' && (
            <S.CardsContainerAbout key={info.name} className="about">
              <S.SkillCard>
                <h4 className={firaSans.className}>hard Skills</h4>
                <S.TagsContainer>
                  {info.hardSkills.map((e) => (
                    <Tag key={e.skill}>{e.skill}</Tag>
                  ))}
                </S.TagsContainer>
              </S.SkillCard>
              <S.SkillCard>
                <h4 className={firaSans.className}>Soft Skills</h4>
                <S.TagsContainer>
                  {info.softSkills.map((e) => (
                    <Tag key={e.skill}>{e.skill}</Tag>
                  ))}
                </S.TagsContainer>
              </S.SkillCard>
            </S.CardsContainerAbout>
          )}
          {layout === 'project' && (
            <>
              <S.CardsContainer key={info.name}>
                {info.projects.map((project) => (
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
                        <S.LinkCustomizado
                          href={project.gitHubUrl}
                          target="_blank"
                        >
                          <FaGithub size={32} />
                        </S.LinkCustomizado>
                        <Button
                          type="project"
                          fontSize="10px"
                          href={project.url}
                        >
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
              <S.CardsContainer key={info.name}>
                {info.courses.map((course) => (
                  <S.CourseCard key={course.id}>
                    <S.CourseContainer>
                      <S.CourseImage src={course.image} />
                      <h4 className={firaSans.className}>{course.title}</h4>
                      <S.CourseDetailsContainer className={firaSans.className}>
                        <S.CourseDetails>Conhecimentos:</S.CourseDetails>
                        <p className={roboto.className}>{course.knowledges}</p>
                      </S.CourseDetailsContainer>
                      <S.CourseDetailsContainer className={firaSans.className}>
                        <S.CourseDetails>Período:</S.CourseDetails>
                        <p className={roboto.className}>{course.period}</p>
                      </S.CourseDetailsContainer>
                    </S.CourseContainer>
                  </S.CourseCard>
                ))}
              </S.CardsContainer>
            </>
          )}
          {layout === 'contact' && (
            <>
              <S.ContactContainer className="container" key={info.name}>
                {info.contacts.map((contact) => (
                  <S.ContactCard key={contact.id}>
                    <h4 className={firaSans.className}>{contact.name}</h4>
                    <S.ContactLinkContainer>
                      <S.LinkCustomizado target="_blank" href={contact.url}>
                        {contact.name === 'Whatsapp' && (
                          <FaWhatsapp size={40} />
                        )}
                        {contact.name === 'Github' && <FaGithub size={40} />}
                        {contact.name === 'Linkedin' && (
                          <FaLinkedin size={40} />
                        )}
                        {contact.name === 'email' && <FaEnvelope size={40} />}
                        {contact.name === 'phone' && <FaPhone size={36} />}
                        {contact.name === 'CV' && <FaFileDownload size={40} />}
                      </S.LinkCustomizado>
                    </S.ContactLinkContainer>
                  </S.ContactCard>
                ))}
              </S.ContactContainer>
            </>
          )}
        </>
      ))}
    </>
  )
}
