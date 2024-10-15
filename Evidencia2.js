const nombre = document.getElementById("nombre")
const edad  = document.getElementById("edad")
const email  = document.getElementById("email")
const genero = document.getElementById("genero")
const tel    = document.getElementById("tel")
const fecha  = document.getElementById("fecha")
const nombre2= document.getElementById("nombre2")
const rango  = document.getElementById("rango")
const btnenviar = document.getElementById("btnsumit")

btnenviar.addEventListener("click", e => {
    e.preventDefault();
    const ArrayDatos = {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value,
        genero: genero.value,
        tel: tel.value,
        fecha: fecha.value,
        nombre2: nombre2.value,
        rango: rango.value,
    };

    alert(`El registro se ha completado, favor de esperar respuesta.`);
    console.log(ArrayDatos);
});
