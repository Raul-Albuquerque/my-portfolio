import * as S from './styles'

type Props = {
  type: 'submit' | 'button'
  children: string
}

export default function Button({ type, children }: Props) {
  return <S.Button type={type}>{children}</S.Button>
}
