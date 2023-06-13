function sumar(){
    let num1=parseInt(document.getElementById("numero1").value)
    let num2=parseInt(document.getElementById("numero2").value)
    let suma=num1+num2
    //mostrar resultado
    document.getElementById("resultado").textContent="La suma es "+suma;
}
function restar(){
    let num1=parseInt(document.getElementById("numero1").value)
    let num2=parseInt(document.getElementById("numero2").value)
    let resta=num1-num2
    //mostrar resultado
    document.getElementById("resultado").textContent="La resta es "+resta;
}
function multiplicacion(){
    let num1=parseInt(document.getElementById("numero1").value)
    let num2=parseInt(document.getElementById("numero2").value)
    let multiplicacion=num1*num2
    //mostrar resultado
    document.getElementById("resultado").textContent="La mutiplicacion es "+multiplicacion;
}
function division(){
    let num1=parseInt(document.getElementById("numero1").value)
    let num2=parseInt(document.getElementById("numero2").value)
    let division=num1/num2
    //mostrar resultado
    document.getElementById("resultado").textContent="La division es "+division;
}
