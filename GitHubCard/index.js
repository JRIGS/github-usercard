import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// console.log('About to request');
// fetch('https://api.github.com/users/JRIGS')
// .then()
// .then(response => {
//   console.log(response);
//   return response.json()
// })
axios.get('https://api.github.com/users/JRIGS')
.then(response => {
  console.log(response);
})




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["danieltantonio","mhmulford0","chrisjcorbin","BrettMcAdams","git-austinmccollom","tetondan","dustinmyers","justsml","luishrd","bigknell"];


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


  function cardMaker(cardObject) {
    const selectCard = document.querySelector('.cards')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const cardInfo = document.createElement('div')
    const name = document.createElement('h3')
    const username = document.createElement('p')
    const location = document.createElement('p')
    const profile = document.createElement('p')
    const profileLink = document.createElement('a')
    const followers = document.createElement('p')
    const followersListElement = document.createElement('p')
    const following = document.createElement('p')
    const bio = document.createElement('p')

    card.appendChild(img)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(username)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    profile.appendChild(profileLink)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(followersListElement)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)

    card.classList.add("card")
    cardInfo.classList.add("card-info")
    name.classList.add("name")
    username.classList.add("username")

    img.src = cardObject.avatar_url
    name.textContent = cardObject.name
    username.textContent = cardObject.login
    location.textContent = cardObject.location
    profileLink.textContent = cardObject.html_url
    followers.textContent = cardObject.followers
    following.textContent = cardObject.following
    bio.textContent = cardObject.bio
    //all the data is stored into each individual card, selectCard is the destination for the populating items
    selectCard.appendChild(card)

    //stretch
    cardObject.then(response =>{
      const followersList = response.data.followers_url;
      const followersListData = axios.get(followersList)
      
      followersListData.then(response => {
        console.log(response.data);
      })
    })

    return card
  }
//step 4
  axios.get('https://api.github.com/users/JRIGS')
.then(dataResponse => {
  cardMaker(dataResponse.data)
})

//step 5 

followersArray.forEach( user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(userResponse =>{
    cardMaker(userResponse.data)
  })
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//stretch
