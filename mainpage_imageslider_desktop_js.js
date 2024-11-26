        let slideIndex = 0;
        const slideDuration = 3000;
        let slideTimer;

        window.onload = function() {
            showSlides();
        };

        function showSlides() {
            const slides = document.getElementsByClassName("mySlides");
            const textElements = document.getElementsByClassName("text");
            const dots = document.getElementsByClassName("dot");
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                textElements[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
                const fill = dots[i].querySelector('.fill');
                fill.style.transitionDuration = '0ms';
                fill.style.width = "0";
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            
            slides[slideIndex - 1].style.display = "block";
            textElements[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            const fill = dots[slideIndex - 1].querySelector('.fill');
            
            fill.style.transitionDuration = `${slideDuration}ms`;
            fill.style.width = "100%";

            slideTimer = setTimeout(showSlides, slideDuration);
        }

        function plusSlides(n) {
            clearTimeout(slideTimer);
            const slides = document.getElementsByClassName("mySlides");
            const textElements = document.getElementsByClassName("text");
            const dots = document.getElementsByClassName("dot");

            slideIndex += n;
            if (slideIndex > slides.length) { slideIndex = 1 }
            if (slideIndex < 1) { slideIndex = slides.length }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                textElements[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
                const fill = dots[i].querySelector('.fill');
                fill.style.transitionDuration = '0ms';
                fill.style.width = "0";
            }
            slides[slideIndex - 1].style.display = "block";
            textElements[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            const fill = dots[slideIndex - 1].querySelector('.fill');
            fill.style.transitionDuration = `${slideDuration}ms`;
            fill.style.width = "100%";

            slideTimer = setTimeout(showSlides, slideDuration);
        }

        function currentSlide(n) {
            clearTimeout(slideTimer);
            slideIndex = n;

            const dots = document.getElementsByClassName("dot");
            for (let i = 0; i < dots.length; i++) {
                const fill = dots[i].querySelector('.fill');
                fill.style.transitionDuration = '0ms';
                fill.style.width = "0";
                dots[i].classList.remove("active");
            }

            plusSlides(0);

            const activeFill = dots[slideIndex - 1].querySelector('.fill');
            activeFill.style.transitionDuration = `${slideDuration}ms`;
            activeFill.style.width = "100%";
        }
