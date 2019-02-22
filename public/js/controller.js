//controller.js

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',[
    '$scope',
    '$http',
    function($scope, $http){
        console.log('Hello World');

        //Getting all contacts
        var refresh = function() {
            $http.get('/api/contacts')
            .then(function(res){
                console.log('Recieved data');
                console.log(res.data.data);
                $scope.contactList = res.data.data;
                $scope.contact = {};
            });
        };

        refresh();

        //Adding a contact
        $scope.addContact = function(){
            console.log($scope.contact);
            // if($scope.contact._id !== null)
            //     $scope.contact._id = null;

            if($scope.contact.name == null) {
                alert('Please enter valid name');
                return;
            }
            else if($scope.contact.email == null) {
                alert('Please enter a valid email');
                return;
            }
            else if($scope.contact.number == null) {
                alert('Plase enter a valid number');
                return;
            }
            else {
                alert('Contact Added');
            }

            $http.post('/api/createcontact', $scope.contact)
            .then(function(res){
                console.log('Added contact');
                console.log(res);
                refresh();
            });
        };

        //Removing a contact
        $scope.remove = function(contact_id){
            console.log(contact_id);
            $http.delete('/api/deletecontact/' + contact_id)
            .then(function(res){
                console.log('deleted contact');
                console.log(res);
                refresh();
            });
        };

        //Editing a contact
        $scope.edit = function(contact_id){
            console.log(contact_id);
            $http.get('/api/contact/' + contact_id)
            .then(function(res){
                console.log('here', res.data.data);
                $scope.contact = res.data.data;
            });
        };

        //Updating a contact
        $scope.update = function(){
            console.log($scope.contact.contact_id);
            if($scope.contact.name == null) {
                alert('Please enter valid name');
                return;
            }
            else if($scope.contact.email == null) {
                alert('Please enter a valid email');
                return;
            }
            else if($scope.contact.number == null) {
                alert('Plase enter a valid number');
                return;
            }
            else {
                alert('Contact Updated');
            }

            console.log('contact: ', $scope.contact);
            $http.put('/api/updatecontact/' + $scope.contact.contact_id, $scope.contact)
            .then(function(res){
                console.log('edited contact');
                console.log(res);
                refresh();
            });
        };

        //Searching for a contact
        $scope.searchName = function(){
            $scope.contactList.forEach(contact => {
                if(contact.name == $scope.searchedName) {
                    console.log('Found Name ' + contact.name + ' ' + contact._id);
                    $http.get('/api/contacts/' + contact._id)
                    .then(function(res){
                        console.log(res.data);
                        res = [{'name': contact.name, 'email': contact.email, 'number' : contact.number}];
                        $scope.contactList = res;
                        $scope.contact = {};
                    });   
                };
                
                if($scope.searchedName == '')
                    refresh();
            });
        };

        //Sorting
        $scope.sortNameAsc = function(){
            $scope.sortOrder = '+name';
        };

        $scope.sortNameDesc = function(){
            $scope.sortOrder = '-name';
        };
    }
]);