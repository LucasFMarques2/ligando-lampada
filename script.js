const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");

function quebrada() {
  return lampada.src.indexOf("quebrada") > -1;
}

lampada.addEventListener("click", () => {
  lampada.src = "./img/quebrada.svg";
});

ligar.addEventListener("click", () => {
  if (!quebrada()) {
    lampada.src = "./img/ligada.svg";
  }
});

desligar.addEventListener("click", () => {
  if (!quebrada()) {
    lampada.src = "./img/desligada.svg";
  }
});
