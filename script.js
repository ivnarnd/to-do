import {addTask} from "./components/addTask.js";
import {displayTask} from "./components/readTask.js"
//Immediately invoked function expression IIFE
(() => {
    //codigo
    const btn = document.querySelector("[data-form-btn]"); //en la variable btn guardamos el selector del boton
    //funtion for cleaning coding
    
    //arrow function
    btn.addEventListener("click", addTask);//referencia del createTask
   displayTask();//llamamos a la funcion para que cargue los datos del local storage
    


   

})();



