(function(){
  var app = angular.module('gemStore', ['ui.router']);

  app.controller('StoreController', function(){ // ===================
    this.products = [
      { name: 'Crystal Bunny',
        price: 2.88,
        descrip: 'If you only have one it is lonely.',
        spec: 'None yet',
        reviews: [
          { stars: 4,
            comment: 'so good.',
            author: "Ham",
          },
          { stars: 1,
            comment: 'not good.',
            author: "Jemma",
          },
          { stars: 5,
            comment: 'Pretty good.',
            author: "Jethro",
          },
          { stars: 5,
            comment: 'It is good.',
            author: "Jem-guy",
          },
        ],
        images: [
          { full: 'images/x-bunny.png',
            thumb: 'images/x-bunny-th.jpg'}
        ],
        canBuy: true,
        soldOut: false,
      },
      { name: "Gem of Solitude",
        price: 3.334,
        descrip: "I am describing the rock.",
        spec: 'None yet',
        reviews: [
          { stars: 3,
            comment: 'so good.',
            author: "Jemma",
          },
          { stars: 5,
            comment: 'Pretty good.',
            author: "Jethro",
          },
          { stars: 9,
            comment: 'It is good.',
            author: "Jem-guy",
          },
        ],
        images: [
        { full: 'images/x-of-solitude.png',
          thumb: 'images/x-of-solitude-th.jpg'}
        ],
        canBuy: true,
        soldOut: false,
      },
      { name: 'Meth?',
        price: 297.00,
        descrip: "It's a nice hue of blue.",
        spec: 'None yet',
        reviews: [
          { stars: 3,
            comment: 'so good.',
            author: "Jemma",
          },
          { stars: 5,
            comment: 'Pretty good.',
            author: "Jethro",
          },
          { stars: 9,
            comment: 'It is good.',
            author: "Jem-guy",
          },
        ],
        images: [
        { full: 'images/x-blue.jpg',
          thumb: 'images/x-blue-th.jpg'}],
          canBuy: true,
          soldOut: false,
      },
      { name: 'Phil the Rock',
        price: 0.08,
        descrip: "This thing was made for show-n-tell!  Literally.",
        spec: 'None yet',
        reviews: [
          { stars: 3,
            comment: 'so good.',
            author: "Jemma",
          },
          { stars: 5,
            comment: 'Pretty good.',
            author: "Jethro",
          },
          { stars: 9,
            comment: 'It is good.',
            author: "Jem-guy",
          },
        ],
        images: [
          { full: 'images/x-skull.png',
            thumb: 'images/x-skull-th.jpg'}],
        canBuy: true,
        soldOut: false,
      },
      { name: "My Precious",
        price: 1.50,
        descrip: "Pretty cheap cuz it's dented.",
        spec: 'None yet',
        reviews: [
          { stars: 4,
            comment: 'Sucks cuz it was dented.',
            author: "Durp",
          },
          { stars: 5,
            comment: 'Pretty good for dented.',
            author: "Jethro",
          },
          { stars: 9,
            comment: 'I like the dent!',
            author: "Jem-hero",
          },
        ],
        images: [
        { full: 'images/x-red.png',
          thumb: 'images/x-red-th.jpg' }],
        canBuy: true,
        soldOut: false,
      }
    ];

  });

  app.controller('PanelCtrl', function() { //=======================
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });



  app.controller('RatingCtrl', function($scope) {
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      // console.log('Rating selected = ' + rating);
    };

    // ==TRYING TO PREVENT BACKGROUND SCROLLING WITH MODAL WINDOWS
    $('.modalDialog').bind('touchstart', function(event) {
      event.preventDefault();
      return;
    });

  });

  app.directive('starRating', function() {
		return {
			restrict : 'A', //'A' = <div starrating>, 'E' = <starrating>, 'C' = <div class="starrating">
			template : '<ul class="rating">' + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' + '<i class="fa fa-star"></i>' + '</li>' + '</ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};

				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};

				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
);



  // http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

  // app.controller("RatingCtrl", function($scope) {
  //   $scope.rating1 = 5;
  //   $scope.rating2 = 2;
  //   $scope.isReadonly = true;
  //   $scope.rateFunction = function(rating) {
  //     console.log("Rating selected: " + rating);
  //   };
  // });
  //
  // app.directive("starRating", function() {
  //   return {
  //     restrict : "EA",
  //     template : "<ul class='rating' ng-class='{readonly: readonly}'>" +
  //                "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
  //                "    <i class='fa fa-star'></i>" + //&#9733
  //                "  </li>" +
  //                "</ul>",
  //     scope : {
  //       ratingValue : "=ngModel",
  //       max : "=?", //optional: default is 5
  //       onRatingSelected : "&?",
  //       readonly: "=?"
  //     },
  //
  //     link : function(scope, elem, attrs) {
  //       if (scope.max === undefined) { scope.max = 5; }
  //       function updateStars() {
  //         scope.stars = [];
  //         for (var i = 0; i < scope.max; i++) {
  //           scope.stars.push({
  //             filled : i < scope.ratingValue
  //           });
  //         }
  //       }
  //
  //       scope.toggle = function(index) {
  //         if (scope.readonly === undefined || scope.readonly === false){
  //           scope.ratingValue = index + 1;
  //           scope.onRatingSelected({
  //             rating: index + 1
  //           });
  //         }
  //       };
  //       scope.$watch("ratingValue", function(oldVal, newVal) {
  //         if (newVal) { updateStars(); }
  //       });
  //     }
  //   };
  // });









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

...

});*/
