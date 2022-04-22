
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





const htmlFooter = `
<div>
    <p class="text">
        ${(new Date()).getFullYear()} - &copy; - Khayreddine - IFOCOP - <a href="mentions.html">Mentions légales</a>
    </p>
</div>
`
document.querySelector(".mensions-légals").innerHTML=htmlFooter;