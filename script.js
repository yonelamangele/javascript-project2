document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0
    var slides = document.querySelectorAll(".mySlides img")
    var texts = document.querySelectorAll(".slide-text p")
    var paginations = document.querySelectorAll(".pagination img")
    totalSlides = slides.length

    function activateSlide(index) {
        slides.forEach((slide) => slide.classList.remove('active'))
        texts.forEach((text) => text.classList.remove('active'))
        paginations.forEach((pagination) => {
            pagination.classList.remove('active')
            pagination.style.transform = 'rotate(0deg)'
        })

        slides[index].classList.add('active')
        texts[index].classList.add('active')
        paginations[index].classList.add('active')
        paginations[index].style.transform = 'rotate(-45deg)'
    }

    document.querySelector('.arrow').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides
        activateSlide(currentIndex)

    }) 
})