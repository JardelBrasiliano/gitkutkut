import Link from 'next/link';

import styled from 'styled-components';

const Container404 = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100vh;
  background-color: #F2F2F2;
  .content404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-image: url('https://www.alura.com.br/assets/img/erro/img-404.1616501197.svg');
    background-repeat: no-repeat;
    height: 60%;
    width: 50%;
    background-size: contain;
    background-position: center;
    
    font-family: 'Inter',sans-serif;
    font-weight: 800;
    color: #167bf7;
    h1 {
      font-size: 8.375rem;
    }

    p {
      font-size: 1.075rem;
    }
  }
`


const NotFound = () => {
  return (
    <Container404>
      <div className="content404">
        <h1>404</h1>
        <p>Pagina não encointrada.</p>
        <p>Voltar para a <Link href="/"><a>pagina principal.</a></Link></p>
      </div>
    </Container404>
  )
}

export default NotFound;