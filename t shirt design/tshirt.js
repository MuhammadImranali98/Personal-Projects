// let screenValue=document.getElementById("pic");
// buttons=document.querySelectorAll('btn')


// for(items of buttons){

// }

function change1(){
    document.getElementById('pic').src="black.png";
}
function change2(){
    document.getElementById('pic').src="gray.png";
}
function change3(){
    document.getElementById('pic').src="purple.png";
}
function change4(){
    document.getElementById('pic').src="green.png";
}
function change5(){
    document.getElementById('pic').src="yellow.png";
}

function changeText() {
    // let text = document.getElementById("tstyle").value;
    // alert(text)
    document.getElementById('data').innerText = document.getElementById("tstyle").value;
    // document.getElementsByClassName("data").innerHTML +=text;
    
}
 function changeColor(){
   let favcolor= document.getElementById("favcolor").value;
    // alert(favcolor);
    document.getElementById("data").style.color=favcolor;

 }

 let flag = 0;
 function boldText() {
    switch(flag){
        case 0:{
            document.getElementById('data').style.fontWeight='bold';
            flag=1;
            break
        }
        case 1:{
            document.getElementById('data').style.fontWeight='normal';
            flag=0;
            break
        }
    }
 }
let i=0;
  function italicText() 
  {
   switch (i) {
    case 0:{
        document.getElementById('data').style.fontStyle='italic';
        i=1;
        break;
    }
        
       case 1:{
        document.getElementById('data').style.fontStyle='normal';
        i=0;
        break;
       }
   
    default:
        break;
   } 
  }

  let j=0;

  function allignLeft() 
  {
   switch (j) {
    case 0:{
        document.getElementById('data').style.textAlign='left'
        j=1;
        break;
    }
        
       case 1:{
        document.getElementById('data').style.textAlign='normal';
        j=0;
        break;
       }
   
    default:
        break;
   } 
  }
  
let k=0;

  function alligncenter() 
  {
   switch (k) {
    case 0:{
        document.getElementById('data').style.textAlign='center'
        k=1;
        break;
    }
        
       case 1:{
        document.getElementById('data').style.textAlign='normal';
        k=0;
        break;
       }
   
    default:
        break;
   } 
  }
  
  let l=0;

  function allignRight() 
  {
   switch (l) {
    case 0:{
        document.getElementById('data').style.textAlign='right';
        l=1;
        break;
    }
        
       case 1:{
        document.getElementById('data').style.textAlign='normal';
        l=0;
        break;
       }
   
    default:
        break;
   } 
  }

function fontsize(value) {
    let el = document.getElementById('data');
    let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    let valueTobeDisplayed ;

    if (value == "plus") {
        el.style.fontSize = (fontSize + 2) + 'px';
        valueTobeDisplayed = fontSize + 2;
    }
    if (value == "minus") {
        el.style.fontSize = (fontSize - 2) + 'px';
        valueTobeDisplayed = fontSize - 2;
    }
    if (value == "custom") {
        let sizee = document.getElementById('custom').value;
        let fu = parseFloat(sizee);
        el.style.fontSize = (fu) + 'px';
        valueTobeDisplayed = fu;
    }
    document.getElementById('custom').value = valueTobeDisplayed;
}
