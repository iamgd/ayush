var moadashboardapp = angular.module('moadashboardapp', ['ngRoute', 'chart.js', 'ui.bootstrap']);

moadashboardapp.run(function($rootScope) {
    $rootScope.value = "Heading";
});

moadashboardapp.config(function($routeProvider) {
    $routeProvider
        .when("/startdashboard", {
            templateUrl: "resources/htmls/startdashboard.html",
            controller: "startdashboardcontroller"

        })
        .when("/namdashboard", {
            templateUrl: "resources/htmls/namdashboard.html",
            controller: "namdashboardcontroller"
        })
        .when("/medicinalplantationdashboard", {
            templateUrl: "resources/htmls/medicinalplantationdashboard.html",
            controller: "medicinalplantationdashboardcontroller"
        })
        .when("/medicinelicencesdashboard", {
            templateUrl: "resources/htmls/medicinelicencesdashboard.html",
            controller: "medicinelicencesdashboardcontroller"
        })
        .when("/yogaandidydashboard", {
            templateUrl: "resources/htmls/yogaandidydashboard.html",
            controller: "yogaandidydashboardcontroller"
        })
        .when("/iecactivitiesdashboard", {
            templateUrl: "resources/htmls/iecactivitiesdashboard.html",
            controller: "iecactivitiesdashboardcontroller"
        })
        .when("/healthinfrastructuredashboard", {
            templateUrl: "resources/htmls/healthinfrastructuredashboard.html",
            controller: "healthinfrastructuredashboardcontroller"
        })
        .when("/ayurgyanscholarshipdashboard", {
            templateUrl: "resources/htmls/ayurgyanscholarshipdashboard.html",
            controller: "ayurgyanscholarshipdashboardcontroller"
        })
        .when("/ayurswasthyadashboard", {
            templateUrl: "resources/htmls/ayurswasthyadashboard.html",
            controller: "ayurswasthyadashboardcontroller"
        })
        .when("/educationinfrastructuredashboard", {
            templateUrl: "resources/htmls/educationinfrastructuredashboard.html",
            controller: "educationinfrastructuredashboardcontroller"
        })
        .when("/medicineproductionunitdashboard", {
            templateUrl: "resources/htmls/medicineproductionunitdashboard.html",
            controller: "medicineproductionunitdashboardcontroller"
        })
        .when("/health_infrastructure", {
            templateUrl: "resources/htmls/health_infrastructure.html",
            controller: "healthinfrastructurecontroller"
        })
        .otherwise({
            redirectTo: '/startdashboard'
        });

});
moadashboardapp.service("commondata", function() {
    this.setMessage = function(data) {
        this.message = data;
    }
    this.getMessage = function() {
        return this.message;
    }
    this.setHospitalId = function(data) {
        this.hospitalId = data.hospitalId;
    }
    this.getHospitalId = function() {
        return this.hospitalId;
    }
    this.setHospitalName = function(data) {
        this.hospitalName = data.hospitalName;
    }
    this.getHospitalName = function() {
        return this.hospitalName;
    }
    this.setStateCode = function(data) {
        this.stateCode = data.stateCode;
    }
    this.getStateCode = function() {
        return this.stateCode;
    }
    this.setStateName = function(data) {
        this.stateName = data.stateName;
    }
    this.getStateName = function() {
        return this.stateName;
    }
    this.setDistrictCode = function(data) {
        this.districtCode = data.districtCode;
    }
    this.getDistrictCode = function() {
        return this.districtCode;
    }
    this.setDistrictName = function(data) {
        this.districtName = data.districtName;
    }
    this.getDistrictName = function() {
        return this.districtName;
    }
    this.setTashilCode = function(data) {
        this.tashilCode = data.tashilCode;
    }
    this.getTashilCode = function() {
        return this.tashilCode;
    }
    this.setTashilName = function(data) {
        this.tashilName = data.tashilName;
    }
    this.getTashilName = function() {
        return tashilName;
    }

    this.setEmail = function(data) {
        this.email = data.email;
    }
    this.getEmail = function() {
        return this.email;
    }
    this.setUserName = function(data) {
        this.useName = data.userName;
    }
    this.getUserName = function() {
        return this.userName;
    }
    this.setDesignation = function(data) {
        this.designation = data.designation;
    }

    this.setSessionId = function(data) {
        this.sessionId = data.sessionId;
    }
    this.getSessionId = function() {
        return this.sessionId;
    }
    this.setDepartmentId = function(data) {
        this.departmentId = data.departmentId;
    }
    this.getDepartmentId = function() {
        return this.departmentId;
    }
    this.getDepartmentName = function() {
        return this.departmentName;
    }
    this.setDepartmentName = function(data) {
        data.departmentName = data.departmentName;
    }


});