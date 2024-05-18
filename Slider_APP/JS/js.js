const reviewsData = [
    {
        id: 1,
        name: "ALi Mohamed",
        review: "thank you for a good service ",
        imgUrl: "images/4.jpeg"
    },
    {
        id: 2,
        name: "Sara Ahmed",
        review: "im so happy for this nice services ",
        imgUrl: "images/850_6727-PRINT.jpg"
    },
    {
        id: 3,
        name: "Noha Mohamed",
        review: "great, services keep going ",
        imgUrl: "images/290c9625d895fe4f6f39f1d41d41eb1c--corporate-portrait-business-portrait.jpg"
    },
    {
        id: 4,
        name: "Adam Ali",
        review: "good job hope the best of luck for you ",
        imgUrl: "images/5.jpeg"
    },
    {
        id: 5,
        name: "Khaled Hamza ",
        review: "nice work keep going ",
        imgUrl: "images/2019-07-20-photoshoot-pooria_dsc_9335-edit_2048pix-1.jpg"
    },
];

let reviewElemnt = document.querySelector(".review");
let nameElemnt = document.querySelector(".person p");
let imgElemnt = document.querySelector(".person img");
let currItem = 0;

let nextElemnt = document.querySelector(".next");
let prevElemnt = document.querySelector(".prev");

let updateUI = () => {
    const item = reviewsData[currItem]
    reviewElemnt.textContent = item.review;
    nameElemnt.textContent = item.name;
    imgElemnt.src = item.imgUrl;

}
updateUI();

nextElemnt.addEventListener("click", () => {
    currItem++;
    if (currItem > reviewsData.length - 1) {
        currItem = 0;
    }
    updateUI();

});

prevElemnt.addEventListener("click", () => {
    currItem--;
    if (currItem < 0) {
        currItem = reviewsData.length - 1;
    }
    updateUI();

})

let addNewBtn = document.getElementById("addNewBtn");
let closeFormBtn = document.getElementById("closeFormBtn");
let overlay = document.querySelector(".overlay");
addNewBtn.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeFormBtn.addEventListener("click", () => {
    overlay.style.display = "none";
})

let reviewForm = document.querySelector(".addReview form");
reviewForm.addEventListener("submit", e => e.preventDefault());

let sendDataBtn = document.getElementById("sendDataBtn");
let formName = document.getElementById("name");
let formImg = document.getElementById("image");
let formMessage = document.getElementById("message");




sendDataBtn.addEventListener("click", () => {
    reviewsData.push({
        id: reviewsData.length + 1,
        name: formName.value,
        review: formMessage.value,
        imgUrl: "images/" + formImg.value
    })
    overlay.style.display = "none";
})