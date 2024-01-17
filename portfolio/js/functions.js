window.onload = () => {
    const titulo = document.querySelector("#titulo");

    titulo.addEventListener("click", () => {
        if(titulo.innerHTML == "Jane"){
            titulo.innerHTML = "Jhoanna Pereira";
        }else{
            titulo.innerHTML = "Jane";
        }
    })
    

}