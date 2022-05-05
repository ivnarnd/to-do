//funcion de creacion de los elementos del icono de tarea
const checkComplete = (id) => {
    const i = document.createElement("i");//creamos el elemento i 
    i.classList.add("far", "fa-check-square", "icon");//agregamos la clase al elemento i
    i.addEventListener("click", (event)=>completeTask(event,id)); //se le agrega la funcion al evento click
    return i;

};

//creacion de la complete task
const completeTask = (event,id) => {
        const element = event.target;//le asignamos a la constante element el target
        //con toggle si esta la clase la quita y si no esta la coloca
        element.classList.toggle("fas")//al elemento le añadimos la clase fas de hecho
        element.classList.toggle("completeIcon");//al elemento le añadimps la clase complete icon para darla por terminada
        element.classList.toggle("far");//al elemento le añadimos la clase far para que saque el icono anterior
     
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const index = tasks.findIndex((item)=> item.id === id);
       
        tasks[index]["complete"] = !tasks[index]["complete"];//damos la tarea como completada
        localStorage.setItem("tasks",JSON.stringify(tasks));//gaurdamos en local storage el nuevo estado de la tarea
    };
export default checkComplete;
