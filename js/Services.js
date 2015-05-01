studentAttendance.factory('UtilitiesFactory', function() {
  var factory = {};

  factory.students = [
      { name: "Jane Farley", here: false },
      { name: "Sally Forth", here: false },
      { name: "River Fjord", here: false },
      { name: "John Ford", here: false },
      { name: "Spanky Larsen", here: false },
      { name: "Gurgen Ratskeller", here: false },
      { name: "Minka Feldspar", here: false },
      { name: "Tran Falcon", here: false }
  ];

  // TO SHOW STUDENT BY "PRESENCE/ABSENCE"
  studentList = [];

  factory.signIn = function(student) {
    student.here = true;
    studentList.push(student);
  };

  factory.signOut = function(student) {
    student.here = false;
    studentList.splice(studentList.indexOf(student), 1);

  };
  return factory;
});

// courseRoster.factory('UtilitiesFactory', function() {
//     var factory = {};
//
//     factory.findById = function(collection, id) {
//         for (var i = 0; i < collection.length; i++) {
//             if (collection[i].id == id) {
//                 return collection[i];
//             }
//         }
//         return null;
//     };
//     return factory;
//
// });
