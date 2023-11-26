import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

import * as S from './styles'

export default function SocialMediaBar() {
  return (
    <S.Aside>
      <S.SocialMediaList>
        <S.LinkCustomizado
          target="_blank"
          href="https://wa.me/5581997080397?text=Oi,%20vim%20pelo%20seu%20site."
        >
          <FaWhatsapp size={24} />
        </S.LinkCustomizado>
        <S.LinkCustomizado
          target="_blank"
          href="https://linkedin.com/in/dev-raul-albuquerque"
        >
          <FaLinkedin size={24} />
        </S.LinkCustomizado>
        <S.LinkCustomizado
          target="_blank"
          href="mailto:raulmalbuquerque2014@gmail.com"
        >
          <FaEnvelope size={22} />
        </S.LinkCustomizado>
        <S.LinkCustomizado
          target="_blank"
          href="https://github.com/Raul-Albuquerque"
        >
          <FaGithub size={24} />
        </S.LinkCustomizado>
      </S.SocialMediaList>
    </S.Aside>
  )
}
