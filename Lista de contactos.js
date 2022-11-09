
var contactos = [];

// crear una funcion para poder ingresar un nuevo contacto
function agregarContactos(){
var contacto ={};
contacto.id = prompt("ingresa id del nuevo contacto");
contacto.nombre = prompt("ingresa nombre del nuevo contacto");
contacto.apellido = prompt("ingresa apellido del nuevo contacto");
contacto.telefono = prompt("ingresa telefono del nuevo contacto")
contacto.ciudad = prompt("ingresa ciudad del nuevo contacto");
contacto.direccion = prompt("ingresa direccion del nuevo contacto");

contactos.push(contacto);
return contactos;
}
console.log(contactos);

// crear una funcion para poder eliminar un contacto
function eliminarContactos(id){
    contactos = contactos.filter(x => x.id != id);
    return contactos;
}

// crear una funcion para poder actualizar un contacto
 function actualizarContactos(){
    var contacto ={};

    contacto.id = prompt("ingrese id del contacto para actualizar");
    contacto.nombre = prompt("ingrese nombre del contacto para actualizar");
    contacto.apellido = prompt("ingrese apellido del contacto para actualizar");
    contacto.telefono = prompt("ingrese telefono del contacto para actualizar")
    contacto.ciudad = prompt("ingresa ciudad del contacto para actualizar");
    contacto.direccion = prompt("ingresa direccion del contacto para actualizar");

    for (var i = 0; i < contactos.length; i++){
        if (contacto.id === contactos[i].id) (contactos[i]= contacto)
    }
    return contactos;
}
