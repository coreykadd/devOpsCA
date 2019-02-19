//contactList.routes.js

var contactList = require('../public/models/contactList.model.js');

module.exports = function(app){
    app.get('/contactList', function(req, res){
        console.log('Recieved get request');
    
        contactList.find(function(err, data){
            if(err)
                res.send(err);
    
            console.log(data);
            res.json(data);
        });  
    });
    
    app.post('/contactList', function(req, res){
        console.log(req.body);
    
        var contact = new contactList();
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.number = req.body.number;
    
        contact.save(function(err){
            if(err)
                res.send(err);
    
            res.json({message: 'Contact Added'});
        });
    });
    
    app.delete('/contactList/:id', function(req, res){
        var id = req.params.id;
        console.log(id);
    
        contactList.remove({
            _id: id
        }, function(err, data){
            if(err)
                res.send(err);
    
            res.json(data);
        });
    });
    
    app.get('/contactList/:id', function(req, res){
        var id = req.params.id;
        console.log(id);
    
        contactList.findOne({
            _id: id
        }, function(err, data){
            if(err)
            res.send(err);
    
            res.json(data);
        });
    });
    
    app.put('/contactList/:id', function(req, res){
        var id = req.params.id;
        console.log(req.body.name);
    
        contactList.findOne({
            _id: id
        }, function(err, contact){
            if(err)
                res.send(err);
            
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.number = req.body.number;
    
            contact.save(function(err){
                if(err)
                    res.send(err);
        
                res.json({message: 'Contact Updated'});
            });
        });
    });
};