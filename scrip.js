let numero =  ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let pica = [ '\u2666', '\u2660', '\u2663', '\u2665'];
let col = [1, 2];

document.getElementById('btn').addEventListener('click', function(){

    var num = Math.floor(Math.random() * numero.length);
    var pic = Math.floor(Math.random() * pica.length);
    document.getElementsByClassName('card_1')[0].innerHTML = numero[num];
    document.getElementsByClassName('card_5')[0].innerHTML = numero[num];
    document.getElementsByClassName('card_center')[0].innerHTML = pica[pic];
    
}); 

btn.addEventListener('click', function(evento){
    var colRandom = Math.floor(Math.random() * col.length + 1);

    if(colRandom == 1){
        document.getElementById('theTitle').style.color = 'red';
        document.getElementById('num1').style.color = 'red';
        document.getElementById('num2').style.color = 'red';
    }else{
        document.getElementById('theTitle').style.color = 'black';
        document.getElementById('num1').style.color = 'black';
        document.getElementById('num2').style.color = 'black';
    }
    

    console.log(colRandom)
});





/*function acc() {
var num = Math.floor(Math.random() * numero.length);
var pic = Math.floor(Math.random() * pica.length);


document.getElementsByClassName('card_1')[0].innerHTML = numero[num];
document.getElementsByClassName('card_5')[0].innerHTML = numero[num];

document.getElementsByClassName('card_center')[0].innerHTML = pica[pic];
}


acc();*/



