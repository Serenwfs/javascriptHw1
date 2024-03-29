/* 
  TODO: when the page first loads,
  set the selected number value to 3 and generate
  3 random color boxes. 

  
  
  To work with the CSS that is already writeen,
  these should be represented as an ul of li, like this: 

  <ul> 
    <li></li>
    <li></li>
    <li></li>
  </ul>

  Then, allow the user to change the number in the text field
  and once the button is pressed, auto-generate that many color
  boxes and display them on the screen. 

  Make sure to delete the old palette that was there before adding
  the new palette - there should only be one color palette on the screen
  at a time.
*/

// function randomColor() {
//   let H = Math.floor(Math.random() * 360);
//   let S = Math.floor(Math.random() * 100);
//   let L = Math.floor(Math.random() * 100);

//   let colorValue = `hsl(${H}, ${S}%, ${L}%)`; // Corrected format with commas
//   return colorValue;
// }


// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
//  box1.style.backgroundColor = randomColor();
// box2.style.backgroundColor = randomColor();
// box3.style.backgroundColor = randomColor();

document.addEventListener("DOMContentLoaded", function() {
  // create constent for the palette, the button and the palet contaimer
  const generateBtn = document.getElementById("generate");
  const paletteContainer = document.getElementById("palette");
  const ul = paletteContainer.querySelector("ul");

  ul.innerHTML = "";

  const defaultNumColors = 3;
  document.getElementById("nColors").value = defaultNumColors;
  generatePalette(defaultNumColors);


   generateBtn.addEventListener("click", function() {

  // ee get the new number form the user 
    const numColors = parseInt(document.getElementById("nColors").value);
    ul.innerHTML = "";
    generatePalette(numColors);
  });

  function generatePalette(numColors) {

    // Now we genrate new palette
    for (let i = 0; i < numColors; i++) {
      const colorBox = document.createElement("li");
      colorBox.style.backgroundColor = randomColor();
      ul.appendChild(colorBox);
    }
  }

  function randomColor() {
    let H = Math.floor(Math.random() * 360);
    let S = Math.floor(Math.random() * 100);
    let L = Math.floor(Math.random() * 100);
    let colorValue = `hsl(${H}, ${S}%, ${L}%)`;
    return colorValue;
  }

  
});



