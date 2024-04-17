var ayurswasthyadashboardcontroller = moadashboardapp.controller('ayurswasthyadashboardcontroller', function($scope, $http, commondata, $rootScope) {

    $scope.heading = "Ayurswatha Scholarship";
    $scope.$watch('heading', function(newValue) {
        $scope.$emit('nameChanged', newValue);
    });

    //commondata.setMessage("National Ayush Mission Project.");
    //alert("Inside namdashboard="+commondata.getMessage());
    //$rootScope.value="National Ayush Mission";
    var data1 = {
        'sessionid': '1000995643'
    };

    var parameter = {
        method: 'POST',
        url: 'yearlynoofscholarshipservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data1
    };
    $http(parameter).then(function(response) {
        //alert(JSON.stringify(response.data));

        var data2 = response.data;
        const xValues = data2.financial_year;
        new Chart("ayurgyanscholarship_progress_chart", {
            type: 'line',
            data: {
                labels: xValues,
                datasets: data2.scholarship
            },
            options: {
                legend: {
                    display: true
                }
            }
        });

    }, function(error) {});

    var data1 = {
        'financial_year': '2023-2024'
    };
    var parameter1 = {
        method: 'POST',
        url: 'ayurswasthyaperformanceindicatorservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data1
    };
    $http(parameter1).then(function(response) {
        //alert(JSON.stringify(response.data));
        var labels_data = response.data.service_code_array;
        //alert(JSON.stringify(labels_data));
        var targets = response.data.target_array;
        var achievements = response.data.achievement_array;
        $scope.performance_indicators = response.data.performance_indicator_array;

        var ctx = document.getElementById("ayurswasthya_target_achievement");
        ctx.height = 200;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels_data,
                datasets: [{
                    label: "Target",
                    backgroundColor: "#fb5607",
                    data: targets
                }, {
                    label: "Achievement",
                    backgroundColor: "#ffbe0b",
                    data: achievements
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: "top"
                },
                title: {
                    display: false,
                    text: 'Monitoring of Achievement V/S Target of IEC Activities: 2023-2024'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        categoryPercentage: .8,
                        barPercentage: 1
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }, function(error) {});


    // var parameter={
    // method : 'POST',
    // url : '/dhs/dashboarddataarray',
    // 'Content-Type' : 'application/json;charset=utf-8',
    // data : data1
    // };
    //$scope.data11=[];
    //$scope.indentstobeprocessed=55;
    //var parameter1={
    //	method : 'GET',
    //	url : '/erms/indentstobeprocessed',
    //	'Content-Type' : 'application/json;charset=utf-8',
    //};
    //$http(parameter1).then(function(response){
    //	$scope.indentstobeprocessed=(response.data).no_of_indents;
    //alert($scope.indentstobeprocessed);
    //});
    //var parameter2={
    //	method : 'GET',
    //	url : '/erms/processedindents',
    //	'Content-Type' : 'application/json;charset=utf-8'
    //};
    //$http(parameter2).then(function(response){
    //	$scope.processedindents=(response.data).no_of_indents;
    //});

    //var parameter3={
    //	method : 'GET',
    //	url : '/erms/itemsinstock',
    //	'Content-Type' : 'application/json;charset=utf-8'
    //};
    //$http(parameter3).then(function(response){
    //	$scope.itemsinstock=(response.data).itemsinstock;
    //});

    //var parameter4={
    //	method : 'GET',
    //	url : '/erms/itemsoutofstock',
    //	'Content-Type' : 'application/json;charset=utf-8'
    //};
    //$http(parameter4).then(function(response){
    //	$scope.itemsoutofstock=(response.data).itemsoutofstock;
    //});
    /* ----------------------------------------------------------------- */
    //$scope.itemCode='';
    //$scope.graph_data=[0,0,0,0,0,0,0,0,0,0,0,0];
    //$scope.labels=['JAN','FEB','MAR','APRIL','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC'];
    //$scope.series=['Consumption'];
    //$scope.options = {
    //scales: {
    //  yAxes: [
    //    {
    //      id: 'y-axis-1',
    //      type: 'linear',
    //      display: true,
    //      position: 'left'
    //    }]
    //	}
    //};
    //$scope.datasetOverride=[{ yAxisID: 'y-axis-1' }];
    //$scope.onClick=function (points, evt) {
    //console.log(points, evt);
    //};	
    //$scope.selectforgraph=function()
    //{
    //alert($scope.itemCode);
    //var parameter={
    //	method : 'POST',
    //	url :'/erms/frequentlyuseditemsstatistics',
    //	data : {'itemCode' : $scope.itemCode},
    //	'Content-Type' : 'application/json;charset=utf-8'
    //};
    //$http(parameter).then(function(response){
    //	$scope.graph_data=response.data;
    //alert(JSON.stringify($scope.graph_data));
    //});
    //}

    //var parameter5={
    //	method : 'GET',
    //	url : '/erms/outofstockitemlist',
    //	'Content-Type' : 'application/json;charset=utf-8'
    //};
    //$http(parameter5).then(function(response){
    //	$scope.itemlist=response.data;
    //});

    /*   ------The End -->   */
    //try {
    //WidgetChart 1
    //$http(parameter).then(function(response){
    //$scope.data11=response.data;
    //var ctx = document.getElementById("widgetChart199");
    //if (ctx) {
    //  ctx.height = 130;
    //  var myChart = new Chart(ctx, {
    //    type: 'line',
    //    data: {
    //      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    //      type: 'line',
    //      datasets: [{
    //        data: $scope.data11,
    //        label: 'No.of States',
    //        backgroundColor: 'rgba(255,255,255,.1)',
    //        borderColor: 'rgba(255,255,255,.55)',
    //      },]
    //    },
    //    options: {
    //      maintainAspectRatio: true,
    //      legend: {
    //        display: false
    //      },
    //      layout: {
    //        padding: {
    //          left: 0,
    //          right: 0,
    //          top: 0,
    //          bottom: 0
    //        }
    //      },
    //      responsive: true,
    //      scales: {
    //        xAxes: [{
    //          gridLines: {
    //            color: 'transparent',
    //            zeroLineColor: 'transparent'
    //          },
    //          ticks: {
    //            fontSize: 2,
    //            fontColor: 'transparent'
    //          }
    //        }],
    //        yAxes: [{
    //          display: false,
    //          ticks: {
    //            display: false,
    //          }
    //        }]
    //      },
    //      title: {
    //        display: false,
    //      },
    //      elements: {
    //        line: {
    //          borderWidth: 0
    //        },
    //        point: {
    //          radius: 0,
    //          hitRadius: 10,
    //          hoverRadius: 4
    //        }
    //      }
    //    }
    //  });
    //}
    //});  
    /* --------------------------------Second Box------------------------------------ */
    //  var ctx = document.getElementById("widgetChart299");
    //if (ctx) {
    //	ctx.height = 130;
    //	var myChart = new Chart(ctx, {
    //    type: 'line',
    //    data: {
    //      labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
    //      type: 'line',
    //      datasets: [{
    //        data: [1, 18, 9, 17, 34, 22],
    //        label: 'Districts :',
    //        backgroundColor: 'transparent',
    //        borderColor: 'rgba(255,255,255,.55)',
    //      },]
    //    },
    //    options: {
    //      maintainAspectRatio: false,
    //      legend: {
    //        display: false
    //      },
    //      responsive: true,
    //      tooltips: {
    //        mode: 'index',
    //        titleFontSize: 12,
    //        titleFontColor: '#000',
    //        bodyFontColor: '#000',
    //        backgroundColor: '#fff',
    //        titleFontFamily: 'Montserrat',
    //        bodyFontFamily: 'Montserrat',
    //        cornerRadius: 3,
    //        intersect: false,
    //      },
    //      scales: {
    //        xAxes: [{
    //          gridLines: {
    //            color: 'transparent',
    //            zeroLineColor: 'transparent'
    //          },
    //          ticks: {
    //            fontSize: 2,
    //            fontColor: 'transparent'
    //          }
    //        }],
    //        yAxes: [{
    //          display: false,
    //          ticks: {
    //            display: false,
    //          }
    //        }]
    //      },
    //      title: {
    //        display: false,
    //      },
    //      elements: {
    //        line: {
    //          tension: 0.00001,
    //          borderWidth: 1
    //        },
    //        point: {
    //          radius: 4,
    //          hitRadius: 10,
    //          hoverRadius: 4
    //        }
    //      }
    //    }
    //  });
    //}
    /*-------------------------------- Second Box End ------------------------------- */
    /*-------------------------------- Third Box Start ------------------------------ */
    //var ctx = document.getElementById("widgetChart399");
    //if (ctx) {
    //  ctx.height = 130;
    //  var myChart = new Chart(ctx, {
    //    type: 'line',
    //    data: {
    //      labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
    //      type: 'line',
    //      datasets: [{
    //        data: [65, 59, 84, 84, 51, 55],
    //        label: 'Tehsils:',
    //        backgroundColor: 'transparent',
    //        borderColor: 'rgba(255,255,255,.55)',
    //      },]
    //    },
    //    options: {
    //
    //      maintainAspectRatio: false,
    //      legend: {
    //        display: false
    //     },
    //      responsive: true,
    //      tooltips: {
    //        mode: 'index',
    //        titleFontSize: 12,
    //        titleFontColor: '#000',
    //        bodyFontColor: '#000',
    //        backgroundColor: '#fff',
    //        titleFontFamily: 'Montserrat',
    //        bodyFontFamily: 'Montserrat',
    //        cornerRadius: 3,
    //        intersect: false,
    //      },
    //      scales: {
    //        xAxes: [{
    //          gridLines: {
    //            color: 'transparent',
    //            zeroLineColor: 'transparent'
    //          },
    //          ticks: {
    //            fontSize: 2,
    //            fontColor: 'transparent'
    //          }
    //        }],
    //        yAxes: [{
    //          display: false,
    //          ticks: {
    //            display: false,
    //          }
    //        }]
    //      },
    //      title: {
    //        display: false,
    //      },
    //      elements: {
    //        line: {
    //          borderWidth: 1
    //        },
    //        point: {
    //          radius: 4,
    //          hitRadius: 10,
    //          hoverRadius: 4
    //        }
    //      }
    //    }
    //  });
    //}
    /*-------------------------------- Third Box End -------------------------------- */
    /*-------------------------------- Forth Box Start ------------------------------ */
    //var ctx = document.getElementById("widgetChart499");
    //if (ctx) {
    //  ctx.height = 115;
    //  var myChart = new Chart(ctx, {
    //    type: 'bar',
    //    data: {
    //      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2014', '2025'],
    //      datasets: [
    //        {
    //          label: "No.Of HWC",
    //          data: [78, 81, 80, 65, 58, 75, 60, 75, 65, 60, 60, 75],
    //          borderColor: "transparent",
    //          borderWidth: "0",
    //          backgroundColor: "rgba(255,255,255,.3)"
    //        }
    //      ]
    //    },
    //    options: {
    //      maintainAspectRatio: true,
    //      legend: {
    //        display: false
    //      },
    //      scales: {
    //        xAxes: [{
    //          display: false,
    //          categoryPercentage: 1,
    //          barPercentage: 0.65
    //        }],
    //        yAxes: [{
    //          display: false
    //       }]
    //      }
    //    }
    //  });
    //}
    /*-------------------------------- Forth Box End -------------------------------- */
    //}catch(error){
    //	   console.log("xxxxx");
    //  }
    /*--    --------------Recent Report chart  -------------------------------------- */
    //try{
    // Recent Report
    //const brandProduct = 'rgba(0,181,233,0.8)'
    //const brandService = 'rgba(0,173,95,0.8)'

    //var elements = 10
    //var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    //var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    //var ctx = document.getElementById("recent-rep-chart");
    //if (ctx) {
    //  ctx.height = 250;
    //  var myChart = new Chart(ctx, {
    //    type: 'line',
    //    data: {
    //      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
    //      datasets: [
    //        {
    //          label: 'Patient Treated',
    //          backgroundColor: brandService,
    //          borderColor: 'transparent',
    //          pointHoverBackgroundColor: '#fff',
    //          borderWidth: 0,
    //          data: data1
    //
    //        },
    //        {
    //          label: 'Patient Registered',
    //          backgroundColor: brandProduct,
    //          borderColor: 'transparent',
    //          pointHoverBackgroundColor: '#fff',
    //          borderWidth: 0,
    //          data: data2
    //
    //          }
    //      ]
    //  },
    //  options: {
    //			maintainAspectRatio: true,
    //			legend: {
    // 			display: false
    //			},
    //			responsive: true,
    //			scales: {
    //				xAxes: [{
    // 					gridLines: {
    //					drawOnChartArea: true,
    //		            color: '#f2f2f2'
    //          		},
    //          	ticks: {
    //            		fontFamily: "Poppins",
    //					fontSize: 12
    //	          	}
    //        }],
    //        yAxes: [{
    //          ticks: {
    //            beginAtZero: true,
    //            maxTicksLimit: 5,
    //            stepSize: 50,
    //            max: 150,
    //            fontFamily: "Poppins",
    //            fontSize: 12
    //          },
    //          gridLines: {
    //            display: true,
    //            color: '#f2f2f2'

    //          }
    //        }]
    //      },
    //      elements: {
    //        point: {
    //          radius: 0,
    //          hitRadius: 10,
    //          hoverRadius: 4,
    //          hoverBorderWidth: 3
    //        }
    //      }


    //    }
    //  });
    //}
    //}catch(error){
    //	console.log("Error occur in Recent reports");
    //}
    /*--    Sixth Chart      -- */
    //try{
    //	var ctx = document.getElementById("percent-chart");
    //	if (ctx) {
    //		ctx.height = 280;
    //		var myChart = new Chart(ctx, {
    //			type: 'doughnut',
    //			data: {
    //				datasets: [
    //					{
    //						label: "Registered Patient",
    //						data: [60, 40],
    //						backgroundColor: [
    //									'#00b5e9',
    //									'#fa4251'
    //						],
    //						hoverBackgroundColor: [
    //									'#00b5e9',
    //									'#fa4251'
    //						],
    //						borderWidth: [
    //								0, 0
    //						],
    //						hoverBorderColor: [
    //						'transparent',
    //						'transparent'
    //						]
    //					}
    //				],
    //				labels: [
    //					'Registered',
    //					'Treated'
    //				]
    //			},
    //    options: {
    //      maintainAspectRatio: false,
    //      responsive: true,
    //      cutoutPercentage: 55,
    //      animation: {
    //        animateScale: true,
    //        animateRotate: true
    //      },
    //      legend: {
    //        display: false
    //      },
    //      tooltips: {
    //        titleFontFamily: "Poppins",
    //        xPadding: 15,
    //        yPadding: 10,
    //        caretPadding: 0,
    //        bodyFontSize: 16
    //      }
    //    }
    //  });
    //}
    //}catch(error){
    //	console.log("Error has occur in chart at line no 350 in admindashboardcontroller.js");
    //}

});