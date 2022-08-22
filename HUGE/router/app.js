import { Router } from "./router.js"

const router = new Router()
// opcional
//router.mode = 'hash'
// opcional
router.root = 'http://127.0.0.1:5500/'
router.add({name:'home', path:'/home', handler: ()=>console.log('home')})
router.add({name:'product', path:'/product/:id', handler: ()=>console.log('product id')})
router.add({name:'*', path:'/*', handler: ()=>console.log('Error')})

const activeRoutes = Array.from(document.querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
    e.preventDefault()
    router.navigate(e.target.getAttribute('route'))
}, false))