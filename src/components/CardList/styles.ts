'use client'
import styled from 'styled-components'
import Button from '../Button'
import Link from 'next/link'

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 8px;

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
