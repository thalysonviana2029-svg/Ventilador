const ligar = document.getElementById("botao");

const ventilador = document.getElementById("ventilador");

ligar.addEventListener("click", function(){

    ventilador.classList.toggle("ligar");
    ventilador.classList.toggle("girar");

    if (ventilador.classList.contains("ligar")){
    ventilador.textContent = "Desligar";
   } else {
    ventilador.textContent = "Ligar"
   }
})
