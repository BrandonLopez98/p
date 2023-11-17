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
  



const preguntas = document.querySelectorAll('p[id^="pregunta"]');
const respuestas = document.querySelectorAll('span[id^="respuesta"]');
const imgs = document.querySelectorAll('.img img');

preguntas.forEach((pregunta, index) => {
    pregunta.addEventListener('click', () => {
        if (respuestas[index].style.display === 'none') {
            respuestas[index].style.display = 'block';
            imgs[index].style.transform = 'rotate(180deg)';
        } else {
            respuestas[index].style.display = 'none';
            imgs[index].style.transform = 'rotate(0deg)';
        }
    });
});
