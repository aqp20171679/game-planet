// var estado=true;  
// setTimeout("ver()",900);  
// function ver (){  
//     estado=!estado;  if(estado==true)  texto1.style.visibility="visible";
//       else  texto1.style.visibility="hidden";  
//       setTimeout("ver()",900);  
// }

// ver();

// seccion modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}