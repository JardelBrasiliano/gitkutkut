import styled from 'styled-components';

const BoxLarge = styled.div`
  display: flex ;
  flex-direction: column;
  position: relative;

  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 23px;
    font-weight: 400;
  }
  .nav {
    font-size: 12px;
    color: var(--colorPrimary);
    text-decoration: none;
    font-weight: 500;
  }
  .community {
    display: flex;
    align-items: end;
    justify-content: initial;
    padding: 8px;
    height: 110px;

    h3 {
      font-size: 17px;
      color: var(--colorPrimary);
    }
    p {
      font-size: 12px;
    }
    img {
      margin-right: 8px;
      height: 100%;
      width: 100%;
      max-width: 94px;
      max-height: 94px;
      border-radius: 5px;
    }
  }
  .contentInfo {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  .member {
    a {
      color: var(--colorPrimary);
    }
  }
  .descripton {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .autor {
    display: flex;
    flex-direction: row;
    a {
      color: var(--colorPrimary);
    }
  }
  .nadaAqui {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li:first-child{
    border-radius: 5px 5px 0 0;
  }
  li:last-child{
    border-radius: 0 0 5px 5px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
`; 

export default BoxLarge;