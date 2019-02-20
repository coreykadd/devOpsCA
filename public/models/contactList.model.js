'user strict';
var sql = require('./db.js');

//Contact object constructor
var Contact = function(contact){
    this.name = contact.name;
    this.email = contact.email;
    this.number = contact.number;
};
Contact.createContact = function createUser(newContact, result) {    
        sql.query("INSERT INTO contacts set ?", newContact, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Contact.getContactById = function createUser(contact_id, result) {
        sql.query("Select contact from contacts where id = ? ", contact_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact.getAllTask = function getAllTask(result) {
        sql.query("Select * from contacts", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
Contact.updateById = function(id, task, result){
  sql.query("UPDATE contacts SET contact = ? WHERE id = ?", [contact, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact.remove = function(id, result){
     sql.query("DELETE FROM contacts WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports = Contact;