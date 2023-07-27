console.log("hola desde el si");

//DOM
//querySelector: nos da el primer resultado de busqueda
//querySelectorAll: nos da todos

/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
})

console.log(links);
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){


    link.addEventListener("click",function(ev){
        ev.preventDefault();
        

        let content = document.querySelector('.content');

        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/ProyectoWeb";

        },600)


        return false;
    });   
});

