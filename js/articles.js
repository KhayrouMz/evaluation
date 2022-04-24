const body = document.querySelector("body");
        modeToggle = body.querySelector(".mode-toggle");
        sideBar = body.querySelector("nav");
        sideBarToggel = body.querySelector(".sidebar-toggel");

    sideBarToggel.onclick = function () {
            sideBar.classList.toggle("close");
    }
    
    modeToggle.onclick = function () {
        body.classList.toggle("dark");
    }

fetch("./assets/bd1.json")
.then(reponse => reponse.json ())
.then(function (articles){

    let html ='';

    for (i=0;i<articles.length;i++){
    html += `
    <div class="grid">
            <div class="grid__item">
                <div class="card"><img class="card__img" src="${articles[i].photo}" >
                    <div class="card__content">
                        <h1 class="card__header">${articles[i].titre}</h1>
                        <p class="card__text">${articles[i].contenu} </p>
                        <a  class="card__btn" href="single.html?id=${articles[i].id}">${articles[i].info}</a>
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

    let html1 ='';

    for (i=0;i<articles1.length;i++){
    html1 += `
    <div class="grid">
            <div class="grid__item">
                <div class="card"><img class="card__img" src="${articles1[i].photo}" >
                    <div class="card__content">
                        <h1 class="card__header">${articles1[i].titre}</h1>
                        <p class="card__text">${articles1[i].contenu} </p>
                        <a  class="card__btn" href="single.html?id=${articles1[i].id}">${articles1[i].info}</a>
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