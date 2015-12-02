(function(){
  var app = angular.module('gemStore', ['ui.router']);

  app.service('ProductSvc', function($rootScope){
    var avgRating = 0;
    var totalStars = 0;
    var products = {
      gems: [
        // TODO: is specs an array or an object?
          { name: "100% Gem",
            price: 3.334,
            descrip: "I am describing the rock.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 3,
            reviews: [
              { stars: 5,
                comment: 'so good!',
                author: "Jemma",
              },
              { stars: 3,
                comment: 'Pretty good.',
                author: "Jethro",
              },
              { stars: 3,
                comment: 'It is good.',
                author: "Jem-guy",
              },
            ],
            images: [
              { full: 'images/x-of-solitude.jpg',
                thumb: 'images/x-of-solitude-th.jpg'
              }
            ],
            canBuy: true,
            soldOut: false,
          },
          { name: 'Crystal Bunny',
            price: 2.88,
            descrip: 'If you only have one it is lonely.',
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 4,
            reviews: [
              { stars: 4,
                comment: 'so good.',
                author: "Ham",
              },
              { stars: 1,
                comment: 'not good.',
                author: "Jemma",
              },
              { stars: 4,
                comment: 'Pretty good.',
                author: "Jethro",
              },
              { stars: 5,
                comment: 'It is good.',
                author: "Jem-guy",
              },
              { stars: 4,
                comment: 'so good.',
                author: "Ham",
              },
              { stars: 1,
                comment: 'not good.',
                author: "Jemma",
              },
              { stars: 3,
                comment: 'Pretty good.',
                author: "Jethro",
              },
              { stars: 5,
                comment: 'It is good.',
                author: "Jem-guy",
              },
            ],
            images: [
              { full: 'images/x-bunny.jpg',
                thumb: 'images/x-bunny-th.jpg'}
            ],
            canBuy: true,
            soldOut: false,
          },
          { name: 'Meth?',
            price: 297.00,
            descrip: "It's a pretty blue.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 0,
            reviews: [
              { stars: 1,
                comment: "Now i don't any teeth.",
                author: "Jemma",
              },
              { stars: 3,
                comment: 'Pretty good.',
                author: "Jethro",
              },
              { stars: 5,
                comment: 'so good meth.',
                author: "Jem-guy",
              },
            ],
            images: [
              { full: 'images/x-blue.jpg',
                thumb: 'images/x-blue-th.jpg'}],
            canBuy: true,
            soldOut: false,
          },
          { name: 'Crystal Skull Head',
            price: 0.08,
            descrip: 'Haunted. Great conversation piece',
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 0,
            reviews: [
              { stars: 3,
                comment: 'so good.',
                author: "Jemma",
              },
              { stars: 5,
                comment: 'Pretty good.',
                author: "Jethro",
              },
              { stars: 3,
                comment: 'It is good.',
                author: "Jem-guy",
              },
            ],
            images: [
              { full: 'images/x-skull.jpg',
                thumb: 'images/x-skull-th.jpg'}],
            canBuy: true,
            soldOut: false,
          },
          { name: "The Crystal Radish",
            price: 1.50,
            descrip: "Pretty cheap cuz it's dented.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 0,
            reviews: [
              { stars: 3,
                comment: 'Sucks cuz it was dented.',
                author: "Durp",
              },
              { stars: 5,
                comment: 'Pretty good for dented.',
                author: "Jethro",
              },
              { stars: 5,
                comment: 'I like the dent!',
                author: "Jem-hero",
              },
            ],
            images: [
              { full: 'images/x-red.jpg',
                thumb: 'images/x-red-th.jpg' }],
            canBuy: true,
            soldOut: false,
          },
          { name: "God of Thunder",
            price: 3.50,
            descrip: "Ultra-low price for a god.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 0,
            reviews: [
              { stars: 3,
                comment: 'Got the wrong one.',
                author: "Durp",
              },
              { stars: 5,
                comment: 'Pretty goddy.',
                author: "Hambone",
              },
              { stars: 4,
                comment: 'Cute hat!',
                author: "XtalHawg",
              },
            ],
            images: [
              { full: 'images/viking.jpg',
                thumb: 'images/viking_th.jpg' }],
            canBuy: true,
            soldOut: false,
          },
          { name: "Black Bull",
            price: 3.52,
            descrip: "High quality glass.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 0,
            reviews: [
              { stars: 4,
                comment: 'Goood stuuuff!!.',
                author: "Durp",
              },
              { stars: 3,
                comment: 'Pretty neat.',
                author: "Hambone",
              },
              { stars: 2,
                comment: 'Too realistic!',
                author: "XtalHawg",
              },
            ],
            images: [
              { full: 'images/bull.jpg',
                thumb: 'images/bull_th.jpg' }],
            canBuy: true,
            soldOut: false,
          },
          { name: "Creepy Spider",
            price: 0.50,
            descrip: "Ultra-low price for a spider.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 2,
            reviews: [
              { stars: 1,
                comment: 'Got scared.',
                author: "Durp",
              },
              { stars: 2,
                comment: 'Pretty scary.',
                author: "Hambone",
              },
              { stars: 1,
                comment: 'I hate spiders.',
                author: "Ronson",
              },
              { stars: 5,
                comment: 'What a cute spider hat!',
                author: "XtalHawg",
              },
            ],
            images: [
              { full: 'images/spider.jpg',
                thumb: 'images/spider_th.jpg' }],
            canBuy: true,
            soldOut: false,
          },
          { name: "Golden Pineapple",
            price: 13000.50,
            descrip: "Don't eat this pineapple!  It's glass and gold!.",
            specs: [{
              color: 'red',
              hardness: 0,
              size: 'lg',
            }],
            avgRating: 1,
            reviews: [
              { stars: 1,
                comment: 'Too expensive but i bought it.',
                author: "Durp",
              },
              { stars: 5,
                comment: 'Handsome.',
                author: "Hambone",
              },
              { stars: 4,
                comment: "Well I'll be!",
                author: "XtalHawg",
              },
            ],
            images: [
              { full: 'images/pineapple.jpg',
                thumb: 'images/pineapple_th.jpg' }],
            canBuy: true,
            soldOut: false,
          }
      ],

      rateItem : function(item){
        /* RATE IT link opens new modal: name, comment, stars)
        */
        alert('One good day you too will be able to rate products.');
        //ngClick star = function(item, rating)
        //item.reviews.push({ stars: 0, comment: '', author: 'Jimbo' });
        //calcAverage();
        //$rootScope.$broadcast('products.update');
      },
      calcAverage : function(product) {
        totalStars = 0;
        product.reviews.forEach(
          function(review){
            totalStars += review.stars;
        });
        averageRating = Math.round(100*(totalStars/product.reviews.length))/100;
        product.avgRating = averageRating;
        return averageRating;
      },


    };
    return products;
  });

  app.controller('StoreController', function($scope, ProductSvc){
    this.products = ProductSvc;
      /*{  gems: [ migrated to ProductSvc]};*/
  }); // STORE

  app.controller('PanelCtrl', function() { //=======================
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });


//== STAR STUFF ============================================================
  app.controller('StarControl', function($scope, ProductSvc) {
    $scope.products = ProductSvc;
    $scope.currentProduct = {};
    $scope.avgRating = 1;

    $scope.rating = 1;
    $scope.rateFunction = function(rating) {
      //angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html
    };
  });

  app.directive('starDir', function(ProductSvc) {
      /* SCOPE IN DIRECTIVES
        - Default (scope:false) == parent scope.
        - Transclude:true and scope:true == NEW (child) scope.
        - Scope:{...} creates an "isolate" scope (no inheritance) */
		return {
			restrict : 'E',
			template :
      '<ul class="rating">'+
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'+
          '<i class="fa fa-star"></i>'+
        '</li>'+
      '</ul>',
			scope : {
				ratingValue : '=', //rating-value="__" (StarControl scope)
				ratingAverage : '=',
				max : '=',
				onRatingSelected : '&' //binds to StarControl.rateFunction()
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() { //called by watch. fills stars[]
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++){
						scope.stars.push(
              { filled : i < scope.ratingValue }
            );
					}
				};

				scope.toggle = function(index){ //called by star clicks
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
	});


//== MODAL BIZ ============================================================
  app.controller('ModalControl', function($scope, $rootScope, $document, ProductSvc) {
    /* ---------------------- THIS--^ can also be written as ...
    ----------> ('ModalControl', ['$scope', function($scope) {...
    Dependency-injection in the controller method is NAME-SPECIFIC (unlike the DIRECTIVE method, in which it's POSITION-specific). ngController() calls specific providers based on the arugument [$scope, $http, etc].  The longhand protects us if minification tools alter f($scope) into f(a), etc.  We pass our dependency as a string (which never gets minied), then that is passed to f(). In the case of multiple dependencies, order would, of course need to match when passed to f() */
    // $rootScope.modalShown = false;

    $scope.toggleModal = function(product) {
      $rootScope.modalShown = !$rootScope.modalShown;
      $scope.modalProduct = product;
    };
  });

  app.directive('modalView', function($rootScope) {
    return {
      restrict: 'E',
      scope: { /* Isolates scope from parent/controller & siblings */
        show: '='  /* ==== Binds the var in show='>modalShown<' and the 'show' variable on our scope.  */
      },
      replace: true, // Replace with the template below
      transclude: true, // insert custom content inside the directive.
      link: function(scope, element, attrs) {
        scope.viewStyle = {};
        if (attrs.width)
          scope.viewStyle.width = attrs.width;
        if (attrs.height)
          scope.viewStyle.height = attrs.height;
        scope.hideModal = function() {
          $rootScope.modalShown = false;
        };
      },
      template:
        "<div class='ng-modal' ng-show='show'>"+
            "<div class='ng-modal-overlay' ng-click='hideModal()'></div>"+
          "<div class='ng-modal-view' ng-style='viewStyle'>"+
            // "<button class='ng-modal-close' ng-click='hideModal()'>X</button>"+
              "<div class='ng-modal-view-content' ng-transclude>"+
                  "----- I GET REPLACED BY <modal-view) CONTENT ------" +
              "</div>"+
          "</div>"+
        "</div>"
    };
  });


/* CARGO CULT ...
  --STAR VS FACTORY VS SERVICE VS CONTROLLER...
      -- SERVICE = function (a,b,c) {
        this.name = ...
      } // Services are singletons, allowing multiple controllers/directives affecting a singular, centralized object (unlike factories). This is how you share data between chunks of code in your application. Angular instantiates services behind the scenes (foo = new Svc). You add properties to ‘this’ and the service returns ‘this’. When you pass it into a controller, its properties become available VIA THE CONTROLLER.
      .
      -- FACTORY = function (a,b,c) {
        logicky.magicStuff(goesHere)...
        return {
          name: ...
        }
      } //Factories MUST return an object/value (Services MAY, IWC they're basically factories.).  When using a Factory you create an object, add properties to it, then return that same object. When you pass the factory to a controller, properties on the object become available in that controller VIA THE FACTORY.
      .
      -- CONTROLLERS wire services/dependencies/objects to the view via scope. They’re also good for handling complex business logic in views. A new controller will be created for each instance of a view (ie, if you navigate away from a view, and then back again - or if you have more than once instance of a certain view, a new controller will be created each time.
*/


})();
