let currentIndex = 0;  
const images = [  
    "./img/20180318_140541.jpg",  
    "./img/20191013_151754.jpg",  
    "./img/20220108_180441.jpg",
    "./img/IMG_20240124_175840683.jpg",   
];  

function changeImage(direction) {  
    currentIndex += direction;  

    if (currentIndex < 0) {  
        currentIndex = images.length - 1; // Vuelve a la última imagen  
    } else if (currentIndex >= images.length) {  
        currentIndex = 0; // Vuelve a la primera imagen  
    }  

    document.getElementById('carousel-image').src = images[currentIndex];  
}  

function openModal() {  
    document.getElementById('modal').style.display = 'block';  
}  

function closeModal() {  
    document.getElementById('modal').style.display = 'none';  
}  

// Cambia la imagen automáticamente cada 3 segundos en el modal  
setInterval(() => {  
    if (document.getElementById('modal').style.display === 'block') {  
        changeImage(1);  
    }  
}, 9000);


    $(document).ready(function () {  
        $('.accordion-button').on('click', function () {  
            const target = $(this).data('bs-target');  
            const imageId = target.replace('collapse', 'image'); // Cambia el ID del colapso al ID de la imagen  
            const isVisible = $(imageId).hasClass('show-image');  

            // Ocultar todas las imágenes  
            $('.image-container').removeClass('show-image');  
            // Mostrar la imagen correspondiente solo si no estaba visible  
            if (!isVisible) {  
                $(imageId).addClass('show-image');  
            }  
        });  
    });  
