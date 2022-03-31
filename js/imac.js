const imacs = [
    {
        url:'https://www.istore.kg/media/products/8-core-blue-1_XbXq493.webp',
        model:'iMac 24" (8-CPU, 8-GPU, 16GB RAM, 1TB)',
        price:'2500',
    },
    {
        url:'https://www.istore.kg/media/products/8-core-blue-1_XbXq493.webp',
        model:'iMac 24" (8-CPU, 8-GPU, 8GB RAM, 512GB)',
        price:'2200',
    },
    {
        url:'https://www.istore.kg/media/products/8-core-blue-1_XbXq493.webp',
        model:'iMac 24" (8-CPU, 8-GPU, 8GB RAM, 256GB)',
        price:'1800',
    },
    {
        url:'https://www.istore.kg/media/products/8-core-blue-1_XbXq493.webp',
        model:'iMac 24" (8-CPU, 7-GPU, 8GB RAM, 256GB)',
        price:'1700',
    },
    
]

window.addEventListener('load',()=>{
  if(!localStorage.getItem('data4')){
      localStorage.setItem('data4',JSON.stringify(imacs))
  }else{
      const data = JSON.parse(localStorage.getItem('data4'))
      const dataWithid = data.map((item,index)=>{
          return {...item,id:index}
      })
      localStorage.setItem('data4',JSON.stringify([...dataWithid]))
      const base = JSON.parse(localStorage.getItem('data4'))
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
            <p style ='color:grey'>${model}</p>
            <p style='color:green'>${price}$</p>
            <button class='buy'>Buy</button>
          </div>

        `
    }).join()


    $out.innerHTML = data
}

$search.addEventListener('input' ,e =>{
    var value = e.target.value.toUpperCase()

    const filtered = imacs.filter(({model})=>model.toUpperCase().includes(value))
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
