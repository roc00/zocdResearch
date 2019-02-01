//numbers that how many items was selected
export const submit = (event) => {
  let items = document.querySelectorAll('input[type=radio]');
  let sum = 0;
  let tar = event.target;
  let currentSection = tar.parentNode.parentNode.parentNode;
  let sections = document.querySelectorAll('section');
  let sideNavs = document.querySelectorAll('.sideNav');



  //interaction of auto scroll
  if(currentSection.getAttribute('value') != 'true' && currentSection.nextElementSibling != null){
    setTimeout(() => {
      window.location.hash = currentSection.nextElementSibling.getAttribute('id')
    },100);
  }







  //increase data of indicator
  for (let item of items) {
    if (item.checked) {
      sum += 1
      item.parentNode.parentNode.parentNode.setAttribute('value', 'true')
    }
  }
  document.getElementById('current-amount').innerHTML = sum;



for(let i = 0; i<sections.length; i++){
  if(sections[i].getAttribute('value') == 'true'){
    sideNavs[i].childNodes[0].setAttribute('id','checked');
    // console.log(sideNavs.indexOf(sideNavs[i]));
    // console.log(sideNavs[i]);
  }
}








}








//aim first unselected item
const aim = ( link ) => {
  let sections = document.querySelectorAll('section')
  let hasTitles = []
  let node

  for (let i = 0; i < sections.length; i++) {
    let node = sections[i]
    if (node.getAttribute('value') !== 'true') {
      hasTitles.push(node)
    }
  }

  if (typeof hasTitles[0] == 'object') {
    setTimeout(() => {
      window.location.hash = '#'
      window.location.hash = hasTitles[0].getAttribute('id')
      console.log(hasTitles[0].getAttribute('id'))
    }, 100)
    // console.log(1)
  } else {
    window.location.href = link;
    // console.log(2)
  }
}











//the function that collects all the values of this page

//PageA
export const valsA = () => {
  let objs = document.querySelectorAll('input[type=radio]')
  let sum = 0

  for (let obj of objs) {
    if (obj.checked) {
      sum += Number(obj.value)
    }
  }

  aim("/moduleB");
  return typeof localStorage !== 'undefined' && localStorage.setItem('moduleA', sum)
}

//PageB
export const valsB = () => {
  let objs = document.querySelectorAll('input[type=radio]');
  let sum = 0;

  for (let obj of objs) {
    if (obj.checked) {
      sum += Number(obj.value)
    }
  }

  aim("/moduleC");
  return typeof localStorage !== 'undefined' && localStorage.setItem('moduleB', sum)
}

//PageC
export const valsC = () => {
  let objs = document.querySelectorAll('input[type=radio]')
  let sum = 0

  for (let obj of objs) {
    if (obj.checked) {
      sum += Number(obj.value)
    }
  }

  aim("/moduleD");
  return typeof localStorage !== 'undefined' && localStorage.setItem('moduleC', sum)
}

//PageD
export const valsD = () => {
  let objs = document.querySelectorAll('input[type=radio]')
  let sum = 0

  for (let obj of objs) {
    if (obj.checked) {
      sum += Number(obj.value)
    }
  }

  aim("/moduleE");
  return typeof localStorage !== 'undefined' && localStorage.setItem('moduleD', sum)
}

//PageE
export const valsE = () => {
  let objs = document.querySelectorAll('input[type=radio]')
  let sum = 0

  for (let obj of objs) {
    if (obj.checked) {
      sum += Number(obj.value)
    }
  }

  aim("/result");
  return typeof localStorage !== 'undefined' && localStorage.setItem('moduleE', sum)
}
