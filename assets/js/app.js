// menu icon
let menu = document.getElementById('menu');
let menuItem = document.getElementById('menuItem');
menu.onclick = function(){
    menu.classList.toggle('menu-ani');

}
// menu icon end

// highlight
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

window.addEventListener('scroll',function(){
    let current = '';
    sections.forEach(section =>{
        let sectionTop = section.offsetTop;
        // console.log(sectionTop)
        let sectionHeight = section.clientHeight;
        // console.log(sectionHeight)
        let scroll = pageYOffset;
        // console.log(scroll)
        if(scroll >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    navLink.forEach(navActive =>{
        navActive.classList.remove("active-nav");
        if(navActive.classList.contains(current)){
            navActive.classList.add('active-nav');
        }
    })

})


let header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset;

    if(currentScroll <= 0 ){
        header.classList.remove("scroll-up");
    }

    if(currentScroll > lastScroll && !header.classList.contains("scroll-down")){
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }

    if(currentScroll < lastScroll && header.classList.contains("scroll-down")){
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
    }


    lastScroll = currentScroll;


});

AOS.init({
    duration: 1000,
    once : true
});