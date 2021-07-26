import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
//Components
import AlurakutMenu from '../../src/lib/Menu';
import ProfileSidebar from '../../src/components/ProfileSidebar';
import ListPaging from '../../src/components/ListPaging';
import ListAllProfileOrCommunity from '../../src/components/ListAllProfileOrCommunity';
//Styles
import MainGridPagesList from '../../src/styles/components/MainGridPagesList';
import BoxLarge from '../../src/styles/components/BoxLarge';
import {ShowDetailsCommunityWrapper} from './style.ShowDetailsCommunity';
//api
import { getAllMemberCommunity } from '../../src/services/apiResquestDatoCMS';

const ShowMemberCommunity = ({listMember}) => {
  const emptyList = !listMember.length;
  return (
    <>
      {
        emptyList ?
        <div className="nadaAqui"><h2>Nada aqui</h2></div>
        : 
        <>
          <ListPaging />

          <ListAllProfileOrCommunity listComplete={listMember}/>
          
          <ListPaging last={true}/> 
        </> 
      }
    </>
  );
};

const ShowDetailsCommunity = ({nameCommnity, details}) => {
  const corDeFundo1 = '#D9E6F6';
  const corDeFundo2 = '#F1F9FE';

  const valueId = details.id
  const valueDescription = details.description;
  const valueAuthor = details.author;
  const quantMember = details.totalMember;

  return (
    <ShowDetailsCommunityWrapper>
      <li className="ShowDetailscommunity" key={`details-${valueId}`} style={{backgroundColor: corDeFundo1}} >
        <div className="DetailsLeft">
          <p>Descrição: </p>
        </div>
        <div className="DetailsRight">
          <textarea 
            name="descrição" 
            rows="3"
            disabled
            value={valueDescription}
          />
        </div>
      </li>
      <li className="ShowDetailscommunity" key={`details-${valueId}`} style={{backgroundColor: corDeFundo2}} >
        <div className="DetailsLeft">
          <p>Idioma: </p>
        </div>
        <div className="DetailsRight">
          <p>Português</p>
        </div>
      </li>
      <li className="ShowDetailscommunity" key={`details-${valueId}`} style={{backgroundColor: corDeFundo1}} >
        <div className="DetailsLeft">
          <p>Dono: </p>
        </div>
        <div className="DetailsRight">
          <Link href={`/perfil/${valueAuthor}/`}><a>{valueAuthor}</a></Link>
        </div>
      </li>
      <li className="ShowDetailscommunity" key={`details-${valueId}`} style={{backgroundColor: corDeFundo2}} >
        <div className="DetailsLeft">
          <p>Membros: </p>
        </div>
        <div className="DetailsRight">
          <Link href={`/comunidade/${nameCommnity}/membros`}><a>{quantMember}</a></Link>
        </div>
      </li>
		</ShowDetailsCommunityWrapper>
  )
};

const detailsCommunity = ({ githubUser }) => {
    const router = useRouter();
    const { nameCommunity } = router.query;

    const [detailsCommunity, serDetailsCommunity] = useState({});
    const [listMembers, setListMembers] = useState([]);
    
    const isPageMember = nameCommunity[1];

    useEffect(() => {
      getAllMemberCommunity(nameCommunity[0], setListMembers, serDetailsCommunity);
    }, [nameCommunity]);

    return (
      <>
          <AlurakutMenu githubUser={githubUser}/>
          <MainGridPagesList >
            <div className="detailsArea" style={{ gridArea: 'detailsArea' }}>
              <ProfileSidebar gitHubUser={githubUser} />
            </div>

            <BoxLarge style={{ gridArea: 'mainArea' }}>
              <h2 className="subTitle">{nameCommunity[0]}</h2>
                <p className="nav">
                  <Link href="/">Inicio</Link> 
                  {"->"} 
                  <Link href="/comunidades">Comunidades</Link>
                  {"->"} 
                  <Link href={`/comunidade/${nameCommunity[0]}`}>{nameCommunity[0]}</Link>
                  {
                    isPageMember && listMembers.length > 0?
                    <>
                      {"->"} 
                      <Link href={`/comunidade/${nameCommunity[0]}/membros`}>Membros</Link>
                    </>
                    :
                    <></>
                  }
                  </p>
              <hr />
              
              {
                isPageMember && listMembers.length > 0 ?
                <ShowMemberCommunity listMember={listMembers}/>
                :
                detailsCommunity["id"] && <ShowDetailsCommunity details={detailsCommunity} nameCommnity={nameCommunity[0]}/>
              }
              
            </BoxLarge>

          </MainGridPagesList>
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

export default detailsCommunity;