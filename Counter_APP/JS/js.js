let count = 0;
let countValue = document.querySelector(".count");
let btns = document.querySelector(".btns");

function getButtons(e) {
    let currbtnClasses = e.target.classList;
    // if the btn class is called btn1 then increase the count 1
    if (currbtnClasses.contains("btn1")) {
        count++;
    }

    // if the btn class is called btn2 then decrease the count 1
    else if (currbtnClasses.contains("btn2")) {

        count--;

    }
    // else set the count 0 value (btn3 class)
    else {
        count = 0;
    }
    // if the count is postive then set the color of the count green
    if (count > 0) {

        countValue.style.color = "green";
    }

    // if the count is negative then set the color of the count red
    else if (count < 0) {

        countValue.style.color = "red";
    }

    // else set the color of the count black (count = 0)
    else {

        countValue.style.color = "black";
    }

    countValue.textContent = count;

}

btns.addEventListener("click", getButtons)

