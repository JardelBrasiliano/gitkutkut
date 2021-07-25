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
import ListPaging from '../src/components/ListPaging';
//api
import { getListAllFollowers, getListAllFollowing } from '../src/services/apiRequestGitHub';
import { getListCommunity, getMyCommunity } from '../src/services/apiResquestDatoCMS';

const OPTIONS_FOR_PAGES = {
  comunidades: { 
    title: 'Comunidades', 
    fuction: getListCommunity
  },
  minhas_comunidades: { 
    title: 'Minhas comunidades', 
    fuction: getMyCommunity
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
              
              {
                listActual.length > 0 ?
                <>
                  <ListPaging />
                
                  <ListAllProfileOrCommunity listComplete={listActual}/>
                  
                  <ListPaging last={true}/> 
                </> 
                :
                <div className="nadaAqui"><h2>Nada aqui</h2></div>
              }
              
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