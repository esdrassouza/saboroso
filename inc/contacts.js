var conn = require('./db');


module.exports = {

 render(req , res, error , success){

    res.render('contact',{
        title:'Contato - Restaurante Saboroso!',
        background:'images/img_bg_3.jpg',
        h1:'Diga um oi!',
        isHome: false,
        body: req.body,
        error,
        success
        }); 
    
    },

    save(contact){
        
       return new Promise((resolve , reject)=>{
              
        conn.query(`INSERT INTO tb_contacts(name,email,message)VALUES(?,?,?)
                    `, [
                         contact.name,
                         contact.email,
                         contact.message

                       ], (err , results) =>{
                            
                           if(err){
                               reject(err);
                           }else{
                               resolve(results);
                           }

                       });
                    });
                 }
                
            };