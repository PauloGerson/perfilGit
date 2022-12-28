const teste = document.querySelector('.teste')
const img = document.querySelector('img');
const profileName = document.querySelector('.profile-nome')
const profileDesc = document.querySelector('.profile-descricao');
const follow = document.querySelector('.followers')
const following= document.querySelector('.following')
const repos = document.querySelector('.repos')

 function procurUser(){
    const inputUser = document.querySelector('input');
    const btnEnviar = document.querySelector('.btn');

    btnEnviar.addEventListener('click', function(){
       if(!inputUser.value) return;
        user(inputUser.value)
        respositorio(inputUser.value)
    })
} 


const user = async (user)=>{
 
    const apigit = await fetch(`https://api.github.com/users/${user}`);
    const retorno = await apigit.json();

    img.setAttribute('src', retorno.avatar_url)
    profileName.innerHTML = `${retorno.name} - ${retorno.login} `
    profileDesc.innerHTML = `${retorno.bio}`
    follow.innerHTML = `${retorno.followers}`
    following.innerHTML = ` ${retorno.following}`
    repos.innerHTML = `${retorno.public_repos}`
} 

procurUser()

