/* =====================================================
   ABRIR GALERÍA
===================================================== */

function abrirGaleria(id){

    document.getElementById("paginaPrincipal").style.display="none";

    document.querySelectorAll(".gallery-page").forEach(function(galeria){

        galeria.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function mostrarInicio(){

    document.getElementById("paginaPrincipal").style.display="block";

    document.querySelectorAll(".gallery-page").forEach(function(galeria){

        galeria.classList.remove("active");

    });

    cerrarImagen();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =====================================================
   ABRIR IMAGEN GRANDE
===================================================== */

function abrirImagen(imagen,titulo){

    const modal=document.getElementById("imageModal");

    const modalImage=document.getElementById("modalImage");

    const modalTitle=document.getElementById("modalTitle");

    modalImage.src=imagen;

    modalImage.alt=titulo;

    modalTitle.textContent=titulo;

    modal.classList.add("open");

    document.body.style.overflow="hidden";

}


/* =====================================================
   CERRAR IMAGEN
===================================================== */

function cerrarImagen(){

    const modal=document.getElementById("imageModal");

    modal.classList.remove("open");

    document.body.style.overflow="";

}


function cerrarModal(event){

    if(event.target === document.getElementById("imageModal")){

        cerrarImagen();

    }

}


/* =====================================================
   ESC PARA CERRAR
===================================================== */

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        cerrarImagen();

    }

});


/* =====================================================
   MENÚ MÓVIL
===================================================== */

function cerrarMenu(){

    document.getElementById("mobileMenu").classList.remove("open");

}


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementosReveal=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(

function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},

{
    threshold:.15
});


elementosReveal.forEach(function(elemento){

    observer.observe(elemento);

});


/* =====================================================
   BOTÓN VOLVER ARRIBA
===================================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});
