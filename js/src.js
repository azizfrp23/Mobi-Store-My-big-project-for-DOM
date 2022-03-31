const $email = document.querySelector('.email')
const $pass = document.querySelector('.pass')
const $btn = document.querySelector('.btn')


$btn.addEventListener('click',e =>{
    e.preventDefault()

    if($email.value === 'admin' && $pass.value === 'admin'){
        localStorage.setItem('auth','true')
        window.open('phones.html','_self')

    }else{
        localStorage.setItem('auth','false')
        $email.style.borderColor = 'red'
        $pass.style.borderColor = 'red'
        $email.value =''
        $pass.value =''
    }
})
window.addEventListener('load', ()=>{
    if(localStorage.getItem('auth')==='true'){
        window.open('phones.html','_self')

    }else{
        return
    }

})
