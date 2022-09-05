// Creando la variable URL, que contendra la URL de la API
let url = 'https://api.covidtracking.com/v1/us/daily.json';

// Usando fetch API, para realizar una solicitud
fetch(url) // Realizando la peticion a la API que se encuantra en la variable url
// Haciendo uso de las promesas(promises) y las funciones flecha(arrow functions)
.then(response => response.json())    // llamnado al metodo then, para obtener la respuesta, enviandolo a un formato json
.then(data => mostrarDatos(data))    // leyendo el objeto data, llamando a la funcion mostrarDatos para mostrar la informacion
.catch(error => console.log(error))  // Si existe un error, este sera atrapado, Usando la palabra reservada catch

// Creandoi la funcion mostrarDatos, para llamar a los datos
const mostrarDatos = (data) => {
    console.log(data) // Trayendo la informacion
    // Haciendo uso de los templates de JS 
    let body = ''    // Creando la variable body, que al inicio estara vacia

    // Creacion del bucle for, ya que la infomacion tendra una longitud 
    for (let i = 0; i < data.length; i++) {
        // Lo que se querra mostrar, con las comillas literales se mostarra las  (filas y celdas)
        body += `<tr><td>${data[i].date}</td>
                    <td>${data[i].states}</td>
                    <td>${data[i].positive}</td>
                    <td>${data[i].negative}</td>
                    <td>${data[i].pending}</td>
                    <td>${data[i].hospitalizedCurrently}</td>
                    <td>${data[i].hospitalizedCumulative}</td></tr>`;
    }
    // Llamando al id "data", para agregar la informacion consultada
    document.getElementById('data').innerHTML = body;
}