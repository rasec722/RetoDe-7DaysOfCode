function inicioDelPrograma(){
    let opcion=0;
    let valores=[];
    let resultado=0;
    while(opcion!=5){
        opcion = parseInt(prompt(`Bienvenido. Elije la opción que desea realizar:\n
        1. Suma.
        2. Resta.
        3. Multiplicación.
        4. División.
        5. Salir.   
        `) );

        switch(opcion){
            case 1: 
                realizarOperacion("suma",suma);
                break;
            case 2:
                realizarOperacion("resta",resta);
                break;
            case 3:
                realizarOperacion("multiplicación",multiplicacion);
                break;
            case 4: 
                realizarOperacion("división",division);
                break;
            case 5: 
                alert("¡Hasta la proxima!");
                break;
            default: 
                alert("La opción que elijio no esta disponible.");
        }  

    }  
}

function suma(n1,n2){
  return n1+n2;
}
function resta(n1,n2){
    return n1-n2;
}
function multiplicacion(n1,n2){
   return n1*n2;
}
function division(n1,n2){
    if((n1%n2)===0){
        return (n1/n2);
    }else{
        return (n1/n2).toFixed(3);
    }
}

function pedirValores(){
    let numero1=parseInt( prompt(`Ingrese el primer numero`) ); 
    let numero2=parseInt( prompt(`Ingrese el segundo numero`) ); 
    return [numero1,numero2];
};

function realizarOperacion(nombre,operacion){
    valores=pedirValores();
    resultado =operacion(valores[0],valores[1]);
    alert(`El resultado de la ${nombre} de ${valores[0]} y ${valores[1]} es: ${resultado}`);
}

