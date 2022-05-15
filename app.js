const btn = document.querySelector('button');
const h1 = document.querySelector("h1");

const rgb = function () { 
    let randomNum1 = Math.floor(Math.random() * 256); 
    let randomNum2 = Math.floor(Math.random() * 256); 
    let randomNum3 = Math.floor(Math.random() * 256); 
    let newColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    h1.innerText = `New Color: ${newColor}`;
      if (randomNum1+randomNum2+randomNum3 < 195){
          document.body.style.color = "white";
          return document.body.style.backgroundColor = newColor}
          document.body.style.color = "";
      return document.body.style.backgroundColor = newColor
    }

    btn.addEventListener('click', rgb)

 
  


// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

