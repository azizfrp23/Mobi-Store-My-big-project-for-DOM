const $blue = document.querySelector('.blue')
const $main = document.querySelector('.main')

$blue.addEventListener('click', e =>{

    e.preventDefault()
    $main.innerHTML = "https://www.istore.kg/media/products/iphone-13-pro-max-blue-select.webp"
})


