 //parseFloat(prompt("Ingrese un número para calcular el Factorial"))


function calcularFibonacci(){
    let number = document.getElementById("number").value;
    number=parseInt(number)
    let fibonacci= [0,1];
    if(number==null || /\D/.test(number) || number== ""){
        Swal.fire({
            title: `Hola, ${number} no es un número, ingresa un número válido`,
            icon: "error",
        })
    }else{
    for(i=2; i<number; i++){
        fibonacci[i] = fibonacci [i-1] + fibonacci[i-2];
    }
    Swal.fire({
        title: `La serie Fibonacci de ${number} es ${fibonacci}`,
        icon: "info",
    })
}
}


