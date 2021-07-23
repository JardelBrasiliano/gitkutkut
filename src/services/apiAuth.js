import nookies from 'nookies';

const singInAuth = async (githubUser, setLoading, push) => {
    fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({ githubUser: githubUser })
    })
    .then(async (respostaDoServer) => {
      const dadosDaResposta = await respostaDoServer.json()
      const token = dadosDaResposta.token;

      nookies.set(null, 'USER_TOKEN', token, {
        path: '/',
        maxAge: 86400 * 7 
      })
      setLoading(false);
      push('/');
    })
}

export { singInAuth };