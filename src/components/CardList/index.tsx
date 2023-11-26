import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import Card from '../Card'
import Tag from '../Tag'
import * as S from './styles'
import Button from '../Button'
import { roboto } from '@/assets/fonts'

type Props = {
  layout: 'about' | 'project'
}

export default function CardList({ layout }: Props) {
  return (
    <>
      {layout === 'about' ? (
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
      ) : (
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
                  <Button fontSize="10px" type="button">
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
    </>
  )
}
