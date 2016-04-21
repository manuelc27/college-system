angular.module('experiences').config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/experiences', {
            templateUrl: 'experiences/views/list-experience.client.view.html'
        }).
        when('/experiences/create', {
            templateUrl: 'experiences/views/create-experience.client.view.html'
        }).
        when('/experiences/:experienceId', {
            templateUrl: 'experiences/views/view-experience.client.view.html'
        }).
        when('/experiences/students/:courseId', {
            templateUrl: 'experiences/views/view-experience-student.client.view.html'
        }).
        when('/experiences/:experienceId/edit', {
            templateUrl: 'experiences/views/edit-experience.client.view.html'
        }).
         when('/enrollments/:enrollmentId/edit', {
            templateUrl: 'experiences/views/edit-enrollment.client.view.html'
        }).
        when('/enrollments', {
            templateUrl: 'experiences/views/list-enrollment.client.view.html'
        });
    } 
]);