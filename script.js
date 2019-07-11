function mostrar(){
            
    var Nombres = document.getElementById("registro1").value;
    var Apellidos = document.getElementById("registro2").value;
    var Genero= document.getElementById("registro3").value;
    var estadoc = document.querySelector('input[name="estadoCivil"]:checked').value
    var html = "<td>"+Nombres+"</td><td>"+Apellidos+"</td><td>"+Genero+"</td><td>"+estadoc+"</td>";
    var contenido = document.createElement("tr");
       contenido.innerHTML=html;
    document.getElementById("tabla").appendChild(contenido);
    
}