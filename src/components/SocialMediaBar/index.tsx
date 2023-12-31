'use client'

import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import Developer from '@/models/Developer'
import * as S from './styles'

export default function SocialMediaBar() {
  return (
    <S.Aside>
      {Developer.map((info) => (
        <S.SocialMediaList key={info.name}>
          {info.contacts.map((contact) => (
            <S.LinkCustomizado
              key={contact.id}
              target="_blank"
              href={contact.url}
            >
              {contact.name === 'Whatsapp' && <FaWhatsapp size={24} />}
              {contact.name === 'Github' && <FaGithub size={24} />}
              {contact.name === 'Linkedin' && <FaLinkedin size={24} />}
              {contact.name === 'email' && <FaEnvelope size={22} />}
            </S.LinkCustomizado>
          ))}
        </S.SocialMediaList>
      ))}
    </S.Aside>
  )
}
