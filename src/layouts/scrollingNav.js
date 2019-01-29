let mainNavLinks = document.querySelectorAll(".sidebar-list a");
let mainSections = document.querySelectorAll(".main-content section");

// let lastId;
// let cur = [];


// window.addEventListener("scroll", event=()=>{
//     let fromTop = window.scrollY;

//     mainNavLinks.forEach(link => {
//         let section = document.querySelector(link.hash);
//         console.log("actived");
//         if(
//             section.offsetTop <= fromTop && section.offsetTop + section.offsetHeigh >from
//         ){
//             link.classList.add("current");
//         }else{
//             link.classList.remove("current");
//         }
//     })
    
    
// })

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
  
    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
        
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
    console.log(window.pageYOffset);
  });