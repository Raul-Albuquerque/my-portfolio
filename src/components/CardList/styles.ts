'use client'
import styled from 'styled-components'
import Link from 'next/link'

export const CardsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  position: relative;
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
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
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
  margin-right: 20px;

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
    margin-left: 20px;
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
    margin-top: 8px;
    font-weight: 700;
    color: ${(props) => props.theme.contrastColor};
  }
`

export const ProjectImage = styled.img`
  width: 240px;
  height: 137px;
  display: block;
  margin: 0 auto;
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

export const CourseCard = styled.section`
  max-width: 320px;
  width: 100%;
  max-height: 320px;
  height: 100%;
  background-color: ${(props) => props.theme.sectionTitle};
  border-radius: var(--border-radius);
  padding: 16px;
  transition: 1s;
  margin-top: 20px;
  margin-right: 20px;

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
    margin-left: 20px;
  }
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
  margin-bottom: 20px;
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.contrastColor};
  }
`

export const CourseDetails = styled.h5`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: var(--color-black);
  text-transform: uppercase;
  margin-bottom: 4px;
`

export const ContactCard = styled.section`
  max-width: 120px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  background-color: ${(props) => props.theme.sectionTitle};
  border-radius: var(--border-radius);
  padding: 16px;
  transition: 1s;
  margin-top: 40px;

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
    margin-left: 20px;
  }
`

export const ContactContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export const ContactLinkContainer = styled.div`
  display: block;
  text-align: center;
`
