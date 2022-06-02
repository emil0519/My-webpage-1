const navToggle = document.querySelector('.header-button');
const navLinks= document.querySelector('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// document.querySelector('.my-element').addEventListener('click'

// const removeOpen (navLinks)=>{
//   for (link of links){
//     link.addEventListener('click', () => {
//       document.body.classList.toggle('nav-open');
//   }
// }
// };

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       document.body.classList.toggle('nav-open');
//     })
// })




//因為網頁設計與功能所限，未能完全地展現我的Javascript進度，我誠摯邀請您到git中的demo.js中，瀏覽我在其他課程中的Javascript實作//