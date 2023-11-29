'use client'
import styled from 'styled-components'
import Button from '../Button'
import Link from 'next/link'

export const CardsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  position: relative;
  max-width: 1024px;
  width: 100%;
`
export const SkillCard = styled.section`
  max-width: 460px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  background-color: ${(props) => props.theme.sectionTitle};
  border-radius: var(--border-radius);
  padding: 16px;
  transition: 1s;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.contrastColor};
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &:hover {
    background-color: var(--color-green);
    transition: 1s;
  }
`

export const TagsContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;
`

export const ProjectCard = styled.section`
  max-width: 360px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  background-color: ${(props) => props.theme.sectionTitle};
  border-radius: var(--border-radius);
  padding: 16px;
  transition: 1s;
  margin-top: 20px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.contrastColor};
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`

export const ProjectContainer = styled.div`
  padding: 8px;
  width: 100%;
  height: 100%;

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => props.theme.contrastColor};
  }
`

export const ProjectImage = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 8px;
  display: block;
`
export const LinkCustomizado = styled(Link)`
  color: ${(props) => props.theme.contrastColor};
  font-size: 16px;
  height: 35px;
  margin-right: 16px;

  &:hover {
    color: var(--color-green);
  }

  &.see-more {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: auto;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`

export const CourseContainer = styled.div`
  max-width: 320px;
  max-height: 310px;
  height: 100%;
  padding: 10px 16px 16px 16px;
`

export const CourseImage = styled.img`
  height: 37px;
  display: block;
  margin-bottom: 10px;
`

export const CourseTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.contrastColor};
  text-transform: uppercase;
`

export const CourseDetailsContainer = styled.div`
  margin-top: 20px;
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.contrastColor};
    margin-top: 4px;
  }
`

export const CourseDetails = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-black);
  text-transform: uppercase;
`

export const ContactContainer = styled.section`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`

export const ContactLinkContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`
export const OtherContacts = styled.div`
  width: 100%;
`
