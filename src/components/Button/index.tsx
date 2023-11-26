import * as S from './styles'

export type Props = {
  type: 'submit' | 'button'
  children: string
  fontSize?: string
}

export default function Button({ type, children, fontSize }: Props) {
  return (
    <S.Button fontSize={fontSize} type={type}>
      {children}
    </S.Button>
  )
}
