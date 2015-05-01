studentAttendance.controller('StudentsCtrl', function StudentsCtrl($scope, UtilitiesFactory) {
  $scope.students = UtilitiesFactory.students;
  $scope.UtilitiesFactory = UtilitiesFactory;
});


// =========== ADMIN CONTROL ==============

studentAttendance.controller('AdminCtrl', function AdminCtrl($scope, UtilitiesFactory) {
  $scope.students = UtilitiesFactory.students;
  $scope.UtilitiesFactory = UtilitiesFactory;

  $scope.addStudent = function(studentName) {
    student = { name: studentName, here: false };
    $scope.students.push(student);
  };

  $scope.deleteStudent = function(student) {
    $scope.students.splice($scope.students.indexOf(student), 1);
  };

});
