export const dateFormat = (date) => {
 const newDate = new Date(date);
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

 return "Se unió el "+newDate.toLocaleDateString('es-CL',options)
}