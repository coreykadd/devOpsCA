const db = require('../db.js');
const express = require('express');
const router = express.Router();

// Retrieve all contacts 
router.get('/contacts', function (req, res) {

    db.query('SELECT * FROM contacts', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Contact list.' });
    });
});

// Retrieve contact with id 
router.get('/contact/:contact_id', function (req, res) {
 
    let contact_id = req.params.contact_id;
 
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
 
    db.query('SELECT * FROM contacts where contact_id = ?', contact_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Contacts list.' });
    });
 
});

// Add a new contact  
router.post('/createcontact', function (req, res) {
 
    let contact = req.body;
 
    if (!contact) {
        return res.status(400).send({ error:true, message: 'Please provide contact' });
    }
 
    db.query("INSERT INTO contacts set ?", contact, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New contact has been created successfully.' });
    });
});


	
//  Delete contact
router.delete('/deletecontact/:contact_id', function (req, res) {
 
    let contact_id = req.params.contact_id;
 
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
    db.query('DELETE FROM contacts WHERE contact_id = ?', contact_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Contacts has been updated successfully.' });
    });
}); 

//  Update contact with id
router.put('/updatecontact/:contact_id', function (req, res) {
 
    let contact_id = req.params.contact_id;
    let contact = req.body;

    console.log(req.body, res.body);

    if (!contact_id || !contact) {
        return res.status(400).send({ error: contact, message: 'Please provide contact and contact_id' });
    }
 
    db.query("UPDATE contacts SET name = ?, email = ?, number = ? WHERE contact_id = ?", [contact.name, contact.email, contact.number, contact_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Contact has been updated successfully.' });
    });
});

module.exports = router;