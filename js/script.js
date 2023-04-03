
/* Exibi a tela de loading  */
document.getElementById("loading").style.display = "block";

/* Mostra o conteúdo da página depos de 3 segundos */
setTimeout(function(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 3000);