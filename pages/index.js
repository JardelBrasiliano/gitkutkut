import { useState } from 'react';
//Import estilos
import MainGrid from '../src/styles/components/MainGrid';
import Box from '../src/styles/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/styles/components/ProfileRelations';

//Import Componentes
import ProfileSidebar from '../src/components/ProfileSidebar';
import ListProfilesOrCommunity from '../src/components/ListProfilesOrcommunity';

export default function Home() {
  const [comunidades, setComunidades] = useState([{
    id: '123456',
    title: 'Eu Odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])
  const usuarioAleatorio = 'JardelBrasiliano';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  function handleCriarComunidade(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);
    
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get('title'),
      image: dadosDoForm.get('image'),
    }
    const comunidadeAtualizadas = [...comunidades, comunidade];
    setComunidades(comunidadeAtualizadas);
  }

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
          <ProfileRelationsBoxWrapper>
            <ListProfilesOrCommunity
              title="Comunidade"
              list={comunidades}
              community={true}
            />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <ListProfilesOrCommunity
              title="Pessoas da comunidade"
              list={pessoasFavoritas}
            />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}