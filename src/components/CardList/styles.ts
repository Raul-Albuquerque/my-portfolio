'use client'
import styled from 'styled-components'
import Link from 'next/link'

export const CardsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
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

  @media (max-width: 768px) {
    padding: 8px;
    h4 {
      font-size: 12px;
      margin-bottom: 8px;
    }
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

  @media (max-width: 768px) {
  }
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
  text-align: left;

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

  @media (max-width: 768px) {
    max-height: 360px;
    overflow-y: hidden;
    margin-top: 16px;
    margin-right: 0px;
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
  text-align: center;

  &:hover {
    color: var(--color-green);
  }

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;

  @media (max-width: 768px) {
    align-items: center;
  }
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
  text-align: left;

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

  @media (max-width: 768px) {
    max-height: 360px;
    overflow-y: hidden;
    margin-top: 16px;
    margin-right: 0px;
    h4 {
      font-size: 12px;
    }
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

    @media (max-width: 768px) {
      font-size: 12px;
    }
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

  @media (max-width: 768px) {
    width: 90px;
    height: 82px;
    margin-top: 0px;
    padding: 8px;

    h4 {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }
`

export const ContactContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 40px;
  }
`

export const ContactLinkContainer = styled.div`
  display: block;
  text-align: center;
`
