export const uniqueDates = (tasks) =>
{
    const unique = [];//arreglo de fechas
    tasks.forEach(task => {
       
        if(!unique.includes(task.dateFormat)){//si no existe la fecha la agrega 
            unique.push(task.dateFormat);
        }
    });

return unique;
};
export const orderDates = (dates) => { //ordeno las fechas
    return dates.sort((a,b) => {
        const firstDate=moment(a,"DD/MM/YYYY");
        const secondDate=moment(b,"DD/MM/YYYY");
        return firstDate-secondDate;
    } )
}