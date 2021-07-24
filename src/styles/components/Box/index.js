import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  .nav {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 500;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  textarea {
    font-family: sans-serif;
    transition: .3s;
    outline: 0;
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 13px;
    border-radius: 10px;
    resize: vertical;
    outline: none;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
    :focus:hover {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`; 

export default Box