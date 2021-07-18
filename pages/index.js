import { useEffect, useState } from 'react';
//Import estilos
import MainGrid from '../src/styles/components/MainGrid';
import Box from '../src/styles/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

//Import Componentes
import ProfileSidebar from '../src/components/ProfileSidebar';
import ListProfilesOrCommunity from '../src/components/ListProfilesOrcommunity';

//api
import { getInfoUser, getListAllFollowers, getListAllFollowing } from '../src/services/apiRequestGitHub';

export default function Home() {
  //const [infoGitHubApi, setInfoGitHubApi] = useState({});
  const [listFollowers, setListFollowers] = useState([]);//seguidores
  const [listFollowings, setListFollowings] = useState([]);//seguindo

  const [comunidades, setComunidades] = useState([{
    id: '123456',
    title: 'Eu Odeio acordar cedo',
    image_url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    html_url: '/community/Eu_Odeio_acordar_cedo'
  }])
  
  const usuarioAleatorio = 'JardelBrasiliano';

  function handleCriarComunidade(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);

    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get('title'),
      image: dadosDoForm.get('image'),
      url: `/community/${dadosDoForm.get('title').replace(/ /g, "_")}`,
    }
    const comunidadeAtualizadas = [...comunidades, comunidade];
    setComunidades(comunidadeAtualizadas);
  }

  useEffect(() => {
    //getInfoUser(usuarioAleatorio, setInfoGitHubApi);
    getListAllFollowers(usuarioAleatorio, setListFollowers);
    getListAllFollowing(usuarioAleatorio, setListFollowings);
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar gitHubUser={usuarioAleatorio} />
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio} 
            </h1>
            
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCriarComunidade}>
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
            />
            <ListProfilesOrCommunity
              title="Seguindo"
              list={listFollowings}
            />
            <ListProfilesOrCommunity
              title="Comunidades"
              list={comunidades} 
            />
        </div>
      </MainGrid>
    </>
  )
}