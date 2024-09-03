
const input = document.querySelectorAll("input");
const div = document.querySelectorAll("div");
function Home() {
    const inputVal = input[0].value
    if (inputVal !== "") {
        div[0].innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            div[0].innerHTML += `<ul>${inputVal} x ${i} = ${inputVal * i}<ul/>`
        }
        input[0].value =""
    }
    else (alert("This is Not a Num"))
}

function clears(){
    div[0].innerHTML = ""
}



