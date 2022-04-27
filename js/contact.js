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


    contactHtml = `
    <section>
        <h1>Contact</h1>
        <div class="content">
            <ul>
                <li><i class="uil uil-phone"></i> : 06 59 00 00 00</li>
                <li><i class="uil uil-envelope-minus"></i> : exemple@gmail.com</li>
                <li><i class="uil uil-location-pin-alt"></i> : 1 Rue Galilée, 93160 Noisy-le-Grand</li>
            </ul>
        </div>
        <div class="img"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21006.138219756427!2d2.529007939550781!3d48.8435776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60de3c6d93375%3A0xcf48b2b71d0bb862!2sASUS%20France!5e0!3m2!1sfr!2sfr!4v1651065235009!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
`
   
document.querySelector(".contenu").innerHTML = contactHtml;
