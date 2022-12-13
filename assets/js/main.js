
   //===> Numbers 
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');
    
    //=======> Operator
    var ac  = document.getElementById('ac');
    var percentage = document.getElementById('percentage');
    var division = document.getElementById('division');
    var multiplication = document.getElementById('multiplication');
    var difference = document.getElementById('difference');
    var sum  = document.getElementById('sum');
    var currentvalue = document.getElementById('currentValue'); 
    var previousValue = document.getElementById('previousValue')
    var result = document.getElementById('equal')
    var point = document.getElementById('point');


//===========>> Operations <<==============
one.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"1";
})

two.addEventListener('click', ()=>{
    currentvalue.textContent = currentvalue.textContent+"2"
})

three.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"3";
})

four.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"4";
})

five.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"5";
})

six.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"6";
})

seven.addEventListener('click',()=>{
    currentvalue.textContent= currentvalue.textContent+"7";
})

eight.addEventListener('click',()=>{
    currentvalue.textContent = currentvalue.textContent+"8";
})

nine.addEventListener('click',()=>{
    currentvalue.textContent = currentvalue.textContent+"9"
})

zero.addEventListener('click', ()=>{
    currentvalue.textContent = currentvalue.textContent+"0"
})

// ==============>> others   <<==============
ac.addEventListener('click', ()=>{
    clean();
})

point.addEventListener('click', ()=>{
    currentvalue.textContent = currentvalue.textContent + "."
})

percentage.addEventListener('click', ()=>{
    currentvalue.textContent = currentvalue.textContent +"%"
    valorA = currentvalue.textContent
    currentvalue.textContent=''
    previousValue.textContent = valorA
    operacion = "%"
})

sum.addEventListener('click', ()=>{
    valorA = currentvalue.textContent;
    currentvalue.textContent =''
    previousValue.textContent = valorA
    operacion = "+";
})

difference.addEventListener('click', ()=>{
    valorA = currentvalue.textContent;
    currentvalue.textContent =''
    operacion = "-";
})

multiplication.addEventListener('click', ()=>{
    valorA = currentvalue.textContent;
    currentvalue.textContent =''
    operacion = "*";
})

division.addEventListener('click', ()=>{
    valorA = currentvalue.textContent;
    currentvalue.textContent =''
    operacion = "/";
})

result.addEventListener('click', ()=>{
    valorB = currentvalue.textContent
    currentvalue.textContent = ''    
    opreaciones();
})

// Limpiar display
function clean(){
    previousValue.textContent=''
    currentvalue.textContent=''
    valorA = 0;
    valorB =0;
}

// function percen(){
//     if(valorA = valorA){
//         valorA = parseFloat(valorA) / 100;
//     }
//     else if(valorB = valorB){
//         valorB = parseFloat(valorB) /100; 
//     }
// }


// Operations 
function opreaciones(){
    var resultado = 0
    switch (operacion) {
        case '+':
            previousValue.textContent = `${valorA}  + ${valorB}`;
            resultado = parseFloat(valorA) + parseFloat(valorB);   
            break; 
            
        case '-':
            previousValue.textContent = `${valorA}  - ${valorB}`;
            resultado = parseFloat(valorA) - parseFloat(valorB);             
            break;

        case '*':
             previousValue.textContent = `${valorA} x ${valorB}`;
             resultado = parseFloat(valorA) * parseFloat(valorB);   
            break; 

        case '/':
            previousValue.textContent = `${valorA}  / ${valorB}`;
            resultado = parseFloat(valorA)  / parseFloat(valorB);   
            break;    

        case '%':
            if(valorA = valorA){
                resultado = parseFloat(valorA) / 100;
            }
            else if(valorB = valorB){
                resultado = parseFloat(valorB) / 100; 
            }
          break;

        default:
            resultado ='Se realista xd'
            break;  
    }
    currentvalue.textContent = resultado
}

