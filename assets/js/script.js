class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion} y el número telefónico de contacto: ${this.telefono}.`;
  }  
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this.tipo = tipo;
  }
  getTipo() {
    return `El tipo de animal es un: ${this.tipo}`;
  }
}

class Mascota extends Animal {
  constructor (nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super (nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

let formulario = document.querySelector("form");

const listaAnimales = (event) => {
  event.preventDefault();

  let nombrePropietario = document.querySelector("#propietario").value;
  let telefonoPropietario = document.querySelector("#telefono").value;
  let direccionPropietario = document.querySelector("#direccion").value;
  let nameMascota = document.querySelector("#nombreMascota").value;
  let tipoMascota = document.querySelector("#tipo").value;
  let enfermedadMascota = document.querySelector("#enfermedad").value;
  let liPropietario = document.createElement("li");
  let liMascota = document.createElement("li");

  const mascota = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, tipoMascota, nameMascota, enfermedadMascota);
  
  function datosALDom(mascota) {
    let resultado = document.querySelector("#resultado");
    liPropietario.innerHTML = `${mascota.datosPropietario()}`;
    liMascota.innerHTML = `${mascota.getTipo()}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}`;
    resultado.appendChild(liPropietario);
    resultado.appendChild(liMascota);
  }

  if (tipoMascota == 'Perro') {
    const perro = mascota;
    datosALDom(perro);
    
  } else if (tipoMascota == 'Gato') {
    const gato = mascota;
    datosALDom(gato);
  } else {
    const conejo = mascota;
    datosALDom(conejo);
  }
  document.querySelector('#propietario').value = '';
  document.querySelector('#telefono').value = '';
  document.querySelector('#direccion').value = '';
  document.querySelector('#nombreMascota').value = '';
  document.querySelector('#tipo').value = '';
  document.querySelector("#enfermedad").value = '';
}

formulario.addEventListener("submit" , listaAnimales);