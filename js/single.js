fetch("./assets/bd1.json")
.then(reponse =>reponse.json())
.then(function (articles){
    const [ , id] = location.search.split("=")
    // console.log(id);

    const article = articles.find(function (a) {return a.id == id})
    console.log(article);

    const htmlSingle = `
    
    <h1>${article.titre}</h1>
    <img src="${article.photo}"><br>
    <p>${article.contenu}</p>
    
    `



    document.querySelector(".single").innerHTML = htmlSingle;
})


fetch("./assets/bd2.json")
.then(reponse =>reponse.json())
.then(function (articles1){
    const [ , id] = location.search.split("=")
    // console.log(id);

    const article1 = articles1.find(function (a) {return a.id == id})
    console.log(article);

    const htmlSingle1 = `
    
    <h1>${article1.titre}</h1>
    <img src="${article1.photo}"><br>
    <p>${article1.contenu}</p>
    
    `



    document.querySelector(".single").innerHTML = htmlSingle1;
})