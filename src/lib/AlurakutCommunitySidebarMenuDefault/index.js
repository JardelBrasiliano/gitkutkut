import React from 'react';
import styled from 'styled-components';
import { BASE_URL, Link} from '../utils' ;

const AlurakutCommunitySidebarMenuDefault = ({nameCommunity}) => {
  return (
    <AlurakutCommunitySidebarMenuDefault.Wrapper>
      <nav>
        <Link href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Entrar
          </Link>
        <Link href={`/comunidade/${nameCommunity}/membros`}>
          <img src={`${BASE_URL}/icons/book.svg`} />
            Membros
          </Link>
        <Link href={`#`}>
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Forum
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
    </AlurakutCommunitySidebarMenuDefault.Wrapper>
  )
}
AlurakutCommunitySidebarMenuDefault.Wrapper = styled.div`
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

export default AlurakutCommunitySidebarMenuDefault;