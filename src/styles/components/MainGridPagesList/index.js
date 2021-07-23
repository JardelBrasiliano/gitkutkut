import styled from 'styled-components';

const MainGridPagesList = styled.main`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .detailsArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "detailsArea mainArea";
    grid-template-columns: 160px 1fr;
  }
`;
export default MainGridPagesList;