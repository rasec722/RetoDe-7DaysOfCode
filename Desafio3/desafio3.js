let decision;
let historia;
let respuesta;
let final;
const salir=Number(3);


function juegoNuevo(){
  reiniciarJuego();

  alert("Bienvenido a esta aventura interactiva con js.");
  decision=elegirOpcion("Elige el área que deseas seguir", "Front-End","Back-end","Salir del juego");

  if(decision!=salir){
    alert(`Excelente. Ahora elige una herramienta asociada con el área de ${historia[0]}`);
    if(decision===1){
      decision=elegirOpcion("Opciones: ","React","Vue","Salir del juego");
    }else{
      decision=elegirOpcion("Opciones: ","C","Java","Salir del juego");
    }
    if(decision!=salir){
      decision=elegirOpcion("Te gustaria: ", "Convertirte en Fullstack",
                "Especializarse aún más en el área ","Salir del juego");
      if(decision!=salir){
        while(respuesta==="ok"){
          alert("¿Que tecnologia te gustaria aprender?")
          historia.push(prompt("Escribe solo una a la vez."));
          alert("¿Hay alguna otra tecnología que te gustaría aprender?");
          respuesta=prompt("Responde ok para agregar otra. De lo contrario responde no");
        }
        final=true;
      }
    
    }
  }
  if(final==true){
    textoNuevo("p",`Habia una vez una persona apasionada por la tecnologia, con interes
      especialmente en ${historia[0]}. Utilizando ${historia[1]}, logro desarrollar uno
      de los programas que habia soñado hacer, desde hace mucho tiempo. Pero no se detuvo 
      ahi y siguio avanzando, por que queria ${historia[2]}. Lo que lo llevo a 
      investigar y querer aprender otras tecnologias, como: ${tecnologias()}.
      Con dedicacion, pasión y mucha práctica, lo lograra.`)
  }
  alert("Muchas gracias por participar en el juego. Hasta la proxima.");
}

function elegirOpcion(mensaje,opcion1,opcion2,opcion3){
let  eleccionDeUsuario;
 eleccionDeUsuario = Number(prompt(`${mensaje}\n 1. ${opcion1}.\n 2. ${opcion2}.\n 3. ${opcion3}
 \nNota: Escribe el numero de la opcion que deseas seleccionar.`) );
 consecuenciasDeDecision(eleccionDeUsuario, opcion1,opcion2);
 return eleccionDeUsuario;
}
 
function consecuenciasDeDecision(decisionTomada,opcion1,opcion2){
  if(decisionTomada===1){
    historia.push(opcion1);
  }else
      if(decisionTomada===2){
          historia.push(opcion2);   
      }
  else 
    if(decisionTomada===3){
      return false;
    }
  else{
    alert(`Lo lamento, no hay opciones asociadas con tu elección.
      Puedes iniciar un nuevo juego e intentarlo de nuevo.`);
    return false;
  }
  return true;
}

function reiniciarJuego(){
  final=false;
  decision=Number("0");
  historia=[];
  respuesta="ok";
  textoNuevo("p"," ");

}

function textoNuevo(etiqueta,texto){
  let historiaFinal=document.querySelector(etiqueta);
  historiaFinal.innerText=texto;   
}

function tecnologias(){
  let i=3;
  let tam=historia.length;
  let lista=" ";
  for(i;i<tam;i++){
    
   lista+=historia[i]+"  ";
    
  }
  return lista;
}