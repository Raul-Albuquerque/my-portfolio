import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

import * as S from './styles'

export default function SocialMediaBar() {
  return (
    <S.Aside>
      <S.SocialMediaList>
        <S.LinkCustomizado href="/">
          <FaWhatsapp size={24} />
        </S.LinkCustomizado>
        <S.LinkCustomizado href="https://linkedin.com/in/dev-raul-albuquerque">
          <FaLinkedin size={24} />
        </S.LinkCustomizado>
        <S.LinkCustomizado href="/">
          <FaEnvelope size={22} />
        </S.LinkCustomizado>
        <S.LinkCustomizado href="https://github.com/Raul-Albuquerque">
          <FaGithub size={24} />
        </S.LinkCustomizado>
      </S.SocialMediaList>
    </S.Aside>
  )
}
