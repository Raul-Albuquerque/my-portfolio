import * as S from './styles'

export type Props = {
  type?: string
  children: string
  fontSize?: string
  href: string
}

export default function Button({ type, href, children, fontSize }: Props) {
  return (
    <>
      {type === 'home' ? (
        <S.Button href={href} fontSize={fontSize}>
          {children}
        </S.Button>
      ) : (
        <S.ProjectButton href={href} fontSize={fontSize}>
          {children}
        </S.ProjectButton>
      )}
    </>
  )
}
