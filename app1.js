let form=document.querySelector(".form")


const sumarTarea=(e)=>{
    e.preventDefault()
     //capturo el valor del input
    let nuevaTarea=document.getElementById("nueva_tarea").value
    //verifico si el input no esta vacio, eso luego me sirve 
    //para que al dar submit el campo se limpie
    if(nuevaTarea.trim() !== ""){
        agregarTarea(nuevaTarea)
        guardarTareas()  

    } document.getElementById("nueva_tarea").value=""
}

const agregarTarea=(tarea)=>{
    
    //creo una lista donde se van a ir mostrando las tareas añadidas
    let lista=document.createElement("li")
    lista.classList.add("lista")
    //texto que sera elemento hijo de la lista
    let texto=document.createTextNode(tarea)
    lista.appendChild(texto)

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
    icon.src="pencil.png"
    btnEdit.appendChild(icon)
    lista.appendChild(btnEdit)
    //evento al boton
    btnEdit.addEventListener("click", ()=> editarTarea(lista))

    //capturo el elemento ul y le inserto la li creada con la tarea
    let ul=document.querySelector(".lista_tareas")
    ul.appendChild(lista)
}
// Función para eliminar una tarea
const borrarTarea = (lista) => {
    lista.remove();
    guardarTareas(); // Actualiza el localStorage después de borrar
};

// Función para editar una tarea
const editarTarea = (lista) => {
    let tareaActual = lista.firstChild.textContent;
    let tareaEditada = prompt("Edita tu tarea:", tareaActual);

    if (tareaEditada !== null && tareaEditada.trim() !== "") {
        lista.firstChild.textContent = tareaEditada;
        guardarTareas(); // Actualiza el localStorage después de editar
    }
};

// Función para guardar tareas en localStorage
const guardarTareas = () => {
    let tareas = [];
    let listas = document.querySelectorAll(".lista");

    listas.forEach((lista) => {
        tareas.push(lista.firstChild.textContent);
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
};

// Función para cargar tareas desde localStorage
const cargarTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));

    if (tareas) {
        tareas.forEach((tarea) => {
            agregarTarea(tarea);
        });
    }
};

// Escuchar el evento submit del formulario
form.addEventListener("submit", sumarTarea);

// Cargar tareas al cargar la página
document.addEventListener("DOMContentLoaded", cargarTareas);
