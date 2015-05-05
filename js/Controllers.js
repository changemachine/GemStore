app.controller('PanelCtrl', function () {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});


// =========== ADMIN CONTROL ==============

// studentAttendance.controller('AdminCtrl', function AdminCtrl($scope, UtilitiesFactory) {
//   $scope.students = UtilitiesFactory.students;
//   $scope.UtilitiesFactory = UtilitiesFactory;
//
//   $scope.addStudent = function(studentName) {
//     student = { name: studentName, here: false };
//     $scope.students.push(student);
//   };
//
//   $scope.deleteStudent = function(student) {
//     $scope.students.splice($scope.students.indexOf(student), 1);
//   };
//
// });
