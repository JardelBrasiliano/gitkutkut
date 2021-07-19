function getInfoUser(user, setInfo) {
  fetch(`https://api.github.com/users/${user}`)
  .then(async (response) =>{
    const { id, name, avatar_url, public_repos, followers, following} = await response.json();
    const objectUser = {
      id, 
      name, 
      image_url: avatar_url, 
      public_repos, 
      followers, 
      following,
    }
    setInfo(objectUser);   
    }
  )
}

function getListAllFollowing(user, setInfo) {
  fetch(`https://api.github.com/users/${user}/following`)
  .then(async (response) =>{
    const listFinalResquest = await response.json();
    const newListFinalResquest = listFinalResquest.map((following) => {
      const { id, html_url, avatar_url, login} = following;
      const objectListFollowing = {
        id, 
        title: login,
        html_url, 
        image_url: avatar_url, 
      };
      return objectListFollowing;
    })
    setInfo(newListFinalResquest);  
    }
  )
}

function getListAllFollowers(user, setInfo) {
  fetch(`https://api.github.com/users/${user}/followers`)
  .then(async (response) =>{
      const listFinalResquest = await response.json();
      const newListFinalResquest = listFinalResquest.map((following) => {
        const { id, html_url, avatar_url, login} = following;
        const objectListFollowing = {
          id, 
          title: login,
          html_url, 
          image_url: avatar_url, 
        }
        return objectListFollowing;
      })
      setInfo(newListFinalResquest); 
    }
  )
}

export { getInfoUser, getListAllFollowing, getListAllFollowers};