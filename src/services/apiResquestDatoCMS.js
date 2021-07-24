const API_TOKEN_READ = process.env.NEXT_PUBLIC_TOKEN_READ_DATO;

const getListCommunity = async (userGithub, setCommunity) => {
  fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Authorization': API_TOKEN_READ,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ "query" : `query {
      allCommunities {
        id
        title
        imageUrl
        description
        members {
          id
          name
        }
      }
    }`})
  })
  .then(async (response) => {
    const finalCommunity = await response.json();
    setCommunity(finalCommunity.data.allCommunities);
  })
}

const createNewCommunity = async (community, listCommunity, setCommunity) => {
  fetch('/api/community', { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(community)
  })
  .then(async (response) => {
    const dados = await response.json();
    const { id, title, imageUrl } = dados.createCommunity;
    const actualCommunity = {
      id, 
      title,
      imageUrl, 
    }

    const comunidadeAtualizada = [actualCommunity, ...listCommunity];
    setCommunity(comunidadeAtualizada);
  })
}
export { getListCommunity, createNewCommunity };