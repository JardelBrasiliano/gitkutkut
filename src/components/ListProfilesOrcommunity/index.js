import React from 'react';
import Link from 'next/link';

import { ProfileRelationsBoxWrapper } from '../../styles/components/ProfileRelationsBoxWrapper';

const ListProfilesOrComunite = ({title, list, link}) => {
  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {title} ({list.length})
          <Link href={link}><a className="viewAll"> ver todos</a></Link>
          
        </h2>

        <ul>
          {list.map((itemAtual, index) => {
            const idForLink = itemAtual.html_url ? 'perfil' : 'comunidade'; 

            if(index <= 5){
              return (
                <li key={itemAtual.id}>
                  <Link href={`/${idForLink}/${itemAtual.title}`}>
                    <a>
                      <img src={itemAtual.image_url || itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </Link>
                </li>
              )
            }else{
              return '';
            }
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </>
  ) 
}

export default ListProfilesOrComunite;