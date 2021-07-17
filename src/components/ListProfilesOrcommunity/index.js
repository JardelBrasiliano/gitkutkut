import React from 'react';

const ListProfilesOrComunite = ({title, list, community}) => {
  return (
    <>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>

      <ul>
        {list.map((itemAtual, index) => {
          if(index <= 5){
            return (
              <li key={community ? itemAtual.id : itemAtual}>
                <a href={community ? `/community/${itemAtual.title}` : `/users/${itemAtual}`}>
                  <img src={community ? itemAtual.image : `https://github.com/${itemAtual}.png`} />
                  <span>{community ? itemAtual.title : itemAtual}</span>
                </a>
              </li>
            )
          }else{
            return '';
          }
        })}
      </ul>
    </>
  ) 
}

export default ListProfilesOrComunite;