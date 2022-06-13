const body = document.querySelector("body");
const main = document.createElement("main");
const decre = newBtn("decrementar", "menos");
const zerar = newBtn("zerar", "zerado");
const incre = newBtn("incrementar", "mais");
let numero = newh1();
let num0 = 0;

main.setAttribute("id", "main");
body.insertBefore(main, body.children[0]);

function newh1() {
  const h1 = document.createElement("h1");
  h1.innerText = 0;

  return h1;
}

function newBtn(valor, classe) {
  const btn = document.createElement("button");
  btn.innerText = valor;
  btn.setAttribute("class", classe);

  return btn;
}

decre.addEventListener("click", (e) => {
  e.preventDefault();

  num0 = num0 - 1;
  numero.innerText = num0;

  if (num0 < 0) {
    numero.style.color = "red";
  }
});

zerar.addEventListener("click", (e) => {
  e.preventDefault();

  if (num0 !== 0) {
    num0 = 0;
    numero.innerText = num0;
    numero.style.color = "black";
  }
});

incre.addEventListener("click", (e) => {
  e.preventDefault();

  num0 = num0 + 1;
  numero.innerText = num0;

  if (num0 > 0) {
    numero.style.color = "green";
  }
});

main.appendChild(numero);
main.appendChild(decre);
main.appendChild(zerar);
main.appendChild(incre);
