window.onload = () => {
    const titulo = document.querySelector("#titulo");
    const menu = document.querySelector("nav");

    window.addEventListener('scroll', function(){
        menu.classList.toggle('active',window.scrollY > 0)
    })

    titulo.addEventListener("click", () => {
        if(titulo.innerHTML == "Jane."){
            titulo.style.transition = "2s";
            titulo.innerHTML = "Jhoanna Pereira.";
            titulo.style.width = "16ch";
        }else{

            
            titulo.style.transition = "1s";
            titulo.innerHTML = "Jane.";
            titulo.style.width = "5ch";
        }

    })
    
}

