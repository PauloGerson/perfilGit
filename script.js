const teste = document.querySelector('.teste')
 function procurUser(){
    const inputUser = document.querySelector('input');
    const btnEnviar = document.querySelector('.btn');

    btnEnviar.addEventListener('click', function(){
        const valorInput = inputUser.value;
        user(valorInput)
        respositorio(valorInput)
    })
} 

async function respositorio(user){
    const respoList = [];
    const respo = await fetch(`https://api.github.com/users/${user}/repos`);
    const retornoRepo = await respo.json();

    respoList.push(retornoRepo)
    console.log(respoList)
     
    respoList.map(el => {
        for( let listRepo of el){
            
            const div = document.createElement('div')
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const link = document.createElement('a');

            link.setAttribute('href', `${listRepo.html_url}`)
            link.setAttribute('target', '_blank')
            div.setAttribute('class', 'respo')
            p1.innerHTML = `${listRepo.name}`;
            p2.innerHTML = listRepo.description;
            div.append(p1)
            div.append(p2)
            link.append(div)
            teste.append(link)
        }
    }) 

}

const user = async (user)=>{
    //user = 'paulogerson';
    const apigit = await fetch(`https://api.github.com/users/${user}`);
    const retorno = await apigit.json();
    console.log(retorno)
    const img = document.querySelector('img');
    const profileName = document.querySelector('.profile-nome')
    const profileDesc = document.querySelector('.profile-descricao');
    const follow = document.querySelector('.profile-follower')
    
    
    img.setAttribute('src', retorno.avatar_url)
    profileName.innerHTML = `${retorno.name} - ${retorno.login} `
    profileDesc.innerHTML = `${retorno.bio}`
    follow.innerHTML = `${retorno.followers} followers - ${retorno.following} following`

} 

procurUser()

