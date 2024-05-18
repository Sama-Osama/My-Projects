// array of specific colors that the background will be one of them
// const colors = ["red","blue","yellow","pink","purple","green"];


//array of the all hexaSumbols that could make any color
let btn = document.getElementById("btn");
const hexaSumbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let colorName = document.querySelector(".colorName");

//function get random nymber
let getRandomColor = () => {

    // return Math.floor(Math.random()*colors.length)
    return Math.floor(Math.random() * hexaSumbols.length)


}
btn.addEventListener("click", () => {
    let hexColor = '#';
    // for loop that loop on the hexaSumpols and put 6 supols join by # at each loop
    for (let i = 0; i < 6; i++) {

        hexColor += hexaSumbols[getRandomColor()];
    }


    document.body.style.background = hexColor;
    colorName.textContent = hexColor;

});