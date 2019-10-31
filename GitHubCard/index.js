/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardContainer = document.querySelector(".cards");
console.log(cardContainer);

axios.get(`https://api.github.com/users/Dournbrood`)
  .then(response => {
    console.log(response);

    const createCard = newCard(response);
    cardContainer.appendChild(createCard);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [`reeceap124`, `bseverino`, `lyndsiWilliams`, `MarFan`, `crutledgedev`, `leachcoding`];

followersArray.forEach((element, index) => {
  axios.get(`https://api.github.com/users/${element}`)
    .then(response => {
      cardContainer.appendChild(newCard(response));
    })
});

/* Step 3: Create a function that accepts a single obj as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

// So, this lesson is a good place to put this. Pin this file and come back to it for reference later. Sincerely, past self.
// General template for dynamically generating pieces of a site:
// When this function, and some sort of argument, is appended to an element using DOM... It will generate content. This can be done in a forEach statement.
// function createThing(arg1) {
//   //Create Elements
//   const
//     newThing = document.createElement("div"),
//     newChild = document.createElement("h2");
//   //Setting contents
//   newThing.textContent = "bread";
//   newChild.textContent = "yum";

//   //Set classes
//   newThing.classList.add("yee-haw");


//   //Set up structure
//   newThing.appendChild(newChild);

//   return newThing;
// }

function newCard(obj) {
  //Creating Elements
  const
    card = document.createElement(`div`),
    cardImage = document.createElement(`img`),
    cardInfo = document.createElement(`div`),
    cardName = document.createElement(`h3`),
    cardUsername = document.createElement(`p`),
    cardLocation = document.createElement(`p`),
    cardProfile = document.createElement(`p`),
    cardProfileLink = document.createElement(`a`),
    cardFollowers = document.createElement(`p`),
    cardFollowing = document.createElement(`p`),
    cardBio = document.createElement(`p`);

  //Set content
  cardImage.src = obj.data.avatar_url;
  cardImage.style.alignSelf = "flex-start";
  cardName.textContent = obj.data.name;
  cardUsername.textContent = obj.data.login;
  cardLocation.textContent = `Location: ${obj.data.location}`;
  cardProfile.textContent = "Profile: ";
  cardProfileLink.textContent = `${obj.data.url}`;
  cardProfileLink.href = obj.data.url;
  cardFollowers.textContent = `Followers: ${obj.data.followers}`;
  cardFollowing.textContent = `Following: ${obj.data.following}`;
  cardBio.textContent = `Bio: ${obj.data.bio}`;

  //Establish structure
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  //Set classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");

  return card;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// Our Data:
// {
//   "data": {
//     "login": "Dournbrood",
//     "id": 19560915,
//     "node_id": "MDQ6VXNlcjE5NTYwOTE1",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/19560915?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Dournbrood",
//     "html_url": "https://github.com/Dournbrood",
//     "followers_url": "https://api.github.com/users/Dournbrood/followers",
//     "following_url": "https://api.github.com/users/Dournbrood/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Dournbrood/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Dournbrood/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Dournbrood/subscriptions",
//     "organizations_url": "https://api.github.com/users/Dournbrood/orgs",
//     "repos_url": "https://api.github.com/users/Dournbrood/repos",
//     "events_url": "https://api.github.com/users/Dournbrood/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Dournbrood/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Tanner Hawkins",
//     "company": null,
//     "blog": "",
//     "location": "United States",
//     "email": null,
//     "hireable": null,
//     "bio": "Programmi boye",
//     "public_repos": 21,
//     "public_gists": 1,
//     "followers": 6,
//     "following": 5,
//     "created_at": "2016-05-24T22:44:30Z",
//     "updated_at": "2019-10-31T17:56:39Z"
//   },
//   "status": 200,
//   "statusText": "OK",
//   "headers": {
//     "cache-control": "public, max-age=60, s-maxage=60",
//     "content-type": "application/json; charset=utf-8",
//     "etag": "W/\"5ed09c7e42cec1461101407de53f81b3\"",
//     "last-modified": "Thu, 31 Oct 2019 17:56:39 GMT",
//     "x-github-media-type": "github.v3",
//     "x-ratelimit-limit": "60",
//     "x-ratelimit-remaining": "59",
//     "x-ratelimit-reset": "1572553336"
//   },
//   "config": {
//     "url": "https://api.github.com/users/Dournbrood",
//     "method": "get",
//     "headers": {
//       "Accept": "application/json, text/plain, */*"
//     },
//     "transformRequest": [
//       null
//     ],
//     "transformResponse": [
//       null
//     ],
//     "timeout": 0,
//     "xsrfCookieName": "XSRF-TOKEN",
//     "xsrfHeaderName": "X-XSRF-TOKEN",
//     "maxContentLength": -1
//   },
//   "request": {}
// }