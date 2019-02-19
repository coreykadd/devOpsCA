//contactList.tests.js

var expect = require('chai').expect;
var request = require('request');
var mongoose = require('mongoose');
var contactList = require('../public/models/contactList.model.js');

describe('Status and Connection', function(){
    it('Main Page status', function(){
        request('http://localhost:8080/', function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    // it('Database Status', function(){
    //     mongoose.connection.once('open', function(){
    //         console.log('Successfully connected to database');
    //     });
    // });
});

// describe('Database Actions', function(){
//     it('Get', function(){
//         contactList.find(function(err, data){
//             if(err)
//                 res.send(err);
    
//             console.log(data);
//             res.json(data);
//         });
//     });

//     it('Post', function(done){
//         var contact = new contactList();
//         contact.name = 'test';
//         contact.email = 'test@email.com';
//         contact.number = '0810011010';
    
//         contact.save(function(err){
//             if(err)
//                 res.send(err);
    
//             res.json({message: 'Contact Added'});
//         });
//         done();
//     });
// });