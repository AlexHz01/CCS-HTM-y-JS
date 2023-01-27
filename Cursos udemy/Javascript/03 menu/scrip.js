
const menuToggle= document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

menuToggle.onclick= function(){
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list')

function activarLink(){
    list.forEach((link) => link.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((link) => link.addEventListener('click', activarLink))