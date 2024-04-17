var medicinelicencesdashboardcontroller = moadashboardapp.controller('medicinelicencesdashboardcontroller', function($scope, $http, commondata, $rootScope) {

    $scope.heading = "Medicine Licences";
    $scope.$watch('heading', function(newValue) {
        $scope.$emit('nameChanged', newValue);
    });

    /*------------------------------------------------------------------- */

    var data1 = {
        'sessionId': '99XX55672988'
    };
    var parameter1 = {
        method: 'POST',
        url: 'yearlynoofmedicinelicenceservlet',
        data: data1,
        'Content-Type': 'application/json;char-set=utf-8'
    };
    $http(parameter1).then(function(response) {
        var data = response.data;
        const xValues = data.financial_year;
        new Chart("ayurveda_medicine_licences", {
            type: 'line',
            data: {
                labels: xValues,
                datasets: data.licence_data
            },
            options: {
                legend: {
                    display: true
                }
            }
        });
    }, function(error) {});

    var parameter2 = {
        method: 'POST',
        url: 'statewisenooflicencesservlet',
        data: data1,
        'Content-Type': 'application/json;char-set=utf-8'
    }

    $http(parameter2).then(function(response) {
        $scope.statewise_no_of_licences = response.data;
        //alert(JSON.stringify($scope.statewise_no_of_licences));
    }, function(error) {});
    /*         Target & Achievement bar graph                    */


    var data3 = {
        'financial_year': '2023-2024'
    };
    var parameter3 = {
        method: 'POST',
        url: 'performanceindicatorservlet',
        data: data3,
        'Content-Type': 'application/json;char-set=utf8'
    };

    $http(parameter3).then(function(response) {

        var labels_data = response.data.service_code_array;
        var targets = response.data.target_array;
        var achievements = response.data.achievement_array;
        $scope.performance_indicators = response.data.performance_indicator_array;

        var ctx = document.getElementById("target_achievement");
        ctx.height = 200;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels_data,
                datasets: [{
                    label: "Target",
                    backgroundColor: "#A5F604",
                    data: targets
                }, {
                    label: "Achievement",
                    backgroundColor: "#81B814",
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
                    text: 'Monitoring of Achievement V/S Target of Ayush Medicines: 2023-2024'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        categoryPercentage: .5,
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


    //var data = {
    //             labels: ["Red","Blue","Yellow"],
    //			datasets: [
    //						{
    //						data: [300, 50, 100],
    //						backgroundColor: ["#FF6283","#36A2EB", "#FFCC54"],
    //							hoverBackgroundColor: ["#FF6283","#36A2EB","#FFCC54"]
    //                        }
    //					]
    //};
    //var promisedDeliveryChart = new Chart(document.getElementById('medicine_licences'), {
    //				type: 'doughnut',
    //				data: data,
    //				options: {
    //						responsive: true,
    //						legend: {
    //							display: false
    //						}
    //				}
    //});
    //Chart.pluginService.register({
    //				beforeDraw: function(chart) {
    //				var width = chart.chart.width,
    //				height = chart.chart.height,
    //				ctx = chart.chart.ctx;
    //				ctx.restore();
    //				var fontSize = (height / 114).toFixed(2);
    //				ctx.font = fontSize + "em sans-serif";
    //				ctx.textBaseline = "middle";
    //				var text = "75%",
    //				textX = Math.round((width - ctx.measureText(text).width) / 2),
    //				textY = height / 2;
    //				ctx.fillText(text, textX, textY);
    //				ctx.save();
    //				}
    //});



    /*------------------------------------------------------------------- */

    //commondata.setMessage("National Ayush Mission Project.");
    //alert("Inside namdashboard="+commondata.getMessage());
    //$rootScope.value="National Ayush Mission";
    var data1 = {
        'sessionid': '1000995643'
    };
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
    //
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
    //        data: [50,60,70,80,90,44,55],
    //        label: 'No.of States',
    //        backgroundColor: 'rgba(0,255,0,.1)',
    //        borderColor: 'rgba(255,0,0,.55)',
    //      },]
    //    },
    //    options: {
    //      maintainAspectRatio: true,
    //      legend: {
    //        display: true
    //      },
    //      layout: {
    //        padding: {
    //          left: 0,
    //          right: 0,
    //          top: 0,
    //           bottom: 0
    //         }
    //       },
    //       responsive: true,
    //       scales: {
    //         xAxes: [{
    //           gridLines: {
    //             color: 'gray',
    //             zeroLineColor: 'blue'
    //           },
    //           ticks: {
    //             fontSize: 2,
    //             fontColor: 'transparent'
    //           }
    //         }],
    //         yAxes: [{
    //            display: true,
    //            ticks: {
    //              display: true,
    //            }
    //          }]
    //        },
    //        title: {
    //          display: true,
    //        },
    //        elements: {
    //          line: {
    //            borderWidth: 1
    //          },
    //          point: {
    //            radius: 5,
    //            hitRadius: 10,
    //            hoverRadius: 4
    //          }
    //        }
    //      }
    //    });
    //	}
    //}catch(error){
    //};  
    /* --------------------------------Second Box------------------------------------ */
    //try{
    //	var ctx2 = document.getElementById("ayurveda_medicine_licences");
    //	if (ctx2) {
    //    	ctx2.height = 130;
    //		var myChart2 = new Chart(ctx2, {
    //        type: 'line',
    //        data: {
    //        labels: ['20/14-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020'],
    //        datasets: [{
    //            data: [10, 18, 9, 17, 34, 22,55],
    //            label: 'Districts :',
    //            backgroundColor: 'transparent',
    //            borderColor: 'rgba(0,255,0,.55)',
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
    //		  display : true,
    //          ticks: {
    //            fontSize: 2,
    //            fontColor: 'blue',
    //			//display : true
    //          }
    //        }],
    //        yAxes: [{
    //          display: true,
    //          ticks: {
    //            display: true,
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
    //}catch(error){
    //}
    /*-------------------------------- Second Box End ------------------------------- */
    /*-------------------------------- Third Box Start ------------------------------ */
    //try{
    //var ctx3 = document.getElementById("widgetChart399");
    //if (ctx3) {
    //  ctx3.height = 130;
    //  var myChart3 = new Chart(ctx3, {
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
    //}catch(error){
    //	alert("Error");
    //}
    /*-------------------------------- Third Box End -------------------------------- */
    /*-------------------------------- Forth Box Start ------------------------------ */
    //try{
    //var ctx4 = document.getElementById("widgetChart499");
    //if (ctx4) {
    //  ctx4.height = 115;
    //  var myChart4 = new Chart(ctx4, {
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
    //   }
    /*--    --------------Recent Report chart  -------------------------------------- */
    //try{
    // Recent Report
    //const brandProduct = 'rgba(0,181,233,0.8)'
    //const brandService = 'rgba(0,173,95,0.8)'

    //var elements = 10
    //var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    //var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    //var ctx5 = document.getElementById("recent-rep-chart");
    //if (ctx5) {
    //  ctx5.height = 250;
    //  var myChart5 = new Chart(ctx5, {
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

    //        },
    //        {
    //          label: 'Patient Registered',
    //          backgroundColor: brandProduct,
    //          borderColor: 'transparent',
    //          pointHoverBackgroundColor: '#fff',
    //          borderWidth: 0,
    //          data: data2

    //        }
    //      ]
    //    },
    //    options: {
    //      maintainAspectRatio: true,
    //      legend: {
    //        display: false
    //      },
    //      responsive: true,
    //      scales: {
    //        xAxes: [{
    //          gridLines: {
    //            drawOnChartArea: true,
    //            color: '#f2f2f2'
    //          },
    //          ticks: {
    //            fontFamily: "Poppins",
    //            fontSize: 12
    //          }
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
    //     animation: {
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