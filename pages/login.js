import React, { useState } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import { useRouter } from 'next/router';
import { singInAuth } from '../src/services/apiAuth';

export default function LoginScreen() {
  const router = useRouter();
  const [githubUser, setGithubUser] = useState('');
  const [loading, setLoading] = useState(false);

  function singIn(e) {
    e.preventDefault();
    setLoading(true);
    singInAuth(githubUser, setLoading, router.push);
  }

  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(e) => singIn(e)}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input
                placeholder="Usuário"
                value={githubUser}
                onChange={(evento) => {
                    setGithubUser(evento.target.value)
                }}
            />
            {githubUser.length === 0
                ? 'Preencha o campo'
                : ''
            }
            <button type="submit">
              {loading ? 'Entrando...' : 'Login'}
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const decodedToken = jwt.decode(token);
  const githubUser = decodedToken?.githubUser;
  
  if (githubUser) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      githubUser: null
    },
  }
}