import { useEffect, useState } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
//Import estilos
import MainGrid from '../src/styles/components/MainGrid';
import Box from '../src/styles/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
//Import Componentes
import ProfileSidebar from '../src/components/ProfileSidebar';
import ListProfilesOrCommunity from '../src/components/ListProfilesOrcommunity';
//api
import { getInfoUser, getListAllFollowers, getListAllFollowing } from '../src/services/apiRequestGitHub';
import { getListCommunity, createNewCommunity } from '../src/services/apiResquestDatoCMS';

const Home = ({ githubUser }) => {
  const [userLogged, setUserLogged] = useState(githubUser);
  //const [infoGitHubApi, setInfoGitHubApi] = useState({});
  const [listFollowers, setListFollowers] = useState([]);
  const [listFollowings, setListFollowings] = useState([]);
  const [community, setCommunity] = useState([]);

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const modelCommunity = {
      title: formData.get('title'),
      imageUrl: formData.get('image'),
      htmlUrl: `/community/${formData.get('title').replace(/ /g, "_")}`,
    }
    createNewCommunity(modelCommunity, community, setCommunity);
  }

  useEffect(() => {
    //getInfoUser(userLogged, setInfoGitHubApi);
    getListAllFollowers(userLogged, setListFollowers);
    getListAllFollowing(userLogged, setListFollowings);
    getListCommunity(setCommunity);
    setUserLogged(githubUser)
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={userLogged}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar gitHubUser={userLogged} />
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {userLogged} 
            </h1>
            
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunity}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ListProfilesOrCommunity
              title="Seguidores"
              list={listFollowers}
              link="/seguidores"
            />
            <ListProfilesOrCommunity
              title="Seguindo"
              list={listFollowings}
              link="/seguindo"
            />
            <ListProfilesOrCommunity
              title="Comunidades"
              list={community} 
              link="/comunidades"
            />
        </div>
      </MainGrid>
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

export default Home;