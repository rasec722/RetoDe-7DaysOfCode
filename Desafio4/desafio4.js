let numeroOculto;
let intentos= 0;
let intentosMax=3;
let max,min;
let numeroUsuario;
let acierto=false;


function numeroAleatorio(minimo,maximo){
   return Math.floor( (Math.random()*maximo)+(minimo+1) );
}

alert("Bienvenido al juego: Adivina el número");
parseInt(intentos);
max=10;
min=0;
numeroOculto=parseInt(numeroAleatorio(min,max));

while(intentos<intentosMax){
   numeroUsuario=parseInt( prompt(`¿Que número entre el ${min} y el ${max}, crees que es el numero oculto?`) );
   intentos ++;
   if(numeroUsuario===numeroOculto){
      acierto=true;
      break;
   }
   alert(`El numero ${numeroUsuario} ,no era el número oculto. Lleva ${intentos} ${intentos==1 ? "intento": "intentos"} de ${intentosMax}`);
   
}

if(acierto===true){
  alert(`Felicidades, haz ganado. El número es: ${numeroOculto}.Lo lograste en ${intentos}.`);

}else{
   alert(`Lo lamento,se ha quedado sin intentos. Ha perdido el juego,el número era: ${numeroOculto}`);
   }
