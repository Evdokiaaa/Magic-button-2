const btn = document.querySelector("button");


btn.onclick = function(){
    const symbols = '0123456789ABCDEF'
    let color = '#';

    for (let i = 0 ; i < 6 ; i++){
        color = color + symbols[Math.floor(Math.random() * 16)] // сначало будет # и какой та символ. В итоге будет # + 5 символов
    } 
    document.body.style.backgroundColor = color;
    document.getElementById('ColorName').innerHTML = color;
    
}
    



    


   
