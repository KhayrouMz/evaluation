const articles = [
    {titre : "Article 1", id: 1, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x150", info : "Ajouter l'article au panier"},
    {titre : "Article 2", id: 2, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x151", info : "Ajouter l'article au panier"},
    {titre : "Article 3", id: 3, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x152", info : "Ajouter l'article au panier"},
    {titre : "Article 4", id: 4, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x150", info : "Ajouter l'article au panier"},
    {titre : "Article 5", id: 5, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x151", info : "Ajouter l'article au panier"},
    {titre : "Article 6", id: 6, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x152", info : "Ajouter l'article au panier"}
]


const articles1 = [
    {titre : "Article 1", id: 1, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x150", info : "Ajouter l'article au panier"},
    {titre : "Article 2", id: 2, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x151", info : "Ajouter l'article au panier"},
    {titre : "Article 3", id: 3, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x152", info : "Ajouter l'article au panier"},
    {titre : "Article 4", id: 4, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x150", info : "Ajouter l'article au panier"},
    {titre : "Article 5", id: 5, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x151", info : "Ajouter l'article au panier"},
    {titre : "Article 6", id: 6, contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", photo : "https://source.unsplash.com/random/200x152", info : "Ajouter l'article au panier"}
]

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

    let html ='';

for (i=0;i<articles.length;i++){
html += `
<div class="grid">
        <div class="grid__item">
            <div class="card"><img class="card__img" src="${articles[i].photo}" >
                <div class="card__content">
                    <h1 class="card__header">${articles[i].titre}</h1>
                    <p class="card__text">${articles[i].contenu} </p>
                    <button class="card__btn">${articles[i].info} <span> + </span></button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}





document.querySelector(".boxes").innerHTML = html;


let html1 ='';

for (i=0;i<articles.length;i++){
html1 += `
<div class="grid">
        <div class="grid__item">
            <div class="card"><img class="card__img" src="${articles1[i].photo}" >
                <div class="card__content">
                    <h1 class="card__header">${articles1[i].titre}</h1>
                    <p class="card__text">${articles1[i].contenu} </p>
                    <button class="card__btn">${articles1[i].info} <span> + </span></button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

document.querySelector(".boxes1").innerHTML = html1;





    const htmlFooter = `
<div>
    <p class="text">
        ${(new Date()).getFullYear()} - &copy; - Khayreddine - IFOCOP - <a href="mentions.html">Mentions légales</a>
    </p>
</div>
`
document.querySelector(".mensions-légals").innerHTML=htmlFooter;