import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
//Components
import ProfileSidebar from "../src/components/ProfileSidebar";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";
import ListAllProfileOrCommunity from "../src/components/ListAllProfileOrCommunity";
//Styles
import BoxLarge from "../src/styles/components/BoxLarge";
import MainGridPagesList from "../src/styles/components/MainGridPagesList";
import { ListPagingContent } from '../src/styles/components/ListPagingContent';
//api
import { getListAllFollowers, getListAllFollowing } from '../src/services/apiRequestGitHub';
import { getListCommunity } from '../src/services/apiResquestDatoCMS';

const OPTIONS_FOR_PAGES = {
  comunidades: { 
    title: 'Comunidades', 
    fuction: getListCommunity
  },
  minhas_comunidades: { 
    title: 'Minhas comunidades', 
    fuction: () => 'sem funcao ainda'
  },
  seguindo: { 
    title: 'Seguindo',
    fuction: getListAllFollowing
  },
  seguidores: { 
    title: 'Seguidores', 
    fuction: getListAllFollowers
  },
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
  const [listActual, setListActual] = useState([]);

  const routeValidation = (communityOrProfiles) => {
    if (communityOrProfiles) {
      const pageFormatted = communityOrProfiles.replace('-', '_');
      const checkIfThereIs = OPTIONS_FOR_PAGES[pageFormatted];
      if (!!checkIfThereIs) {    
        setActualPage(checkIfThereIs.title);
        checkIfThereIs.fuction(githubUser, setListActual);
      }else {
        router.push('/');
      }
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
                <p className="nav"><Link href="/">Inicio</Link> {"->"} <a href="#">{actualPage}</a></p>
              <hr />
              
              <ListPaging />
                
              <ListAllProfileOrCommunity listComplete={listActual}/>
              
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