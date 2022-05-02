//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll' , function() {
  const scrollTop = this.window.pageToffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop
});

//TYPED
var typed = new Typed('.typed', {
    strings: ["Madame, Monsieur,Actuellement à la recherche d’un nouveau challenge, je me permets de vous adresser ma candidature au poste de développeur. Je pense pouvoir apporter à votre entreprise les aptitudes indispensables pour accomplir efficacement les missions propres à ce métier.En premier lieu, je voudrais vous indiquer que mon profil correspond bien aux qualités attendues pour être développeur. En effet, en plus de mes savoir-faire, je peux compter sur mon sens des responsabilités et sur ma rigueur. Je suis aussi quelqu’un d’ouvert avec un bon sens du relationnel et une réelle envie de progresser. Je crois que ce sont des valeurs incontournables pour atteindre le niveau de performance fixé par votre société"],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });