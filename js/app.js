(function(){
  var app = angular.module('gemStore', ['ui.router']);  //'app' vs 'gemStore'

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.88,
    description: '...',
    canBuy: true,
    soldOut: false,
  },
  {
    name: "Pentagonizontal Gem",
    price: 3.334,
    description: "I am describing the rock.",
    canBuy: true,
    soldOut: false,
  }
  ];


})();



/*
//JS 'closure' wrap === (function(){ ... })();

//UI-ROUTER ADD
studentAttendance.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "AdminCtrl"
  });

  $stateProvider.state('sign-in', {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('admin', {
    url: "/admin",
    templateUrl: "partials/admin.html",
    controller: "AdminCtrl"
  });

  // FROM:
  // $stateProvider.state('courses.students', {
  // url: "/:courseId",
  // templateUrl: "partials/courses.students.html",
  // controller: 'StudentsCtrl'
  // });

});*/
