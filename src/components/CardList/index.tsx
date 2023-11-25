import Card from '../Card'
import Tag from '../Tag'
import * as S from './styles'

export default function CardList() {
  return (
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
  )
}
