const header = document.querySelector(".header");
const profileText = document.querySelector(".profile-text");
const timeline = document.querySelector(".timeline");

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
}
async function createProfile() {
  const user = await fetchUser();
  header.innerHTML = `
    <div class="top">
<i class="fa-solid fa-arrow-left" style="color: #fff"></i>
<div class="userName">
<h2>${user.name}</h2>
<p>32.3K Tweets</p>
</div>
    `;
profileText.innerHTML=`
<div class="userName">
        <h2>${user.name}</h2>
        <p>${user.username}</p>
    </div>
    <div class="about">
    <p>Lead Dev Rel 
        @AlchemyPlatform
         🧪 Created 
        @AlchemyLearn
         | npx create-web3-dapp |  Developing:  Pot 🪴 | Helping devs break into web3</p>
         <div class="links">
            <p>Science & Technology</p>
            <p>${user.website}</p>
            <p>Joined August 2020</p>

         </div>
         <div class="links">
            <p>322 Following</p>
            <p>110.8K Followers</p>
         </div>
         
</div>
`
}
createProfile()
 
async function createPosts(){
    const results=await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts= await results.json()
    const user = await fetchUser();
    
const userPosts = posts.filter((post)=>{
    return post.userId==1
})
userPosts.forEach(post => {
    let tweet=document.createElement("div")
    tweet.className= "tweet-cat"
    let html=`
   
    <img class="post-img" src="./profile.png" alt="">

    <div class="tweet">

<p class="name">${user.name}@${user.username}</p>
<p class="post-title">${post.title}</p>
<p class="post-body">${post.body}</p>
</div>

<div class="tweet-actions">
    <div class="comments">
        <i
            class="fa-sharp fa-regular fa-comment fa-flip-horizontal"
            style="color: #aab8c2"></i>
        <p>37</p>
    </div>
    <div class="retweets">
        <i class="fa-solid fa-retweet" style="color: #aab8c2"></i>
        <p>68</p>
    </div>
    <div class="likes">
        <i class="fa-regular fa-heart" style="color: #aab8c2"></i>
        <p>22k</p>
    </div>
    <div class="engagement">
        <i class="fa-solid fa-chart-simple" style="color: #aab8c2"></i>
        <p>26k</p>
    </div>
    <i
        class="fa-sharp fa-solid fa-arrow-up-from-bracket"
        style="color: #aab8c2"></i>
</div>

    `
    tweet.innerHTML=html
    timeline.appendChild(tweet)
});
    
}

createPosts()









