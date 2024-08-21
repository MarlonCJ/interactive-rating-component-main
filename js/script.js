
const calificacion = document.querySelectorAll('.card-btn');
const btnSubmit = document.querySelector('.card-submit');
let card1 = document.querySelector('.card-1');
let card2 = document.querySelector('.card-2')
let answer = document.getElementById('answer');
let numero = null;


calificacion.forEach(function(btn){
    btn.addEventListener('click',function(){
        numero = this.textContent;
    })
})

btnSubmit.addEventListener('click',()=>{

    if(numero){
        card1.style.display= "none";
        card2.style.display = "flex";
        answer.textContent = `You selected ${numero} of 5`;
    }else{
        alert('Por favor, selecionar una calificacion antes de enviar');
    }
    
})

