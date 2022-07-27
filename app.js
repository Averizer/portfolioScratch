window.onresize = resize
nombreJunto = document.getElementsByClassName("nombre-junto")
nombreSeparado = document.getElementsByClassName("nombre-separado")
function resize() {
    if (window.innerWidth < 1380) {
        nombreJunto[0].style.display = "block";
        nombreJunto[1].style.display = "block";

        for (i = 0; i < 16; i++) nombreSeparado[i].style.display = "none";
    } else {
        nombreJunto[0].style.display = "none";
        nombreJunto[1].style.display = "none";

        for (i = 0; i < 16; i++) nombreSeparado[i].style.display = "inline";
    }
}

window.onload = function() {
    if (window.innerWidth < 1380) {
        nombreJunto[0].style.display = "block";
        nombreJunto[1].style.display = "block";

        for (i = 0; i < 16; i++) nombreSeparado[i].style.display = "none";
        
    } else {
        nombreJunto[0].style.display = "none";
        nombreJunto[1].style.display = "none";

        for (i = 0; i < 16; i++) nombreSeparado[i].style.display = "inline";
    }
}

boton = document.getElementsByClassName("button")
boton.onClick = function goToAboutMe() {
    document.getElementsByClassName('sub-section').scrollIntoView()
}
