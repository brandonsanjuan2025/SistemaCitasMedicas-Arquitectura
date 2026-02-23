document.getElementById("formCita").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;

    if(nombre === "" || fecha === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    console.log("Validando información...");
    guardarCita(nombre, fecha);

    alert("Cita registrada correctamente");
});