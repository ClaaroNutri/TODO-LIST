const galeria=[
    {
        id:1,
        texto:"Cinque terre",
        url:"./img/cinque (1).jpg"
    },
    {
        id:2,
        texto:"Venecia",
        url:"./img/cinque (2).jpg"
    },
    {
        id:3,
        texto:"Milan",
        url:"./img/cinque (3).jpg"
    },
    {
        id:4,
        texto: "Coliseo Romano",
        url:"./img/cinque (4).jpg"
    },
    {
        id:5,
        texto: "Buenos Aires",
        url:"./img/ba (1).jpg"
    },
    {
        id:6,
        texto: "Iguazú",
        url:"./img/ba (2).jpg"
    },
    {
        id:7,
        texto: "París",
        url:"./img/ba (3).jpg"
    },
]

let btnCambiar=document.querySelector(".quote")
let btnCerrar=document.querySelector(".cerrar")
let n=0
btnCambiar.addEventListener("click", ()=>{
   
   let divImagen=document.querySelector(".imagenMundo")
   divImagen.innerHTML=`
   <p>${galeria[n].texto}</p>
   <img src="${galeria[n].url}">
   `
    n+=1
    if(n >= galeria.length){
        n=0
    }
   
})

btnCerrar.addEventListener("click", ()=>{
    let divImagen=document.querySelector(".imagenMundo")
    divImagen.innerHTML=""
} )