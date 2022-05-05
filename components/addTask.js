import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./readTask.js";


export const addTask = (evento) =>{
    evento.preventDefault();//evita el acontecimiento por default , recarga de pagina
    
    const list = document.querySelector("[data-list]");//en la variable list guardamos la referencia a list 
    const input = document.querySelector("[data-form-input]");//en la variable input guardo la selecion de la entrada del form
    const calendar = document.querySelector("[data-form-date]");//en la variable calendar tengo la referencia de la entrada de fecha
    
    
    const value = input.value;//guardo el contenido del input
    const date = calendar.value;//guardamos en calendar el valor de la fecha ingresada
    const dateFormat = moment(date).format("DD/MM/YYYY");//le doy el formato que quiero a la fecha con la libreria moment
    
   if(value===""|| date===""){ //si el usuario no ingresa la tarea y su fecha no hacer nada
       return;
   }
    
    input.value = "";//limpio el valor del input para ingresar un nuevo valor  
    calendar.value = "";//limpio el calendario
    const complete = false; 
    const taskObj ={ //objeto de tipo tarea para almacenar los datos que necesitamos
        value,//el texto de la tarea
        dateFormat,//una fecha de tarea
        complete,//una bandera para cada tarea hecha
        id: uuid.v4()//le agregamos un id unico a cada tarea
    };
    list.innerHTML = "";//vacio las listas para que no se repitan al ordenar de nuevo las fechas
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [] ; //creo un arreglo de tareas para guardarlas en el local storage y traigo lo que esta guardado ahi
    taskList.push(taskObj);//almaceno al final del arreglo un objeto de tipo tarea
    localStorage.setItem("tasks",JSON.stringify(taskList));//con session almacebi las informacion de la session comvierto el objeto en un json con . stringfy
    displayTask();
  
}




export const createTask = ({value, dateFormat , complete, id}) => {
    const task = document.createElement('li')//creamos un elemento li en el documento
    task.classList.add("card");//agregando la clase card al elemento task
      

    //backticks
    const taskContent = document.createElement("div");//creamos un elemento div
    
  
   const check = checkComplete(id);
   if(complete){
    console.log("completada");
    check.classList.toggle("fas")//al elemento le añadimos la clase fas de hecho
    check.classList.toggle("completeIcon");//al elemento le añadimps la clase complete icon para darla por terminada
    check.classList.toggle("far");//al elemento le añadimos la clase far para que saque el icono anterior
   }
    const titleTask = document.createElement("span");//creamos un elemento span para el titulo de la etiqueta
        titleTask.classList.add("task");//le asignamos la clase task al titulo
        titleTask.innerText = value;//le asignamos el valor al texto
        taskContent.appendChild(check);//al elemento taskContent agregarle un hijo con lo que retorna la funcion checkComplete
        taskContent.appendChild(titleTask);//le asignamos al elemento taskContent el hijo titleTask
    //   task.innerHTML = content;//al elemto task añadirle el codigo html que en este caso es la variable content


    const dateElement = document.createElement("span"); //creamos un elemento de fecha para mostrar 
        dateElement.innerHTML = dateFormat; //le asociamos al elemento su respectivo html
        task.appendChild(taskContent);//al elemento task le asignamos un hijo taskContent
        task.appendChild(dateElement);//al elemento task agregarle el hijo que devuelve la fecha
        task.appendChild(deleteIcon(id));//al elemento task agregarle el hijo que devuelve deleteIcon()
    
    return task;//retornamos el elemento tarea

    
}