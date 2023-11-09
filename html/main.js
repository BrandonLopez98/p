const divUno = document.querySelector('.uno');
const divDos = document.querySelector('.dos');

const interval = setInterval(() => {
    if (divUno.id) {
        divUno.id = ''
        divDos.id = 'active'
    }else{
        divUno.id = 'active'
        divDos.id = ''
    }  
  }, 5000);
  


  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtén los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // Envía los datos por correo electrónico (este es solo un ejemplo)
    var destinatario = 'brandonlopezmonroy@gmail.com';
    var asunto = 'Nuevo mensaje de contacto';
    var cuerpo = 'Nombre: ' + nombre + '\nCorreo: ' + correo + '\nMensaje:\n' + mensaje;

    // Enviar el correo (esto es solo un ejemplo y no enviará un correo real)
    console.log('Enviando correo a ' + destinatario);
    console.log('Asunto: ' + asunto);
    console.log('Cuerpo del mensaje:\n' + cuerpo);

    // Puedes agregar aquí el código para enviar el correo real usando un servicio de envío de correo, como SendGrid o Nodemailer en un entorno de servidor.

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});