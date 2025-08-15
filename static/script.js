document.addEventListener("DOMContentLoaded", function() {
    const sobreSection = document.getElementById("sobre");
    const title = sobreSection.querySelector("h2");
    const paragraph = sobreSection.querySelector("p");
    const vanImage = document.getElementById("van");

    function checkVisibility() {
        
        const sectionTop = sobreSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            title.classList.add("visible");
            paragraph.classList.add("visible");
            vanImage.classList.add("visible");
          
            window.removeEventListener("scroll", checkVisibility);
        }
    }


    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

   
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;

    const nextSlide = () => {
       
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
      
        if (images[currentImageIndex]) {
            slider.scrollLeft = images[currentImageIndex].offsetLeft;
        }
    };

 
    setInterval(nextSlide, 3000);
});
