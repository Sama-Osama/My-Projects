let divBtns = document.querySelector(".btns");
let btns = document.querySelectorAll(".btns button");
let divs = document.querySelectorAll(".contents div");


divBtns.addEventListener("click", e => {
    let currentBtn = e.target;
    let currentDiv = document.getElementById(currentBtn.dataset.mark);

    btns.forEach(btn => {
        btn.classList.remove("active");
        currentBtn.classList.add("active");

    });

    divs.forEach(div => {

        div.classList.remove("show");
        currentDiv.classList.add("show");

    });
}
)










