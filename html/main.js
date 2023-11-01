
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
  

   
