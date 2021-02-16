var validar=function(){
    var nombres=document.formulario.nombres1;
    if(nombres.value==""){
        document.getElementById("mensaje_nombres").innerText="el campo nombre es obligatorio";
    }
}
window.onload =function(){
    var boton = document.getElementById("btn_validar")
    boton.onclick=function(){
        validar();
    }
}