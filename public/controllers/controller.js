//controller.js

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',[
    '$scope',
    '$http',
    function($scope, $http){
        console.log('Hello World');

        //Getting all contacts
        var refresh = function() {
            $http.get('/contactList')
            .then(function(res){
                console.log('Recieved data');
                $scope.contactList = res.data;
                $scope.contact = {};
            });
        };

        refresh();

        //Adding a contact
        $scope.addContact = function(){
            console.log($scope.contact);
            if($scope.contact._id !== null)
                $scope.contact._id = null;

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

            $http.post('/contactList', $scope.contact)
            .then(function(res){
                console.log('Added contact');
                console.log(res);
                refresh();
            });
        };

        //Removing a contact
        $scope.remove = function(id){
            console.log(id);
            $http.delete('/contactList/' + id)
            .then(function(res){
                console.log('deleted contact');
                console.log(res);
                refresh();
            });
        };

        //Editing a contact
        $scope.edit = function(id){
            console.log(id);
            $http.get('/contactList/' + id)
            .then(function(res){
                $scope.contact = res.data;
            });
        };

        //Updating a contact
        $scope.update = function(){
            console.log($scope.contact._id);
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

            $http.put('/contactList/' + $scope.contact._id, $scope.contact)
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
                    $http.get('/contactList/' + contact._id)
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