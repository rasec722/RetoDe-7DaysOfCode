//Areglos individuales de cada categoria.
let Frutas=[], Lacteos=[], Congelados=[], Dulces=[],
    Pan=[], Cereales=[], Pastas=[], Legumbres=[],
    Conservas=[], Enlatados=[], Mariscos=[], Otros=[];  

//Arreglo de todos los areglos individuales.
let arregloDeCategorias=[
    Frutas,Lacteos,Congelados,Dulces,
    Pan, Cereales,Pastas,Legumbres,
    Conservas, Enlatados,Mariscos,Otros
];

//Arreglo de los nombres de cada categoria.
let nombresCategorias=[
    "Frutas","Lacteos","Congelados","Dulces",
    "Pan", "Cereales","Pastas","Legumbres",
    "Conservas", "Enlatados","Mariscos","Otros"
];

//variables globales;
let itemNuevo=" ";
let opcionUsuario= 0;

//Funcion principal:
function lista(){
    itemNuevo=document.getElementById("alimentoNuevo").value;
    if(itemNuevo!=""){ 
        alert("¿Qué categoria le gustaria agregarlo?");
        opcionUsuario= parseInt( prompt(`Coloque el número de la opción que desea:\n${mostrarCategorias()}`) );
        agregarProducto(opcionUsuario,itemNuevo);
        alert(`Categorias:\n${mostrarArreglos()}`);
    }else{
        alert("No se encontro ningun producto nuevo.\nPor favor escriba el que quiera agregar en la caja de texto");
    }
}


function agregarProducto(opcion,elemento){
  if(0 < opcion <=arregloDeCategorias.length){
     arregloDeCategorias[opcion-1].push(elemento);
  }else{
    alert("La opción que ingresaste no es válida. Por favor, intentelo de nuevo.")
  }

}

function mostrarArreglos(){
    let i;
    let verCategorias="";
    for(i=0;i<nombresCategorias.length;i++){
        verCategorias+=(`-${nombresCategorias[i]}: ${arregloDeCategorias[i]}\n`)
    }
    return verCategorias;
}

function mostrarCategorias(){
    let i;
    let lista="";
    for(i=0;i<nombresCategorias.length;i++){
        lista+=(`${i+1}. ${nombresCategorias[i]} \n`)
    }
    return lista;
}



