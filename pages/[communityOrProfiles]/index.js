import Link from "next/link";
import ProfileSidebar from "../../src/components/ProfileSidebar";
import { AlurakutMenu } from "../../src/lib/AlurakutCommons";

import BoxLarge from "../../src/styles/components/BoxLarge";
import MainGridPagesList from "../../src/styles/components/MainGridPagesList";
import { ListPagingContent } from '../../src/styles/components/ListPagingContent';

const LISTA_DE_COMUNIDADES = [
  {
    nome: 'Eu odeio acordar cedo',
    membros: 2500,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in! Harum at, asperiores totam cumque fugiat neque adipisci quam. Provident laboriosam consequatur esse libero possimus!',
    autor: 'JardelBrasiliano'
  },
]

function ListPaging({ last }) {
  return (
    <ListPagingContent last={last}>
      <div className="paginas">
        <p>mostrando 1 - 11 de 11</p>
      </div>
      <div className="navegacao">
        <button>primeira |</button>
        <button> {'< '}anterior</button>
        <button>| próxima {' >'}</button>
        <button>| última</button>
      </div>
    </ListPagingContent>
  );
}

export default function ListComunidades() {
  return (
    <>
      <AlurakutMenu />
      <MainGridPagesList >
        <div className="detailsArea" style={{ gridArea: 'detailsArea' }}>
          <ProfileSidebar gitHubUser='jardelBRasiliano' />
        </div>

        <BoxLarge style={{ gridArea: 'mainArea' }}>
          <h2 className="subTitle">Comunidades</h2>
          <p className="nav"><a href="#">Inicio</a> {"->"} <a href="#">Comunidades</a></p>
          <hr />
          
          <ListPaging />
            
          <ul>
            {
              LISTA_DE_COMUNIDADES.map((comunidade, index) => { 
                const corDeFundo = index%2 !== 0 ? '#F1F9FE' : '#D9E6F6';
                return (
                  <li className="community" key={comunidade.nome} style={{backgroundColor: corDeFundo}}>
                    <img src="https://picsum.photos/300/300" alt="" />
                    <div className="contentInfo">
                      <h3>{comunidade.nome}</h3>
                      <p className="member" >membros ( <Link href="#"><a>{comunidade.membros}</a></Link> )</p>
                      <div className="descripton">
                        <p>{comunidade.descricao}</p>
                      </div>
                      <p className="autor"> autor: <Link href="#"><a>{comunidade.autor}</a></Link></p>
                    </div>
                  </li>
                );
              })
            }
          </ul>
          
          <ListPaging last={true}/>
          
        </BoxLarge>

      </MainGridPagesList>
    </>
  )
}