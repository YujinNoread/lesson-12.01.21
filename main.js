let viewAll = document.querySelector('.checkout__button')

viewAll.onclick = function (){
    let hideBlocks = document.querySelectorAll('.hide')

    hideBlocks.forEach((item)=> item.classList.remove('hide'))

}

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
let union = document.querySelector(".union")

mobileMenu.addEventListener("click",function (){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})
union.addEventListener("click",function (){
    mobileMenu.classList.toggle("active-menu");
    mainMenu.classList.remove("active-menu");
})

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex, 0);

function showSlides(n, position) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.querySelectorAll('.slider__item')
    let dots = document.querySelectorAll(".dots")
    let carousel = document.querySelector('.slider__carousel')
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
        position=0;
    }
    if (n < 1) {
        slideIndex = slides.length
        position=(-(slideIndex-1)*100);
    }
    carousel.style.transform = `translateX(${(-(n-1)) * position}%)`

    for (let dot of dots) {
        dot.classList.remove("active")
    }

    dots[slideIndex - 1].classList.add("active")
}

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
let nextBtn = document.querySelector('.next')

nextBtn.addEventListener("click", function () {
    showSlides(slideIndex += 1,100);
})

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
let previousBtn = document.querySelector('.previous')

previousBtn.addEventListener("click", function () {
    showSlides(slideIndex -= 1,100);
})

/* Устанавливаем текущий слайд: */
let dots = document.querySelectorAll(".dots")

dots.forEach((item,index)=> {
    item.addEventListener("click",function (){
        showSlides(slideIndex = index+1, 100);
    })
})





