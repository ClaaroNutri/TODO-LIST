let form=document.querySelector(".form")

const sumarTarea=(e)=>{
    e.preventDefault()
    //capturo el valor del input
    let nueva_tarea=document.getElementById("nueva_tarea").value
    console.log(nueva_tarea)
    //verifico si el input no esta vacio, eso luego me sirve 
    //para que al dar submit el campo se limpie
    if (nueva_tarea.trim() !== ""){
        agregarTareas(nueva_tarea)
        guardarTareas()

    } document.getElementById("nueva_tarea").value=""
    
}

const agregarTareas=(tarea)=>{
    //lista y nodo de texto
    let lista=document.createElement("li")
    lista.classList.add("lista")
    let p=document.createElement("p")
    let texto=document.createTextNode(tarea)
    p.appendChild(texto)
    lista.appendChild(p)
    //boton Eliminar
    let btnDelete=document.createElement("button")
    btnDelete.classList.add("btnDelete")
    btnDelete.textContent="X"
    lista.appendChild(btnDelete)
    //evento al boton
    btnDelete.addEventListener("click", ()=>borrarTarea(lista))
    //boton Editar
    let btnEdit=document.createElement("button")
    btnEdit.classList.add("btnEdit")
    let icon=document.createElement("img")
    icon.src="pencil-regular-24.png"
    btnEdit.appendChild(icon)
    lista.appendChild(btnEdit)
    //evento al boton
    btnEdit.addEventListener("click", ()=> editarTarea(lista))
    //capturo ul y le inserto li
    let ul=document.querySelector(".lista_tareas")
    ul.appendChild(lista)
}

const borrarTarea=(lista)=>{
    lista.remove()
    guardarTareas()
}
const editarTarea=(lista)=>{
    let tareaActual=lista.firstChild.textContent
    let tareaEditada=prompt("Edita la tarea:", tareaActual)
    if(tareaEditada.trim()!== null && tareaEditada.trim()!== ""){
        lista.firstChild.textContent= tareaEditada
        guardarTareas()
    }
}

const guardarTareas=()=>{
    let tareas=[]
    let listas=document.querySelectorAll(".lista")

    listas.forEach((lista)=>{
        tareas.push(lista.firstChild.textContent)
    })
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

const cargarTareas=()=>{
    let tareas=JSON.parse(localStorage.getItem("tareas"))
    
    if (tareas) {
        tareas.forEach((tarea) => {
            agregarTareas(tarea);
        });
    }
}
form.addEventListener("submit", sumarTarea)

// Cargar tareas al cargar la página
document.addEventListener("DOMContentLoaded", cargarTareas);
