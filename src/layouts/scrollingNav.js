typeof window !== 'undefined' && window.addEventListener('scroll', event => {
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
})

