import styled from 'styled-components';

const ShowDetailsCommunityWrapper = styled.ul`
  .DetailsLeft {
    width: 100%;
    max-width: 100px;
    color: var(--textTertiaryColor);

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .DetailsRight {
    width: 100%;
    margin-left: 3px;
  }
  li.ShowDetailscommunity {
    display: flex;
    align-items: end;
    justify-content: initial;
    padding: 8px;
    height: auto;
    font-size: 14px;
    font-family: sans-serif;

    a {
      color: var(--colorPrimary);
    }
  }
  textarea {
    font-size: 14px;
    font-family: sans-serif;
    transition: .3s;
    outline: 0;
    width: 100%;
    background-color: transparent;
    color: black;
    border: 0;
    resize: none;
    outline: none;
  }
`;

export {ShowDetailsCommunityWrapper};