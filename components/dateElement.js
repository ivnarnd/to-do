export default (date) =>{//arrow function para crear la fecha en el DOM
    const dateElement = document.createElement("li");//creamos el elemento li de la fecha
    dateElement.classList.add('date');//le agregamos la clase date 
    dateElement.innerHTML=date; //le asignamos la fecha al valor de la etiqueta html
    return dateElement;//retornamos la fecha


}