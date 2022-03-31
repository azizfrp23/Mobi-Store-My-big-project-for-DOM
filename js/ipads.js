const ipads = [
    {
        url:'https://www.istore.kg/media/products/iPad-Pro-12-9-WiFi-Silver_TwRGhKz.webp',
        model:'iPad Pro 12.9"(2021)',
        price:'1100',
    },
    {
        url:'https://www.istore.kg/media/products/iPad-Pro-11-WiFi-Space-Gray.webp',
        model:'iPad 11"(2021)',
        price:'900',
    },
    {
        url:'https://www.istore.kg/media/products/Air-4-WiFi-Sky-Blue.webp',
        model:'iPad Air 10.9" (2020)',
        price:'660',
    },
    {
        url:'https://www.istore.kg/media/products/iPad-mini-WiFi-Purple.webp',
        model:'iPad mini 8.3" (2021)',
        price:'550',
    },
    {
        url:'https://www.istore.kg/media/products/iPad-Pro-12-9-WiFi-Space-Gray-2020.webp',
        model:'iPad Pro 12.9" (2020)',
        price:'1000',
    },
    {
        url:'https://www.istore.kg/media/products/iPad-Pro-11-cellular-Space-Gray-2020_bQbAnud.webp',
        model:'iPad Pro 11" (2020)',
        price:'900',
    },
    {
        url:'https://www.istore.kg/media/products/ipad-mini-5-silver-256.webp',
        model:'iPad mini 7.9" (2019)',
        price:'500',
    },
    {
        url:'https://www.istore.kg/media/products/iPad-9-WiFi-Silver.webp',
        model:'iPad 10.2" (2021)',
        price:'450',
    },
    {
        url:"https://www.istore.kg/media/products/iPad-8-Cellular-Gold.webp",
        model:'iPad 10.2" (2020)',
        price:'400'
    }
]
window.addEventListener('load',()=>{
    if(!localStorage.getItem('data3')){
        localStorage.setItem('data3',JSON.stringify(ipads))

    }else{
        const data = JSON.parse(localStorage.getItem('data3'))
        const dataWithid = data.map((item,index)=>{
            return {...item,id:index}
        })

        localStorage.setItem('data3',JSON.stringify([...dataWithid]))
        const base = JSON.parse(localStorage.getItem('data3'))

        cardTemplate(base)
        
    }
})
const $out = document.querySelector('.background_w')
const $search = document.querySelector('.search')
function cardTemplate(base){

    const data = base.map(({url,price,model})=>{
        return `
        <div class="card">
            <img src="${url}" alt="">
            <p style='color:grey'>${model}</p>
            <p style='color:green'>${price}$</p>
            <button class='buy'>Buy</button>
         </div>
        `
    }).join('')

    $out.innerHTML = data

}
$search.addEventListener('input',e=>{
    var value = e.target.value.toUpperCase()

    const filtered = ipads.filter(({model})=>model.toLocaleUpperCase().includes(value))

    cardTemplate(filtered)
})
const $arrow = document.querySelector('.arrow')
const $help = document.querySelector('.help')
const $main = document.querySelector('.card_main')
const $inp = document.querySelector('.help_in')
const $btn = document.querySelector('.btn')
$arrow.addEventListener('click',()=>{
    $help.classList.toggle('active')
    $arrow.classList.toggle('active')
})
$btn.addEventListener('click' ,e  =>{

    e.preventDefault()
   
   $main.innerHTML += `<p>${$inp.value}</p>`
   $inp.value = ''
   
})
