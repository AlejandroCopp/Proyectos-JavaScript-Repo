function agregarTarea() {
   

    //en la variable ponemos el contenido del campo nuevaTarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    
    //Control que el texto no este vacio
    if (nuevaTareaTexto === ""){
        alert ("Ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear boto eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){ nuevaTarea.remove();}
    
    //Agregar boton eliminar a el elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregamos el elemento li al ul 
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Tachar
    let botonTachar = document.createElement("button");
    botonTachar.textContent = "Tachar";
    botonTachar.onclick = tachar;
    function tachar(){
        let nuevaTareaTexto = nuevaTarea;
        nuevaTareaTexto.classList.toggle('tachado')}

    nuevaTarea.appendChild(botonTachar);



    document.getElementById("nuevaTarea").value = "";

}

