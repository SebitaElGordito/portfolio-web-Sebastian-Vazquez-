const menu= document.querySelector(".menu");
const openMenuBtn= document.querySelector(".open__menu");
const closeMenuBtn= document.querySelector(".close__menu");

function toggleMenu(){
    menu.classList.toggle("menu--opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const nombreyapellido= document.querySelector(".nombre__apellido");

function opacidadTitulo(){
    nombreyapellido.classList.toggle("titulo--opaco")
}

openMenuBtn.addEventListener("click", opacidadTitulo);
closeMenuBtn.addEventListener("click", opacidadTitulo);


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

    if (entry.isIntersecting){
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
    }
    })
}, {rootMargin: "-40% 0px -60% 0px"});

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu--opened");
        opacidadTitulo();
    })

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})

