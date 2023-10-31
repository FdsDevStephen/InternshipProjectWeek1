
var typed=new Typed(".multiple-text",{
    strings:[" Sneaker's and Shoe's"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

var swiper = new Swiper(".mySwiper container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });