let viewAll = document.querySelector('.checkout__button')

viewAll.onclick = function (){
    let hideBlocks = document.querySelectorAll('.hide')

    hideBlocks.forEach((item)=> item.classList.remove('hide'))

}