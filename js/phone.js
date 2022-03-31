const phones = [
    {
        model:'13 Pro Max',
        color:'Green',
        price:1200,
        url:'https://www.istore.kg/media/products/iphone-13-pro-max-green-select.webp'
    },
    {
        model:'13 Pro Max',
        color:'Ligth blue',
        price:1200,
        url:'https://www.istore.kg/media/products/iphone-13-pro-max-blue-select.webp'
    },
    {
        model:'13 Pro Max',
        color:'Graphite',
        price:1200,
        url:'https://www.istore.kg/media/products/iphone-13-pro-max-graphite-select.webp'
    },    {
        model:'13 Pro Max',
        color:'Gold',
        price:1200,
        url:'https://www.istore.kg/media/products/iphone-13-pro-max-gold-select.webp'
    },
    {
        model:'13 Pro',
        color:'Green',
        price:1000,
        url:'https://www.istore.kg/media/products/iphone-13-pro-green-select.webp'
    },
    {
        model:'13 Pro',
        color:'Light blue',
        price:1000,
        url:'https://www.istore.kg/media/products/iphone-13-pro-blue-select.webp'
    },
    {
        model:'13 Pro ',
        color:'Graphite',
        price:1000,
        url:'https://www.istore.kg/media/products/iphone-13-pro-graphite-select.webp'
    },
    {
        model:'13 Pro ',
        color:'Gold',
        price:1000,
        url:'https://www.istore.kg/media/products/iphone-13-pro-gold-select.webp'
    },
    {
        model:'13',
        color:'Green',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-green-select_VLbGgMB.webp'

    },
    {
        model:'13',
        color:'Blue',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-blue-select-2021_QT6ur4J.webp'

    },    {
        model:'13',
        color:'Pink',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-pink-select-2021.webp'

    },    {
        model:'13',
        color:'Red',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-product-red-select-2021.webp'
    },
    {
        model:'13 Mini',
        color:'Green',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-green-select_VLbGgMB.webp'

    },
    {
        model:'13 Mini',
        color:'Blue',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-mini-blue-select-2021.webp'

    },    {
        model:'13 Mini',
        color:'Pink',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-mini-pink-select-2021.webp'

    },    {
        model:'13 Mini',
        color:'Red',
        price:800,
        url:'https://www.istore.kg/media/products/iphone-13-mini-product-red-select-2021.webp'
    },
]

window.addEventListener('load',()=>{
    if(!localStorage.getItem('data')){
        localStorage.setItem('data',JSON.stringify(phones))

    }else{
        const data = JSON.parse(localStorage.getItem('data'))
        const dataWithid = data.map((item,index) =>{
            return {...item,id:index}
        })
        localStorage.setItem('data',JSON.stringify(
            [...dataWithid]
        ))
        const base = JSON.parse(localStorage.getItem('data'))
        cardTemplate(base)
    }
})

function cardTemplate(base){
    const data = base.map(({url,model,price,color})=>{
        return `
        <div class="card_form">
            <div class="card">
                <img src="${url}" alt="" >

            <div class="text">
                <p>${model}</p>
                <p style='color:green'>${price}$</p>
                <p style='color:${color.toLowerCase()}'>Color:${color}</p>
                <button class='buy'>Buy</button>
            </div>
            </div>
        </div>


        `
    }).join('')

    $out.innerHTML = data

}

const $out = document.querySelector('.background_w')
const $search = document.querySelector('.search')
const $arrow = document.querySelector('.arrow')
const $help = document.querySelector('.help')
const $main = document.querySelector('.card_main')
const $inp = document.querySelector('.help_in')
const $btn = document.querySelector('.btn')

$search.addEventListener('input',e=>{


    var value = e.target.value.toUpperCase()

   const filtred = phones.filter(({model})=>model.toUpperCase().includes(value))

   cardTemplate(filtred)
})

$arrow.addEventListener('click',()=>{
    $help.classList.toggle('active')
    $arrow.classList.toggle('active')
})
$btn.addEventListener('click' ,e  =>{

    e.preventDefault()
   
  $main.innerHTML += `<p>${$inp.value}</p>`
   $inp.value = ''
   
})
window.addEventListener('load' ,()=>{
    if(localStorage.getItem('auth') === 'false'){
        window.open('index.html','_self')

    }else{
        return
    }
 
})
