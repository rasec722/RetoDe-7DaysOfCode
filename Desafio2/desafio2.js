
//Desafio 2:
alert("¿Cual es tu nombre?");
let nombre = prompt("Escribe tu nombre:");
alert("¿Cuantos años tienes?");
let edad = Number( prompt("Escribe tu edad:"));
alert("¿Qué lenguaje de programación estás estudiando?");
let lenguaje = prompt("Escribe el nombre del lenguaje:");

alert(`Hola ${nombre}, tienes ${edad} y ya estas aprendiendo ${lenguaje}`)

//Ejercicio opcional:
alert(`¿Te gusta estudiar ${lenguaje}?`)
let AgradoDeLenguaje=Number(prompt("Responde con el número 1 para SÍ o 2 para NO.")); 

if(AgradoDeLenguaje===1){
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.🚀");
}else 
    if(AgradoDeLenguaje==2){
      alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes? 🤔");
    }
else{
  alert("La opcion elegida no esta disponible. Por favor, intentelo de nuevo.");
  
}