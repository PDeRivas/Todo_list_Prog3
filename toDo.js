let tareas = []

class Tarea{
    constructor(titulo, fecha, hora, descripcion){
        this.id = tareas.length() + 1
        this.titulo = titulo
        this.fecha = fecha
        this.hora = hora
        this.descripcion = descripcion
        this.completado = false
    }

    completar(){
        this.completado = true
    }
}

const agregarTarea = (titulo, fecha, hora, descripcion) => {
    let nuevaTarea = new Tarea(titulo, fecha, hora, descripcion)
    tareas.push(nuevaTarea)
}

const borrarTarea = (id) => {
    tareas.find(tarea => tarea.id = id)
}

agregarTarea('Lavar los platos', '18/04/2024', '23:59', 'Sacarle el moho al plato y al tenedor')

console.log(tareas)

let input = 0

tareas.find()