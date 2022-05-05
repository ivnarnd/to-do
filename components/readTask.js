import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js"



//esta arrow function se encarga de la lectura de los elementos guardados en localStorage la exportamos para agregarla luego  
export const displayTask = () =>{
    const list = document.querySelector("[data-list]");//creamos la seleccion hacia la lista de tareas
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //cargamos el contenido de local storage o si no hay nada un arreglo vacio
    const dates = uniqueDates(taskList);//almaceno las fechas guardadas en el local storage sin repetir fechas
    orderDates(dates); //llamo a la funcion para ordenar las fechas y le paso las fechas unicas


    dates.forEach(date => {//recorro las fechas unicas y las muestro
        const dateMoment = moment(date, "DD/MM/YYYY")//creo un tipo de fecha con formato
        list.appendChild(dateElement(date)); // a cada elemento le agregamos la fecha arriba
        taskList.forEach(task => {
           const taskDate = moment(task.dateFormat, "DD/MM/YYYY");//Creamos un elemento fecha de date con el formato que trabajamso
           const diff= dateMoment.diff(taskDate);//calculamos si hay diferencia entre las fechas 
           if(diff===0){//si la diferencia entre las fechas es cero es decir son iguales
            list.appendChild(createTask(task));//al elemento lista le creamos un hijo tarea que sera el que nos retorna la funcion createTask  
                
            
           }
          
            
        });
    })
    
}