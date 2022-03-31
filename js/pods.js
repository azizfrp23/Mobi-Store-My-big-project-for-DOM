const pods = [
    {
        url:'https://www.istore.kg/media/products/AirPods-Max-Blue.webp',
        model:'AirPods Max',
        price:'500'
    },
    {
        url:'https://www.istore.kg/media/products/jet-black-matte-1.webp',
        model:'AirPods Pro by Switch',
        price:'290'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-Pro-1.webp',
        model:'AirPods Pro',
        price:'225'
    },
    {
        url:'https://www.istore.kg/media/products/MME73_AV2.webp',
        model:'AirPods 3 with Wireless Charging Case',
        price:'200'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-Wireless-1.webp',
        model:'AirPods 2 with Wireless Charging Case',
        price:'170'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-1.webp',
        model:'AirPods 2 with Charging Case',
        price:'140'
    },
    {
        url:'https://www.istore.kg/media/products/case-airpods-pro.webp',
        model:'Case AirPods Pro',
        price:'120'
    },
    {
        url:'https://www.istore.kg/media/products/case-airpods-3.webp',
        model:'Case AirPods 3',
        price:'100'
    },
    {
        url:'https://www.istore.kg/media/products/Case-AirPods-2.webp',
        model:'Case AirPods 2',
        price:'50'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-Pro-Right.webp',
        model:'AirPods Pro (R)',
        price:'100'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-Pro-Left.webp',
        model:'AirPods Pro (L)',
        price:'100'
    },
    {
        url:'https://www.istore.kg/media/products/airpods-3-right.webp',
        model:'AirPods 3 (R)',
        price:'80'
    },
    {
        url:'https://www.istore.kg/media/products/airpods-3-left.webp',
        model:'AirPods 3 (L)',
        price:'80'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-2-Right_76BZwS3.webp',
        model:'AirPods 2 (R)',
        price:'75'
    },
    {
        url:'https://www.istore.kg/media/products/AirPods-2-Left.webp',
        model:'AirPods 2 (L)',
        price:'75'
    }
]

window.addEventListener('load',()=>{
    if(!localStorage.getItem('data6')){
        localStorage.setItem('data6',JSON.stringify(pods))

    }else{
        const data = JSON.parse(localStorage.getItem('data6'))
        const dataWithid = data.map((item,index)=>{
            return {...item,id:index}
        })
        localStorage.setItem('data6',JSON.stringify([...dataWithid]))
        const base = JSON.parse(localStorage.getItem('data6'))
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
            <p style ='color:grey'>${model}</p>
            <p style = 'color:green'>${price}$</p>
            <button class='buy'>Buy</button>
        </div>
        `
    }).join()

    $out.innerHTML = data
}
$search.addEventListener('input', e => {
    var value = e.target.value.toUpperCase()

    const filtered = pods.filter(({model})=>model.toUpperCase().includes(value))
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
