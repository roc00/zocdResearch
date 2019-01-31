window.addEventListener('scroll', event => {
  let mainNavLinks = document.querySelectorAll('.sidebar-list a')
  let fromTop = window.scrollY

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash)

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      // link.classList.add('current')
      link.setAttribute('id', 'current')
    } else {
      // link.classList.remove('current')
      link.setAttribute('id', '')
    }
  })




  // const aim = document.getElementById('current');
  // // console.log(aim.offsetTop);
  // // console.log(document.getElementsByClassName('sidebar-list')[0].scrollTop);
  // let scrollUl = document.getElementsByClassName('sidebar-list')[0];
  // // console.log(document.body.clientWidth);

  // if(aim.offsetTop > 500){
  //   console.log(aim.offsetTop);
  //   console.log(scrollUl);
  //   scrollUl.scrollTo(0, 200);

  // }



  // console.log(window.pageYOffset);
})


