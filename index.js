const product = document.getElementById('product-title')
const product_modal = document.getElementById('product-modal')

const company = document.getElementById('company-title')
const company_modal = document.getElementById('company-modal')

const connect = document.getElementById('connect-title')
const connect_modal = document.getElementById('connect-modal')




product.addEventListener('mouseover', (e) => {
   product_modal.style.visibility = 'visible'
   console.log(e)
})

product_modal.addEventListener('mouseover', (e) => {
   product_modal.style.visibility = 'visible'
   console.log(e)
})

product.addEventListener('mouseout', (e) => {
   product_modal.style.visibility = 'hidden'
})

product_modal.addEventListener('mouseout', (e) => {
   product_modal.style.visibility = 'hidden'
})



company.addEventListener('mouseover', (e) => {
   company_modal.style.visibility = 'visible'
   console.log(e)
})

company_modal.addEventListener('mouseover', (e) => {
   company_modal.style.visibility = 'visible'
   console.log(e)
})

company.addEventListener('mouseout', (e) => {
   company_modal.style.visibility = 'hidden'
})

company_modal.addEventListener('mouseout', (e) => {
   company_modal.style.visibility = 'hidden'
})





connect.addEventListener('mouseover', (e) => {
   connect_modal.style.visibility = 'visible'
   console.log(e)
})

connect_modal.addEventListener('mouseover', (e) => {
   connect_modal.style.visibility = 'visible'
   console.log(e)
})

connect.addEventListener('mouseout', (e) => {
   connect_modal.style.visibility = 'hidden'
})

connect_modal.addEventListener('mouseout', (e) => {
   connect_modal.style.visibility = 'hidden'
})

// mobile menu

const product_menu = document.querySelector('.product-menu-title')

const product_menu_list = document.querySelector('.product-menu-list')


product_menu.addEventListener('click', () => {
   product_menu_list.classList.toggle('hidden')
})





