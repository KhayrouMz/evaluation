const body = document.querySelector("body");
        modeToggle = body.querySelector(".mode-toggle");
        sideBar = body.querySelector("nav");
        sideBarToggel = body.querySelector(".sidebar-toggel");

    
    // let getMode = localStorage.setItem("mode");

    // if ( getMode && getMode === "dark") {

    //     body.classList.toggle("dark");
    // }

    modeToggle.onclick = function () {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    }

    sideBarToggel.onclick = function () {
        sideBar.classList.toggle("close");
        if (sideBar.classList.contains("close")){
            localStorage.setItem("status", "close");
        } else {
            localStorage.setItem("status", "open");
        }
}


fetch("./assets/bd1.json")
.then(reponse => reponse.json ())
.then(function (articles){

    const accueil = {
        
        articles : articles.slice(0,4)
    }

    let html ='';

    for (i=0;i<accueil.articles.length;i++){
    html += `
    <div class="grid">
            <div class="grid__item">
                <div class="card"><img class="card__img" src="${accueil.articles[i].photo}" >
                    <div class="card__content">
                        <h1 class="card__header">${accueil.articles[i].titre}</h1>
                        <p class="card__text">${accueil.articles[i].contenu} </p>
                        <a  class="card__btn" href="single.html?id=${accueil.articles[i].id}">${accueil.articles[i].info}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
    document.querySelector(".boxes").innerHTML = html;
});


fetch("./assets/bd2.json")
.then(reponse => reponse.json ())
.then(function (articles1){


    const accueil1 = {
        
        articles1 : articles1.slice(0,4)
    }

let html1 ='';

for (i=0;i<accueil1.articles1.length;i++){
html1 += `
<div class="grid">
        <div class="grid__item">
            <div class="card"><img class="card__img" src="${accueil1.articles1[i].photo}" >
                <div class="card__content">
                    <h1 class="card__header">${accueil1.articles1[i].titre}</h1>
                    <p class="card__text">${accueil1.articles1[i].contenu} </p>
                    <a class="card__btn" href="single.html?id=${accueil1.articles1[i].id}">${accueil1.articles1[i].info}</a>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

document.querySelector(".boxes1").innerHTML = html1;

});


const htmlFooter = `
<div>
    <p class="text">
        ${(new Date()).getFullYear()} - &copy; - Khayreddine - IFOCOP - <a href="mentions.html">Mentions légales</a>
    </p>
</div>
`
document.querySelector(".mensions-légals").innerHTML=htmlFooter;

window.onload = function (){
    document.querySelector("video").play().then();
}