const API_TOKEN_READ = process.env.NEXT_PUBLIC_TOKEN_READ_DATO;

async function getListCommunity(setCommunity) {
  console.log(process.env.NEXT_PUBLIC_TESTE);
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
        htmlUrl
      }
    }`})
  })
  .then(async (response) => {
    const finalCommunity = await response.json();

    setCommunity(finalCommunity.data.allCommunities);
  })
}

async function createNewCommunity(community, listCommunity, setCommunity) {
  console.log('Mas uq issu', community);
  fetch('/api/community', { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(community)
  })
  .then(async (response) => {
    const dados = await response.json();

    const { id, title, imageUrl, htmlUrl } = dados.createCommunity;
    const actualCommunity = {
      id, 
      title,
      imageUrl, 
      htmlUrl,
    }

    const comunidadeAtualizada = [...listCommunity, actualCommunity];
    setCommunity(comunidadeAtualizada);
  })
}
export { getListCommunity, createNewCommunity };