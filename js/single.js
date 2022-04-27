
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



fetch("./assets/bd2.json")
.then(reponse =>reponse.json())
.then(function (articles1){
    const [ , id] = location.search.split("=")

    const article1 = articles1.find(function (a) {return a.id == id});

    const htmlSingle1 = `
        <div class="titre"><h2>${article1.titre}</h2></div>
        <div class="parent">
            <img src="${article1.photo}" alt="" loading="lazy">
            <div class="contenu-prix">
                <span class="prix">${article1.prix}</span>
                <p class="text">${article1.contenu}</p>
            </div>
        </div>
        <button type="button">Ajouter l'article au panier</button>
    `
    document.querySelector(".single").innerHTML = htmlSingle1;
});

fetch("./assets/bd1.json")
.then(reponse =>reponse.json())
.then(function (articles){
    const [ , id] = location.search.split("=")

    const article = articles.find(function (a) {return a.id == id});

    const htmlSingle = `
    <div class="titre"><h2>${article.titre}</h2></div>
        <div class="parent">
            <img src="${article.photo}" alt="" loading="lazy">
            <div class="contenu-prix">
                <span class="prix">${article.prix}</span>
                <p class="text">${article.contenu}</p>
            </div>
        </div>
        <button type="button">Ajouter l'article au panier</button>
    `

    document.querySelector(".single").innerHTML = htmlSingle;
});


const htmlFooter = `
<div>
    <p class="text">
        ${(new Date()).getFullYear()} - &copy; - Khayreddine - IFOCOP - <a href="mentions.html">Mentions légales</a>
    </p>
</div>
`
document.querySelector(".mensions-légals").innerHTML=htmlFooter;