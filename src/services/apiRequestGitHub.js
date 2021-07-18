function getInfoUser(user, setInfo) {
  fetch(`https://api.github.com/users/${user}`)
  .then((response) =>{
      return response.json();     
    }
  )
  .then((response) => {
    const { id, name, avatar_url, public_repos, followers, following} = response;
    const objectUser = {
      id, 
      name, 
      image_url: avatar_url, 
      public_repos, 
      followers, 
      following,
    }
    setInfo(objectUser);
  }) 
}

function getListAllFollowing(user, setInfo) {
  fetch(`https://api.github.com/users/${user}/following`)
  .then((response) =>{
      return response.json();     
    }
  )
  .then((response) => {
    
    const listFinalResquest = response.map((following) => {
      const { id, html_url, avatar_url, login} = following;
      const objectListFollowing = {
        id, 
        title: login,
        html_url, 
        image_url: avatar_url, 
      }
      return objectListFollowing;
    })
    setInfo(listFinalResquest);
  }) 
}

function getListAllFollowers(user, setInfo) {
  fetch(`https://api.github.com/users/${user}/followers`)
  .then((response) =>{
      return response.json();     
    }
  )
  .then((response) => {
    const listFinalResquest = response.map((following) => {
      const { id, html_url, avatar_url, login} = following;
      const objectListFollowing = {
        id, 
        title: login,
        html_url, 
        image_url: avatar_url, 
      }
      return objectListFollowing;
    })
    setInfo(listFinalResquest);
  }) 
}

export { getInfoUser, getListAllFollowing, getListAllFollowers};