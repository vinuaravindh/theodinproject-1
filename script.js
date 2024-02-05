sayHello();

function sayHello() {
    console.log("Hello World!");
}

const btn = document.querySelector(".footer-box button");
const quote = document.querySelector(".mid-section");
const head = document.querySelector(".header");
const welc = document.querySelector(".welcome");

ogcolor = quote.style.backgroundColor;

btn.addEventListener("click", () => {
    quote.classList.toggle('light-quote');
    document.body.classList.toggle('dark');
    head.classList.toggle('light-head');
    welc.classList.toggle('light-head');
})

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    img.addEventListener("dblclick", () => {
        console.log("image clicked");
    })
})