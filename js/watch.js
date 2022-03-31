const watchs = [
    {
        url:'https://www.istore.kg/media/products/stainless-graphite-41.webp',
        model:'Watch Series 7 with Stainless Steel Case',
        price:'950'
    },
    {
        url:'https://www.istore.kg/media/products/7-41-Nike-Starlight-GPS.webp',
        model:'Watch Series 7 Nike with Aluminum Case',
        price:'500'
    },
    {
        url:'https://www.istore.kg/media/products/7-41-Green-GPS.webp',
        model:'Watch Series 7 with Aluminum Case',
        price:'440'
    },
    {
        url:'https://www.istore.kg/media/products/SE-Nike-40-GPS-Pure-Platinum-Black.webp',
        model:'Watch Series 6 Nike with Aluminum Case',
        price:'420'
    },
    {
        url:'https://www.istore.kg/media/products/SE-Nike-40-GPS-Pure-Platinum-Black_51dX1Ob.webp',
        model:'Watch SE Nike with Aluminum Case',
        price:'360'
    },
    {
        url:'https://www.istore.kg/media/products/MKU83_VW_34FRwatch-40-alum-spacegray-nc-se_VW_34FR_WF_CO.webp',
        model:'Watch SE with Aluminum Case',
        price:'320'
    },
]

window.addEventListener('load',()=>{
    if(!localStorage.getItem('data5')){
        localStorage.setItem('data5',JSON.stringify(watchs))

    }else{
        const data = JSON.parse(localStorage.getItem('data5'))
        const dataWithid = data.map((item,index)=>{
            return {...item,id:index}
        })
        localStorage.setItem('data5',JSON.stringify(dataWithid))
        const base = JSON.parse(localStorage.getItem('data5'))

        cardTemplate(base)

    }
})

const $out = document.querySelector('.background_w')
const $search = document.querySelector('.search')

function cardTemplate(base){
    const data = base.map(({url,model,price})=>{
        return `
        <div class="card">
            <img src="${url}" alt="">
            <p style='color:grey'> ${model}</p>
            <p style='color:green'>${price}$</p>
            <button class='buy'>Buy</button>

         </div>
        `
    }).join('')

    $out.innerHTML = data

    
}

$search.addEventListener('input', e =>{

    var value = e.target.value.toUpperCase()

    const filtered = watchs.filter(({model})=> model.toUpperCase().includes(value))

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
