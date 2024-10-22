document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Captura los valores del formulario
    const name = document.getElementById('name').value;
    const last-name = document.getElementById('last-name').value;
    const fnacimiento = document.getElementById('fnacimiento').value;
    const attend = document.getElementById('attend').checked; // Captura el estado del checkbox


    console.log("Nombre " + name + " " + "Naciste el "+ fnacimiento)
    // Muestra los datos en un alert
    alert(`Nombre: ${name}\nFecha de Nacimiento: ${dob}\nAsistiré al evento: ${attend ? 'Sí' : 'No'}`);

    // Aquí puedes agregar lógica para guardar los datos (por ejemplo, enviarlos a un servidor)
});
