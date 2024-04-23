let tareas = []

class Tarea{
    constructor(titulo, descripcion, fecha, hora){
        this.id = tareas.length + 1
        this.titulo = titulo
        this.descripcion = descripcion
        this.fecha = fecha
        this.hora = hora
        this.completado = false
        this.visible = true
    }

    completar(){
        this.completado = true
    }

    eliminar(){
        this.visible = false
    }
}

const agregarTarea = (titulo, fecha, hora, descripcion) => {
    let nuevaTarea = new Tarea(titulo, fecha, hora, descripcion)
    tareas.push(nuevaTarea)
    render()
}

const completar = (id) => {
    let index = tareas.findIndex(tarea => tarea.id == id) + 1;
    tareas[index].completar()
    render()
}

const eliminar = (id) => {
    let index = tareas.findIndex(tarea => tarea.id == id) + 1;
    tareas[index].eliminar()
    render()
}

const render = () => {
    let taskList = document.getElementById("taskList")
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    for (let x = 0; x < tareas.length; x++){
        if (tareas[x].visible == true){
            let row = document.createElement('div')
            row.className = `row justify-content-center my-4 task`

            let card = document.createElement('div')
            card.className = `card w-50 p-0 ${tareas[x].completado ? "text-bg-success": "nada"} `

            let titulo = document.createElement('h3')
            titulo.innerHTML = tareas[x].titulo
            card.appendChild(titulo)
            titulo.className ='card-header'
            
            let descripcion = document.createElement('p')
            descripcion.innerHTML = tareas[x].descripcion
            card.appendChild(descripcion)

            let fecha = document.createElement('p')
            fecha.innerHTML = tareas[x].fecha
            card.appendChild(fecha)

            let hora = document.createElement('p')
            hora.innerHTML = tareas[x].hora
            card.appendChild(hora)

            let contenedorBotonCompletar = document.createElement('div')
            contenedorBotonCompletar.className = 'col-12 m-1'
            let botonCompletar = document.createElement('button')
            botonCompletar.className = "btn btn-primary"
            botonCompletar.idCompletar = `${x}`
            botonCompletar.innerHTML = 'Completar tarea'
            botonCompletar.addEventListener('click', (botonApretado) => {
                completar(botonApretado.target.idCompletar)
            })
            contenedorBotonCompletar.appendChild(botonCompletar)
            card.appendChild(contenedorBotonCompletar)

            let contenedorBotonCancelar = document.createElement('div')
            contenedorBotonCancelar.className = 'col-12 m-1'
            let botonCancelar = document.createElement('button')
            botonCancelar.className = "btn btn-danger"
            botonCancelar.idCancelar = `${x}`
            botonCancelar.innerHTML = 'Cancelar tarea'
            botonCancelar.addEventListener('click', botonApretado => {
                eliminar(botonApretado.target.idCancelar)
            })
            contenedorBotonCancelar.appendChild(botonCancelar)
            card.appendChild(contenedorBotonCancelar)

            row.appendChild(card)
            taskList.appendChild(row)
        }
    }
}


document.getElementById("addTask").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var formData = new FormData(e.target);
    titulo = formData.get("title")
    descripcion = formData.get("description")
    fecha = formData.get("date")
    hora = formData.get("time")
    agregarTarea(titulo=titulo, descripcion=descripcion, fecha=fecha, hora=hora)
});
