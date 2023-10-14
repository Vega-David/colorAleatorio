var contenedor=document.getElementById("codigoColor");
var newColor=document.getElementById("nuevoColor");
var simbolos="0123456789ABCDEF";
var colorRandom="";


newColor.addEventListener("click",()=>{
    for(var i=0; i<6; i++){
        colorRandom += simbolos[Math.floor(Math.random()*16)];
    }
    contenedor.innerHTML="#"+colorRandom;
    document.body.style.background="#"+colorRandom;
    colorRandom="";
});