var express = require("express");
var router  = express.Router();

router.get("/", (req , res, next) => {
  
      res.render("admin/index");
});

router.get('/login', (req , res, next) =>{

    
        
    res.render("admin/login");
});

router.get('/users' , (req ,res, next) => {
    res.render("admin/users");
});

router.get('/menu', (req , res , next) =>{
    res.render('admin/menus');
});

router.get('/emails', (req , res , next) =>{
    res.render('admin/emails');
});

router.get('/reservations', (req, res, next) =>{
   res.render('admin/reservations');
});

router.get('/contacts' , (req , res, next) =>{
   res.render('admin/contacts');
})

module.exports = router;
