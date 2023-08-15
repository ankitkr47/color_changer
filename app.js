const buttons = document.querySelectorAll(".button");
// console.log(buttons);
// console.log("hello!");
const body = document.querySelector('body');
// console.log(body);

buttons.forEach((button) => {
    button.addEventListener("click" , (e) => {
        let col = e.target.id;
        console.log(col);
        body.style.backgroundColor = col;
    })
});
