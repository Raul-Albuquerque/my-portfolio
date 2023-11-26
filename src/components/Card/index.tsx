import Tag from '../Tag'
import * as S from './styles'
import { firaSans } from '@/assets/fonts'

type Props = {
  title?: string
  children: JSX.Element
}

export default function Card({ children, title }: Props) {
  return (
    <S.Card>
      <S.Title className={firaSans.className}>{title}</S.Title>
      {children}
    </S.Card>
  )
}
