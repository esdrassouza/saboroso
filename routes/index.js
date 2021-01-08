var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var reservation = require('./../inc/reservations');
var contact = require('./../inc/contacts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results => {
   
   res.render('index',
              { title: 'Restaurante Saboroso!',
                menus:results,
                isHome: true
              });
         });
    });

router.get('/contacts',(req , res, nex)=>{
  contact.render(req, res);
});
router.post('/contacts',(req , res, nex)=>{
           
        if(!req.body.name){
              contact.render(req , res , "Digite seu nome!");
           }else if(!req.body.email){
             contact.render(req , res, "Digite o E-Mail!");
           }else if(!req.body.message){
             contact.render(req,res,"Digite a mensagem!");
           }else{

             contact.save(req.body).then(results =>{
                 req.body = {};
                 contact.render(req , res , null ,"Mensagem foi enviada com sucesso!");
             }).catch(err =>{
               contact.render(req, res, err.message);
             });
      }
});

router.get('/menus', (req, res, next)=>{
  menus.getMenus().then(results =>{
      res.render('menu',{
         title:'Menus - Restaurante Saboroso!',
         background:'images/img_bg_1.jpg',
         h1:'Saboreie nosso menu!',
         menus:results,
         isHome: false
        });
     });
  });

router.get('/reservations', (req, res, next) =>{
 
  reservation.render(req, res);

});
router.post('/reservations', (req, res, next) =>{
  
  if(!req.body.name){
      reservation.render(req, res ,"Digite o nome!");
  }else if(!req.body.email){
    reservation.render(req, res ,"Digite o E-Mail!");
  }
  else if(!req.body.people){
    reservation.render(req, res ,"Selecione o número de pessoas!");
  }
  else if(!req.body.date){
    reservation.render(req, res ,"Selecione uma data!");
  }else if(!req.body.time){
    reservation.render(req, res ,"Selecione um horário");
  }else{
    reservation.save(req.body).then(results =>{
        req.bady = {};
        reservation.render(req, res, null, "Reserva realizada com sucesso!");
    }).catch(err =>{
      reservation.render(req, res ,err.message);
    });
  }
 });


router.get('/services' , function(req , res, next){
   res.render('services',{
                          title:'Serviços - Restaurante Saboroso!',
                          background:'images/img_bg_1.jpg',
                          h1:'É um prazer poder servir!',
                          isHome: false
                           });
});


module.exports = router;
