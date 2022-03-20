const product = document.getElementById('product-title')
const product_modal = document.getElementById('product-modal')

const company = document.getElementById('company-title')
const company_modal = document.getElementById('company-modal')

const connect = document.getElementById('connect-title')
const connect_modal = document.getElementById('connect-modal')




product.addEventListener('mouseover', (e) => {
   product_modal.style.display = 'block'
   
})

product_modal.addEventListener('mouseover', (e) => {
   product_modal.style.display = 'block'
})

product.addEventListener('mouseout', (e) => {
   product_modal.style.display = 'none'
})

product_modal.addEventListener('mouseout', () => {
   product_modal.style.display = 'none'
})



company.addEventListener('mouseover', () => {
   company_modal.style.display = 'block'
   
})

company_modal.addEventListener('mouseover', () => {
   company_modal.style.display = 'block'
   
})

company.addEventListener('mouseout', () => {
   company_modal.style.display = 'none'
})

company_modal.addEventListener('mouseout', () => {
   company_modal.style.display = 'none'
})





connect.addEventListener('mouseover', () => {
   connect_modal.style.display = 'block'
   
})

connect_modal.addEventListener('mouseover', () => {
   connect_modal.style.display = 'block'
  
})

connect.addEventListener('mouseout', () => {
   connect_modal.style.display = 'none'
})

connect_modal.addEventListener('mouseout', () => {
   connect_modal.style.display = 'none'
})

// mobile menu

const product_menu = document.querySelector('.product-menu-title')
const product_menu_list = document.querySelector('.product-menu-list')
const company_menu = document.querySelector('.company-menu-title')
const company_menu_list = document.querySelector('.company-menu-list')

const connect_menu = document.querySelector('.connect-menu-title')
const connect_menu_list = document.querySelector('.connect-menu-list')



product_menu.addEventListener('click', () => {
   product_menu_list.classList.toggle('hidden')
   company_menu_list.classList.add('hidden')
   connect_menu_list.classList.add('hidden')
})
company_menu.addEventListener('click', () => {
   company_menu_list.classList.toggle('hidden')
   product.classList.add('hidden')
   connect_menu_list.classList.add('hidden')
})
connect_menu.addEventListener('click', () => {
   connect_menu_list.classList.toggle('hidden')
   company_menu_list.classList.add('hidden')
   product.classList.add('hidden')
})




menu_button = document.getElementById('menu-icon')
close_button = document.getElementById('menu-close')
menu = document.getElementById('mobile-menu')

menu_button.addEventListener('click', () => {
   menu.classList.remove('hidden')
   menu_button.classList.add('hidden')
   close_button.classList.remove('hidden')
})

close_button.addEventListener('click', () => {
   menu.classList.add('hidden')
   menu_button.classList.remove('hidden')
   close_button.classList.add('hidden')
})