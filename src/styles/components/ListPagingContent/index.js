import styled from 'styled-components';

const ListPagingContent = styled.div`
  display: flex;
  align-items: ${props => props.last ? 'flex-end' : 'center'};
  justify-content: space-between;
  margin: 2px 0 ;
  flex: ${props => props.last ? 1 : 0};
  
  font-size: 14px;
  font-family: sans-serif;

  .paginas {  
    font-weight: 600;
  }
  .navegacao {
  }
  button {
    color: var(--textTertiaryColor);
    border: none;
    background: transparent;
    margin-left: 5px;
  }
`;

export { ListPagingContent };