const macs = [
    {
        url:'https://www.istore.kg/media/category/MacBook-Pro-16-M1-MAX.webp',
        model:'MacBook Pro 16',
        price:'4100'
    },
    {
        url:'https://www.istore.kg/media/category/MacBook-Pro-14.webp',
        model:'MacBook Pro 14',
        price:'2750'
    },
    {
        url:'https://www.istore.kg/media/category/MacBook-Pro-13_zEVt9bu.webp',
        model:'MacBook Pro 13',
        price:'1400'
    },
    {
        url:'https://www.istore.kg/media/category/MacBook-Air-13-Gold.webp',
        model:'MacBook Air 13',
        price:'1300'
    },
    {
        url:'https://www.istore.kg/media/category/mac-mini_GWMu0Y7.webp',
        model:'Mac mini',
        price:'1000'
    },
    {
        url:'https://www.istore.kg/media/category/mac-studio_5FKHJUC.webp',
        model:'Mac Studio',
        price:'0.00'
    },
    {
        url:'https://www.istore.kg/media/category/studio-display.webp',
        model:'Studio Display',
        price:'0.00'
    },
]

window.addEventListener('load',()=>{
    if(!localStorage.getItem('data2')){
        localStorage.setItem('data2',JSON.stringify(macs))

    }else{
        const data = JSON.parse(localStorage.getItem('data2'))
        const dataWithid = data.map((item,index)=>{
            return {...item,id:index}
        })
        localStorage.setItem('data2',JSON.stringify([...dataWithid]))
        const base = JSON.parse(localStorage.getItem('data2'))
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
            <p>${model}</p>
            <p>Price:<b style='color:green'>${price}$</b></p>
            <button class='buy'>Buy</button>
        </div>

        `
    }).join('')
    $out.innerHTML = data

}

$search.addEventListener('input', e =>{
    var value = e.target.value.toUpperCase()

    const filtered = macs.filter(({model}) => model.toUpperCase().includes(value))

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
