const body = document.querySelector("body");
        modeToggle = body.querySelector(".mode-toggle");
        sideBar = body.querySelector("nav");
        sideBarToggel = body.querySelector(".sidebar-toggel");

    modeToggle.onclick = function () {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    }

function darkModeToggle(){
    let mode = localStorage.setItem('mode');

    if ( mode === 'dark') {

        body.classList.toggle('dark');

    }
    darkModeToggle()
}

    sideBarToggel.onclick = function () {
        sideBar.classList.toggle("close");
        if (sideBar.classList.contains("close")){
            localStorage.setItem("status", "close");
        } else {
            localStorage.setItem("status", "open");
        }
}

let html ='';

html += `

<form class="contact-us" action="#">
    <label for="customerName">
    Votre nom :
    <em>&#x2a;</em>
    </label><input id="customerName" name="customerName" required="" type="text" />
    <label for="customerEmail">
    Votre mail : 
    <em>&#x2a;</em>
    </label><input id="customerEmail" name="customerEmail" required="" type="email" />
    <label for="customerPhone">Votre numéro de téléphone :</label>
    <input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" />
    <label for="customerNote">
    Votre commentaire : 
    <em>&#x2a;</em>
    </label>
    <textarea id="customerNote" name="customerNote" required="" rows="4">
    </textarea>
    <button id="customerOrder">SUBMIT
    </button>
</form>

<div class="reponse"></div>
`

document.querySelector(".contact").innerHTML = html;

const htmlFooter = `
<div>
    <p class="text">
        ${(new Date()).getFullYear()} - &copy; - Khayreddine - IFOCOP - <a href="mentions.html">Mentions légales</a>
    </p>
</div>
`
document.querySelector(".mensions-légals").innerHTML=htmlFooter;

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});