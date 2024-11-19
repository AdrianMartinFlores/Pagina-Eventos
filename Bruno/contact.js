function mostrarValor() { 
  let name = document.getElementById('name').value;
  let razonContacto = document.getElementById('razonContacto').value;
  let email = document.getElementById('email').value;
  let codigoPostal = document.getElementById('codigoPostal').value;
  alert("Su nombre es " + name
    +" Su razon del contacto es " + razonContacto
    + " Su email es " + email
    +" Su codigo postal es " + codigoPostal
  );
  
  /*
  alert("Su razon del contacto es " + razonContacto);
  alert("Su email es " + email);
  alert("Su codigo postal es " + codigoPostal);*/
}



