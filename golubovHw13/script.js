const btnEi = document.getElementById("butt")
const inpEi = document.getElementById("text")
const strEi = document.getElementById("string")
let val;

btnEi.onclick = () => {
    val = inpEi.value;
    btnEi.classList.toggle("hidden")
    inpEi.classList.toggle("hidden")
    strEi.innerHTML = `Привет, ${val}`;

}