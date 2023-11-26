'use client'
import styled from 'styled-components'
import Button from '../Button'
import Link from 'next/link'

export const CardsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  max-height: 560px;
  position: relative;
`
export const TagsContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`
export const ProjectContainer = styled.div`
  display: block;
  padding: 16px;

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-white);
  }
`

export const ProjectImage = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 8px;
  display: block;
`
export const LinkCustomizado = styled(Link)`
  color: var(--color-white);
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
  color: var(--color-white);
`

export const CourseDetailsContainer = styled.div`
  margin-top: 20px;
  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-white);
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
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`

export const ContactLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`
export const OtherContacts = styled.div`
  width: 100%;
`
