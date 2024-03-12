const express = require('express');
const routes = express.Router();

routes.get('/',(req , res) =>{
    res.render('index');
})
routes.get('/about',(req , res) =>{
    res.render('about');
})
routes.get('/account',(req , res) =>{
    res.render('account');
})
routes.get('/contact',(req , res) =>{
    res.render('contact');
})
routes.get('/cookies',(req , res) =>{
    res.render('cookies');
})
routes.get('/favourites',(req , res) =>{
    res.render('favourites');
})
routes.get('/laptops',(req , res) =>{
    res.render('laptops');
})
routes.get('/mobiles',(req , res) =>{
    res.render('mobiles');
})
routes.get('/orders',(req , res) =>{
    res.render('orders');
})
routes.get('/privacy',(req , res) =>{
    res.render('privacy');
})
routes.get('/review',(req , res) =>{
    res.render('review');
})
routes.get('/support',(req , res) =>{
    res.render('support');
})
routes.get('/tos',(req , res) =>{
    res.render('tos');
})
module.exports = routes;