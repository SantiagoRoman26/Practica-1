function saludar(){
    alert("hola mi primer script");
}
function sumar(){
    numero1=parseInt(document.getElementById("n1").value);
    numero2=parseInt(document.getElementById("n2").value);
    resultado=numero1+numero2;
    alert("la suma es:"+resultado);
}
function invertir(){
    var cadenaObtenida=document.getElementById("cadena").innerText;
    var vector=cadenaObtenida.split('');//arreglo de caracteres
    var reversa=vector.reverse();
    var cadenaInvertida=reversa.join('');//une el arreglo en una sola cadena
    document.write(cadenaInvertida);
}
function validarFormulario(){
    var nombres=document.getElementById("nombres");
    if(nombres==""){
        alert("porfavor digite el usuario");
    }
}
