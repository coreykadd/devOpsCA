//contactList.model.js

var mongoose = require('mongoose');

var contactListSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String
},
{
    collection: 'contactList'
});

module.exports = mongoose.model('contactList', contactListSchema);