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
router.get('/contact/:id', function (req, res) {
 
    let contact_id = req.params.id;
 
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
 
    mc.query('SELECT * FROM contacts where id=?', contact_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Todos list.' });
    });
 
});

// Add a new contact  
router.post('/contact', function (req, res) {
 
    let contact = req.body.contact;
 
    if (!contact) {
        return res.status(400).send({ error:true, message: 'Please provide contact' });
    }
 
    mc.query("INSERT INTO contacts SET ? ", { task: task }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New contact has been created successfully.' });
    });
});


	
//  Delete contact
router.delete('/contact', function (req, res) {
 
    let contact_id = req.body.contact_id;
 
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
    mc.query('DELETE FROM contacts WHERE id = ?', [contact_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Contacts has been updated successfully.' });
    });
}); 

//  Update contact with id
router.put('/contact', function (req, res) {
 
    let contact_id = req.body.contact_id;
    let contact = req.body.contact;
 
    if (!contact_id || !contact) {
        return res.status(400).send({ error: contact, message: 'Please provide contact and contact_id' });
    }
 
    mc.query("UPDATE contacts SET contact = ? WHERE id = ?", [contact, contact_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Contact has been updated successfully.' });
    });
});

module.exports = router;