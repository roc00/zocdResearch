
//numbers that how many items was selected
export const submit = () => {
  let items = document.querySelectorAll("input[type=radio]");
  let sum = 0;

  for (let item of items) {
    if (item.checked) {
      sum += 1;
    }
  }

  document.getElementById("current-amount").innerHTML = sum;

};




//the function that collects all the values of this page


//Pages
export const valsA = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleA', sum);
};

//PageB
export const valsB = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleB', sum);
};

//PageC
export const valsC = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleC', sum);
};

//PageD
export const valsD = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleD', sum);
};

//PageE
export const valsE = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleE', sum);
};

//PageF
export const valsF = () => {
  let objs = document.querySelectorAll("input[type=radio]");  
  let sum = 0;

for (let obj of objs){
      if(obj.checked){
       sum += Number(obj.value)
      }
  }
  return localStorage.setItem('moduleF', sum);
};



