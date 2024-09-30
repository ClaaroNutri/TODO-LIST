let cita=document.querySelector(".quote")
console.log(cita)
let dataGlobal=null



const cambiarCita= async()=>{
        const res= await fetch("http://api.quotable.io/random")
        const data= await res.json()
        console.log(data);    
        dataGlobal=data
    
        let autor=document.createElement("p")
        autor.innerHTML=data.author
        autor.classList.add("mostrar")
        let textoCita=document.createElement("p")
        textoCita.innerHTML=data.content
        textoCita.classList.add("mostrar")
        let divQuote=document.querySelector(".citas")
        divQuote.appendChild(textoCita)
        divQuote.appendChild(autor)
}
        
cita.addEventListener("click", ()=>{
        cambiarCita()

        let citas=document.querySelector(".citas")
            if(citas){
            citas.innerHTML=""
            }
     cerrarCita(dataGlobal)   
})  

  

const cerrarCita= (dataGlobal)=>{

    let cerrar=document.querySelector(".cerrar")
    cerrar.addEventListener("click", ()=>{
       let citas=document.querySelector(".citas")
        if(citas !==""){
            citas.innerHTML=""
        }else{
            citas.innerHTML=dataGlobal.content
        }
    })
}




