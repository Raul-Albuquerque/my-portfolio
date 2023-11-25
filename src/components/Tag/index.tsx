import * as S from './styles'
import { firaSans } from '@/assets/fonts'

type Props = {
  children: string
}

export default function Tag({ children }: Props) {
  return <S.Tag className={firaSans.className}>{children}</S.Tag>
}
