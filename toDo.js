let tareas = []

class Tarea{
    constructor(titulo, fecha, hora, descripcion){
        this.id = tareas.length + 1
        this.titulo = titulo
        this.fecha = fecha
        this.hora = hora
        this.descripcion = descripcion
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
            row.className = 'row justify-content-center my-4 task'

            let card = document.createElement('div')
            card.className = 'card w-50 p-0'

            let titulo = document.createElement('h3')
            titulo.innerHTML = tareas[x].titulo
            card.appendChild(titulo)
            titulo.className ='card-header'

            let fecha = document.createElement('p')
            fecha.innerHTML = tareas[x].fecha
            card.appendChild(fecha)

            let hora = document.createElement('p')
            hora.innerHTML = tareas[x].hora
            card.appendChild(hora)

            let descripcion = document.createElement('p')
            descripcion.innerHTML = tareas[x].descripcion
            card.appendChild(descripcion)

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

for(let x = 0; x < 5; x++){
    agregarTarea('Lavar los platos', '18/04/2024', '23:59', 'Sacarle el moho al plato y al tenedor')
}

