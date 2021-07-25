import React from 'react';
import styled from 'styled-components';
import { BASE_URL, Link} from '../utils' ;

const AlurakutProfileSidebarMenuDefault = () => {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <Link href="/perfil">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </Link>
        <Link href="/meus-recados">
          <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </Link>
        <Link href="/minhas-comunidades">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Comunidades
          </Link>
      </nav>
      <hr />
      <nav>
        <Link href="/novidades">
          <img src={`${BASE_URL}/icons/plus.svg`} />
            Explorar
          </Link>
        <Link href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </Link>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}
AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;

export default AlurakutProfileSidebarMenuDefault;