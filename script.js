const mail = document.body.querySelector("#email");
const display = document.body.querySelector("#display")
const submit = document.body.querySelector('#submit');

submit.addEventListener("click", () => {
    if (mail.value === ""){
        display.textContent = `Valid email required`;
        display.style.color = "hsl(4, 100%, 67%)";
        mail.style.border = " 1px solid hsl(4, 100%, 67%)";
        mail.style.background = "hsla(4, 100%, 67%, .3)";
    }

    else{
        display.textContent = ``
    }
})