import { useRouter } from 'next/router';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";
import ListAllProfileOrCommunity from "../src/components/ListAllProfileOrCommunity";

import BoxLarge from "../src/styles/components/BoxLarge";
import MainGridPagesList from "../src/styles/components/MainGridPagesList";
import { ListPagingContent } from '../src/styles/components/ListPagingContent';
import { useEffect, useState } from 'react';

const LISTA_DE_COMUNIDADES = [
{
  id: 21315,
  title: 'Eu odeio acordar cedo',
  members: 2500,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in! Harum at, asperiores totam cumque fugiat neque adipisci quam. Provident laboriosam consequatur esse libero possimus!',
  author: 'JardelBrasiliano'
}
]
const LISTA_DE_SEGUIDORES = [
  {
    id: 1351,
    name: 'Alguem da Silva'
  }, 
  {
    id: 1351,
    name: 'Alguem da Silva'
  }, 
  {
    id: 1351,
    name: 'Alguem da Silva'
  }, 
  {
    id: 1351,
    name: 'Alguem da Silva'
  }
]

const OPTIONS_FOR_PAGES = {
  comunidades: 'Comunidades',
  minhas_comunidades: 'Minhas comunidades',
  seguindo: 'Seguindo',
  seguidores: 'Seguidores',
}

const ListPaging = ({ last }) => {
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


const ListCommunity = ({githubUser}) => {
  const router = useRouter()
  const {communityOrProfiles} = router.query

  const [actualPage, setActualPage] = useState('');

  const routeValidation = (communityOrProfiles) => {
    if (communityOrProfiles) {
      const pageFormatted = communityOrProfiles.replace('-', '_');
      const checkIfThereIs = OPTIONS_FOR_PAGES[pageFormatted];
      !!checkIfThereIs ? setActualPage(checkIfThereIs) : router.push('/');
    }
  };

  useEffect(() => {
    routeValidation(communityOrProfiles);
  }, [communityOrProfiles]);
  
  return (
    <>
      {actualPage ? 
        <>
          <AlurakutMenu />
          <MainGridPagesList >
            <div className="detailsArea" style={{ gridArea: 'detailsArea' }}>
              <ProfileSidebar gitHubUser={githubUser} />
            </div>

            <BoxLarge style={{ gridArea: 'mainArea' }}>
              <h2 className="subTitle">{actualPage}</h2>
                <p className="nav"><a href="#">Inicio</a> {"->"} <a href="#">{actualPage}</a></p>
              <hr />
              
              <ListPaging />
                
              <ListAllProfileOrCommunity listComplete={LISTA_DE_COMUNIDADES}/>
              
              <ListPaging last={true}/>
              
            </BoxLarge>

          </MainGridPagesList>
        </>
        :
        <></>
      }
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const decodedToken = jwt.decode(token);
  const githubUser = decodedToken?.githubUser;
  
  if (!githubUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      githubUser
    },
  }
}

export default ListCommunity;