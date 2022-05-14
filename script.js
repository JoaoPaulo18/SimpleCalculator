const numbers = document.querySelectorAll('.number');
const calculators = document.querySelectorAll('.calculator');
const Delet = document.querySelector("#DEL");
const Clear = document.querySelector("#AC");
const Ecuals = document.querySelector("#Ecuals");
const previewShow = document.querySelector('.preview');
const show = document.querySelector(".actualAcount")

let actualAcount = '';
let preview = '';
let result = '';
let acount1 = '';
let acount2 = '';
let type = '';
let isSecond = false;
let isChoosed = false;


numbers.forEach(number => number.addEventListener('click', StartAcount));
calculators.forEach(calculatorType => calculatorType.addEventListener('click', StartCalculating))
Delet.addEventListener('click', DeleteSome);


function DeleteSome(){
  if(isSecond){
    if(acount2.length<=0){
      isSecond = false;
      isChoosed = false;
      type = '';
      previewShow.innerHTML = acount1;
    }else
    acount2 = acount2.replace(/\d$/g,'');

    actualAcount = acount1 + type + acount2;
    show.innerHTML = actualAcount;
  }else{
    acount1 = acount1.replace(/\d$/g,'');
    actualAcount = acount1;
    show.innerHTML = actualAcount;
    previewShow.innerHTML = acount1;
  }
}


function StartAcount(e){
  isSecond ? acount2 += e.target.innerHTML : acount1 += e.target.innerHTML;
  actualAcount += e.target.innerHTML;
  show.innerHTML = actualAcount;
  if(isSecond)
  StartpreviewShow(acount1,acount2,type);
  else
  previewShow.innerHTML = actualAcount;
}

function StartCalculating(e){
  if(!isChoosed){
  type = e.target.innerHTML;
  actualAcount += e.target.innerHTML;
  show.innerHTML = actualAcount;
  isSecond = true;
  isChoosed = true;
  }
}

function StartpreviewShow(first,second,typeChoosed){
  if(typeChoosed == '+') result = Number(first) + Number(second);
  if(typeChoosed == '-') result = Number(first) - Number(second);
  if(typeChoosed == '*') result = Number(first) * Number(second);
  if(typeChoosed == '/') result = Number(first) / Number(second);
   previewShow.innerHTML = result;
}


Ecuals.addEventListener('click', ()=>{
  if(isSecond){
  acount1 = result;
  acount2 = '';
  actualAcount = acount1;
  show.innerHTML = actualAcount;
  isSecond = false;
  isChoosed = false;
}
})



Clear.addEventListener('click', ()=> {
 actualAcount = '';
 preview = '';
 result = '';
 acount1 = '';
 acount2 = '';
 type = '';
 isSecond = false;
 isChoosed = false;
 show.innerHTML = '';
 previewShow.innerHTML = '';
})