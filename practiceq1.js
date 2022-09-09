'use strict';
var app = angular.module("myModel",[]);

app.controller("myController",function($scope){
  var employees=[
    {name:"Ben", dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:55000,city:'london'},
    {name:"Sara", dateOfBirth:new Date("May 05,1970"),gender:"Female",salary:68000,city:'mumbai'},
    {name:"Mark", dateOfBirth:new Date("August 15,1974"),gender:"Male",salary:57000,city:'pune'},
    {name:"Pam", dateOfBirth:new Date("October 27,1981"),gender:"Male",salary:70000,city:'chennai'},
    {name:"Todd", dateOfBirth:new Date("December 3,1989"),gender:"Male",salary:45000,city:'hydrabad'}
  ];
  $scope.employees=employees;

});
