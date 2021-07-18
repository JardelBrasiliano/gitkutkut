import React from 'react';

import { ProfileRelationsBoxWrapper } from '../../styles/components/ProfileRelations';

const ListProfilesOrComunite = ({title, list}) => {
  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {title} ({list.length})
        </h2>

        <ul>
          {list.map((itemAtual, index) => {
            if(index <= 5){
              return (
                <li key={itemAtual.id}>
                  <a href={itemAtual.html_url}>
                    <img src={itemAtual.image_url} />
                    <span>{itemAtual.title}</span>
                  </a>
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