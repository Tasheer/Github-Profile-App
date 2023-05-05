const APIURL ="https://api.github.com/users/";

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


async function getuser(user) {
    const resp = await fetch(APIURL+user)
    const respData = await resp.json()

    createUserCard(respData)
}

getuser("florinpop17")

function createUserCard(user){


    const cardHTML = `
    <div class = "card">
    <div class = "img-container"> 
    <img  class = "avatar"
    src = "${user.avatar_url}" 
    alt = "${user.name}"/>
    </div>

    <div class = "user-info">
    <h2> 
    ${user.name}
    </h2>

    <p>
    ${user.bio}
    </p>

    <ul class = "info">
        <li> <strong> Followers </strong>  ${user.followers}</li>
        <li> <strong> Following </strong>  ${user.following} </li>
    </ul>
    </div>
    </div>
    `

    main.innerHTML = cardHTML

}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getuser(user);
        search.value = '';
    }
})