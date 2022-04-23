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

let html ='';

html += `
<div class="contact-us">
    <form action="#">
        <label for="customerName">
        NAME 
        <em>&#x2a;</em>
        </label><input id="customerName" name="customerName" required="" type="text" />
        <label for="customerEmail">
        EMAIL 
        <em>&#x2a;</em>
        </label><input id="customerEmail" name="customerEmail" required="" type="email" />
        <label for="customerPhone">PHONE</label>
        <input id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" />
        <label for="customerNote">
        YOUR MESSAGE 
        <em>&#x2a;</em>
        </label>
        <textarea id="customerNote" name="customerNote" required="" rows="4">
    </textarea>
        <h3>Please provide all the information about your issue you can.</h3>
        <label for="spamProtection">
        SPAM PROTECTION 
        <em>&#x2a; </em>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span>
        </label><input id="spamProtection" name="spamProtection" type="text" />
        <button id="customerOrder">SUBMIT
        </button>
    </form>
</div>
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