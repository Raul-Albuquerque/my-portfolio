import * as S from './styles'

export type Props = {
  children: string
  fontSize?: string
  href: string
}

export default function Button({ href, children, fontSize }: Props) {
  return (
    <S.Button href={href} fontSize={fontSize}>
      {children}
    </S.Button>
  )
}
