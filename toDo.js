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
}

const borrarTarea = (id) => {
    var index = tareas.map(function(e) { return e.id; }).indexOf(id);
    let posTarea = tareas.indexOf(tarea => tarea.id = id)
    console.log(posTarea)
    tareas.splice(tareas.indexOf(posTarea, 1))
}

for(let x = 0; x < 5; x++){
    agregarTarea('Lavar los platos', '18/04/2024', '23:59', 'Sacarle el moho al plato y al tenedor')
}
console.log(tareas)
borrarTarea(3)
console.log(tareas)
let input = 0
