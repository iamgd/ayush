var moadashboardcontroller = moadashboardapp.controller('moadashboardcontroller', function($timeout, $scope, $http, $route, $window, commondata, $document, $uibModal, $rootScope) {
    $scope.heading = "Flagship projects of Ministry of Ayush";
    $rootScope.$on('nameChanged', function(event, value) {
        $scope.heading = value;
    });
    //$scope.signin=true;
    //alert("Inside moadashboard="+commondata.getMessage());

    $scope.myfunction = function($event) {
        //alert("I am here");
        $event.preventDefault();

    }
    $scope.logout = function($event) {
        $event.preventDefault();
        //alert("I am here");
        $scope.item = {};
        //var  elemParent = angular.element($document[0].querySelector('#logout'));
        //alert(JSON.stringify(elemParent));
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl: 'logout.html',
            controller: 'logoutcontroller',
            controllerAs: '$ctrl1',
            //size : 'lg',
            backdrop: 'static',
            keyboard: true,
            resolve: {
                items: function() {
                    return $scope.item;
                }
            }

        }).result.then(function(response) {}, function(error) {});
    }
    //var authenticateduser=sessionStorage['authenticateduser'];
    //if( typeof(authenticateduser)=='undefined' ) $window.location.href='htmls/outoforder.html';

    //var saveduserobject=JSON.parse(authenticateduser);

    //$scope.user={};

    //$http.get("/dhs/getuserservlet").then (function(response)
    //{
    //	$scope.user=response.data;
    //	
    //	if( saveduserobject.sessionId != $scope.user.sessionId || saveduserobject.email != $scope.user.email  ){
    //		$window.location.href='htmls/outoforder.html';
    //	}
    //	else {
    //		$scope.name=$scope.user.name;
    //		$scope.designation=$scope.user.designation;
    //	}
    //	
    //});
});

moadashboardapp.controller('logoutcontroller', function($uibModalInstance, items, $http, $window) {
    var $ctrl1 = this;
    $ctrl1.items = items;
    //alert("Inside Rollback controller."+JSON.stringify($ctrl2.items));	
    // $ctrl1.name=items.name;
    // $ctrl1.section=items.section;
    // $ctrl1.designation=items.designation;
    // $ctrl1.monthName=items.monthName;
    // $ctrl1.indentDate=items.indentDate;

    //$ctrl1.itemstobeissued=[];

    //alert("Selected Indent="+JSON.stringify(items));

    var parameter = {
        method: 'GET',
        url: '/erms/getuserservlet',
        // data : items,
        'Content-Type': 'application/json;char-set=utf-8'
    };

    $http(parameter).then(function(response) {
        $ctrl1.user = response.data;
    });



    // $ctrl2.deleteitemfromitemreceived=function($index)
    // {
    // var data1=$ctrl2.itemsreceived[$index];
    // //alert(JSON.stringify(data1));
    // $ctrl2.selected_data=data1;
    // var parameter={
    // method : 'POST',
    // url : '/erms/deleteitemfromitemreceivedtable',
    // data : data1,
    // 'Content-Type' : 'application/json;char-set=utf-8'
    // };

    // $http(parameter).then(function(response){
    // $ctrl2.message=response.data;
    // $ctrl2.itemsreceived.splice($index,1);
    // $uibModalInstance.close($ctrl2.selected_data);
    // //alert(JSON.stringify($ctrl1.itemstobeissued));
    // });
    // }

    $ctrl1.logout = function() {
        var parameter = {
            method: 'GET',
            url: '/erms/signout',
            'Content-Type': 'application/json;char-set=utf-8',
            // data : item_details
        };
        $http(parameter).then(function(response) {
            var message = response.data;
            //alert(JSON.stringify(message.result));
            $uibModalInstance.close(items);
            if (message.result == 'success') {
                $window.location.href = "/erms/redirectto";
            }
        });


    };

    $ctrl1.close = function() {
        $uibModalInstance.dismiss('cancel');
    };

});