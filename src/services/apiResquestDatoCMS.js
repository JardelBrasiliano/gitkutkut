import { useRouter } from "next/router";

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
        author
        members {
          id
          title
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

const getMyCommunity = async (userGithub, setCommunity) => {
    console.log('oie');
    fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Authorization': API_TOKEN_READ,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ "query" : `query {
      allCommunities(
        filter: {
          author: {in: ${userGithub}}
        }
      ) {
        id
        title
        imageUrl
        description
        author
        members {
          id
          title
        }
      }
    }`})
  })
  .then(async (response) => {
    const finalCommunity = await response.json();
    console.log('oie');
    setCommunity(finalCommunity.data.allCommunities);
  })
}

const getAllMemberCommunity = async (nameCommunity, setMemberCommunity, setDetailsComminty, route) => {
  fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Authorization': API_TOKEN_READ,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ "query" : `query {
      allCommunities(
        filter: {
          title: {in: "${nameCommunity}"}
        }
      ){
        id
        description
        author
        imageUrl
        members {
          id
          title
          imageUrl
        }
      }
    }`})
  })
  .then(async (response) => {
    const finalCommunity = await response.json();
    const thereIsMember = finalCommunity.data.allCommunities.length > 0;

    if (thereIsMember) {
      const { id, author, description, imageUrl } = finalCommunity.data.allCommunities[0];
      const finalList = finalCommunity.data.allCommunities[0].members.map((member) => {
        const modelMembers = {
          id: member.id,
          title: member.title,
          image_url: member.imageUrl
        }
        return modelMembers;
      })
      setDetailsComminty({id, author, description, totalMember: finalList.length, 
        imageUrl});
      setMemberCommunity(finalList);
    }else {
      route.push('/');
      console.log('volta pra comundiades');
    }
  })
}

export { getListCommunity, createNewCommunity, getMyCommunity, getAllMemberCommunity };