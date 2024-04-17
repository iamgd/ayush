var startdashboardcontroller = moadashboardapp.controller('startdashboardcontroller', function($scope, $http, commondata, $rootScope) {

    $scope.heading = "Dashboard of Ayush Portal.";
    $scope.$watch('heading', function(newValue) {
        $scope.$emit('nameChanged', newValue);
    });
    <!-- ------------- Options -------------------------------- -->
    var options_common = {
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
        },
        legend: {
            display: true,
            labels: {
                usePointStyle: true,
                fontFamily: 'Poppins'
            },
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                },
                ticks: {
                    fontFamily: "Poppins"
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'No. of Patients',
                    fontFamily: "Poppins"
                },
                ticks: {
                    fontFamily: "Poppins"
                }
            }]
        },
        title: {
            display: true,
            text: ' '
        }
    }
    <!--  ----------------------------------------------------- -->
    <!--  Number of HWC  ----->
    var data1 = {
        'sessionid': '1000995643'
    };
    var parameter1 = {
        method: 'POST',
        url: 'noofhwcservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data1
    };
    var financial_year_array1 = [];
    var no_of_hwc_array1 = []
    var total = 0;
    $http(parameter1).then(function(response) {
            var json_array1 = response.data;
            for (let i = 0; i < json_array1.length; i++) {
                var json_object = json_array1[i];
                financial_year_array1.push(json_object.financial_year);
                no_of_hwc_array1.push(json_object.no_of_hwc);
                total = total + json_object.no_of_hwc
            }
            $scope.total_hwc = total;
            $scope.data = no_of_hwc_array1;
            $scope.labels = financial_year_array1;
            var hwc_data = {
                labels: financial_year_array1,
                datasets: [{
                    data: no_of_hwc_array1,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(90, 162, 235)',
                        'rgb(120, 162, 235)'

                    ]
                }]
            }
            var options_1 = {
                plugins: {
                    datalabels: {
                        formatter: (value) => {
                            return value + '%';
                        },
                    },
                },
            };
            var config_hwc = {
                type: 'doughnut',
                data: hwc_data,
                options: options_1,
                plugins: [{
                    id: 'inside_text',
                    beforeDraw: function(chart, a, b) {
                        var width = chart.width;
                        var height = chart.height;
                        var ctx = chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 200).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = "HWC : " + $scope.total_hwc;
                        var textX = Math.round((width - ctx.measureText(text).width) / 2);
                        var textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }]
            };
            var ctx5 = document.getElementById("no_of_hwc");
            ctx5.height = 200;
            new Chart(ctx5, config_hwc);

        },
        function(error) {})

    <!--  --------------    -->
    <!--  HWC Performance   -->
    var financial_year_array2 = [];
    var recurring_expenditure_array2 = [];
    var nonrecurring_expenditure_array2 = [];

    var parameter2 = {
        method: 'POST',
        url: 'performanceofhwcservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data1
    };
    $http(parameter2).then(function(response) {
        var json_array_performance = response.data;

        for (let i = 0; i < json_array_performance.length; i++) {
            var json_object = json_array_performance[i];
            financial_year_array2.push(json_object.financial_year);
            recurring_expenditure_array2.push(json_object.recurring_expenditure);
            nonrecurring_expenditure_array2.push(json_object.nonrecurring_expenditure);
        }
        var performance_data = {
            labels: financial_year_array2,
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
                label: "Recurring Expenditure",
                data: recurring_expenditure_array2,
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
            }, {
                label: "Non-Recurring",
                data: nonrecurring_expenditure_array2,
                backgroundColor: 'transparent',
                borderColor: 'rgba(40,167,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(40,167,69,0.75)',
            }]
        }
        options_common.scales.yAxes[0].scaleLabel.labelString = "Expenditure";
        //alert(JSON.stringify(options_common.scales.yAxes[0].scaleLabel.labelString)); //..scaleLabel));
        var config3 = {
            type: 'line',
            data: performance_data,
            options: options_common,
            plugins: []
        }
        var ctx_hwc_performance = document.getElementById("hwc_performance");
        ctx_hwc_performance.height = 200;
        new Chart(ctx_hwc_performance, config3);

    });
    <!--  ----------------  -->
    <!-- ------ CME Chart ---------  -->
    var data1 = {
        sessionId: 'SL453987276'
    }
    var parameter_cme = {
        method: 'POST',
        url: 'noofcmeprograms',
        data: data1,
        'Content-Type': 'application/json;charset=utf-8'
    }
    $http(parameter_cme).then(function(response) {
        //alert(JSON.stringify(response.data));
        var xValues = response.data.financial_year_array;
        var yValues = response.data.cme_programs;
        var no_of_trainees = response.data.no_of_trainees;

        var barColors = response.data.color_array;
        var chart_data = {
            labels: xValues,
            datasets: [{
                    label: 'No.Of.Events',
                    backgroundColor: barColors,
                    borderColor: barColors,
                    data: yValues
                },
                {
                    label: 'No.Of.Trainees',
                    backgroundColor: barColors,
                    borderColor: barColors,
                    data: no_of_trainees
                }
            ]
        };
        var chart_options = {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Events VS Trainees under CME Scheme."
            }
        }
        var cme_chart = document.getElementById("cme_chart");
        cme_chart.height = 300;
        new Chart(cme_chart, {
            type: "bar",
            data: chart_data,
            options: chart_options
        });
    }, function(error) {});
    <!--  ----------------------------------------------------- -->
    <!--  EMR Scheme  -->
    <!-- ------ EMR Chart ---------  -->
    var parameter5 = {
        method: 'POST',
        url: 'noofemrprograms',
        data: data1,
        'Content-Type': 'application/json;charset=utf-8'
    }
    $http(parameter5).then(function(response) {
        var xValues = response.data.financial_year_array;
        var yValues = response.data.emr_programs;
        var barColors = response.data.color_array;
        var emr_chart = document.getElementById("emr_chart");
        emr_chart.height = 250;
        new Chart(emr_chart, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "No of Papers Published under EMR."
                }
            }
        });
    }, function(error) {});
    <!-- ------------- -->		
    //var data1={'sessionid': '1000995643'};
    //var parameter1={
    //	method : 'POST',
    //    url : 'noofhwcservlet',
    //   'Content-Type' : 'application/json;charset=utf-8',
    //   data : data1
    //};
    //var  financial_year_array1=[];
    //var  no_of_hwc_array1=[]
    //var  total=0;
    //$http(parameter1).then(function(response){
    //	var   json_array1=response.data;
    //	for(let i=0; i<json_array1.length; i++){
    //		var  json_object=json_array1[i];
    //		financial_year_array1.push(json_object.financial_year);
    //		no_of_hwc_array1.push(json_object.no_of_hwc);
    //		total=total+json_object.no_of_hwc
    //	}
    //	$scope.total_hwc=total;
    //	$scope.data=no_of_hwc_array1;
    //	$scope.labels=financial_year_array1;
    //},
    //function(error){
    //});


    //var financial_year_array2=[];
    //var recurring_expenditure_array2=[];
    //var nonrecurring_expenditure_array2=[];

    //var parameter2={
    //		method : 'POST',
    //        url : 'performanceofhwcservlet',
    //        'Content-Type' : 'application/json;charset=utf-8',
    //		data : data1
    //};
    //$http(parameter2).then(function(response){
    //	var json_array=response.data;
    //alert(JSON.stringify(json_array));
    //	for(let i=0;i<json_array.length; i++)
    //	{
    //		var json_object=json_array[i];
    //		financial_year_array2.push(json_object.financial_year);
    //		recurring_expenditure_array2.push(json_object.recurring_expenditure);
    //		nonrecurring_expenditure_array2.push(json_object.nonrecurring_expenditure);
    //	}
    /*-----------------------------------------------------------------------------*/
    //	try {
    //Sales chart
    //            var ctx = document.getElementById("hwc_performance");
    //            if (ctx) {
    //                       ctx.height = 200;
    //                       var myChart = new Chart(ctx, {
    //                                   type: 'line',
    //                                   data: {
    //                                   labels: financial_year_array2,
    //                                   type: 'line',
    //                                   defaultFontFamily: 'Poppins',
    //                                   datasets: [{
    //                                                label: "Medicine+Manpower",
    //                                                data: recurring_expenditure_array2,
    //												backgroundColor: 'transparent',
    //												borderColor: 'rgba(220,53,69,0.75)',
    //												borderWidth: 3,
    //                                                pointStyle: 'circle',
    //                                                pointRadius: 5,
    //                                                pointBorderColor: 'transparent',
    //                                                pointBackgroundColor: 'rgba(220,53,69,0.75)',
    //                                              }, {
    //                                                label: "Infrastructure",
    //												data: nonrecurring_expenditure_array2,
    //                                                backgroundColor: 'transparent',
    //                                                borderColor: 'rgba(40,167,69,0.75)',
    //                                                borderWidth: 3,
    //                                                pointStyle: 'circle',
    //                                                pointRadius: 5,
    //                                                pointBorderColor: 'transparent',
    //                                                pointBackgroundColor: 'rgba(40,167,69,0.75)',
    //                                            }]
    //									},
    //									options: {
    //											responsive: true,
    //											tooltips: {
    //												mode: 'index',
    //												titleFontSize: 12,
    //												titleFontColor: '#000',
    //												bodyFontColor: '#000',
    //												backgroundColor: '#fff',
    //												titleFontFamily: 'Poppins',
    //												bodyFontFamily: 'Poppins',
    //												cornerRadius: 3,
    //												intersect: false,
    //									},
    //									legend: {
    //												display: false,
    //												labels: {
    //														usePointStyle: true,
    //														fontFamily: 'Poppins',
    //												},
    //									},
    //									scales: {
    //												xAxes: [{
    //												display: true,
    //												gridLines: {
    //													display: false,
    //													drawBorder: false
    //												},
    //												scaleLabel: {
    //													display: false,
    //													labelString: 'Month'
    //												},
    //												ticks: {
    //													fontFamily: "Poppins"	
    //												}
    //												}],
    //												yAxes: [{
    //														display: true,
    //														gridLines: {
    //																display: false,
    //																drawBorder: false
    //														},
    //														scaleLabel: {
    //															display: true,
    //															labelString: 'Value',
    //															fontFamily: "Poppins"
    //
    //														},
    //														ticks: {
    //															fontFamily: "Poppins"
    //														}
    //												}]
    //									},
    //									title: {
    //										display: true,
    //										text: 'Previous V/S Current Week'
    //									}
    //						}
    //			});
    //		}
    //} catch (error) {
    //        console.log(error);
    //}	
    //}); <!--  $http end -->



    //var parameter99={
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
    //	var parameter={
    //		method : 'POST',
    //		url :'/erms/frequentlyuseditemsstatistics',
    //		data : {'itemCode' : $scope.itemCode},
    //		'Content-Type' : 'application/json;charset=utf-8'
    //	};
    //	$http(parameter).then(function(response){
    //		$scope.graph_data=response.data;
    //		//alert(JSON.stringify($scope.graph_data));
    //	});
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
    var ctx = document.getElementById("iec_performance");
    if (ctx) {
        ctx.height = 200;
        var myChart1 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023'],
                datasets: [{
                    data: [11, 37, 12, 4, 26, 32],
                    label: 'No of Events :',
                    //backgroundColor: ['#508ae6','#8cfc03','#fc039d','#03f4fc','#e64c6a','#4ce653'],
                    //borderColor: ['#508ae6','#8cfc03','#fc039d','#03f4fc','#e64c6a','#4ce653'],
                    backgroundColor: ['#508ae6', '#508ae6', '#508ae6', '#508ae6', '#508ae6', '#508ae6'],
                    borderColor: ['#508ae6', '#508ae6', '#508ae6', '#508ae6', '#508ae6', '#508ae6'],
                    borderRadius: 1,
                    //lineTension :0,
                    fill: false
                }]
            },
            options: {
                //maintainAspectRatio: false,
                legend: {
                    display: false
                },
                responsive: true,
                //tooltips: {
                //	mode: 'index',
                //	titleFontSize: 12,
                //	titleFontColor: '#000',
                //	bodyFontColor: '#000',
                //	backgroundColor: '#fff',
                //	titleFontFamily: 'Montserrat',
                //	bodyFontFamily: 'Montserrat',
                //	cornerRadius: 3,
                //	intersect: false,
                //},
                scales: {
                    xAxes: [{
                        barPercentage: 0.5
                    }]
                }
                //      gridLines: {
                //        color: 'transparent',
                //        zeroLineColor: 'transparent'
                //      },
                //      ticks: {
                //        fontSize: 2,
                //        fontColor: 'transparent'
                //      }
                //    }],
                //    yAxes: [{
                //      display: false,
                //      ticks: {
                //      display: false,
                //      }
                //    }]
                //  },
                //  title: {
                //    display: false,
                //  },
                //  elements: {
                //    line: {
                //      tension: 0.00001,
                //      borderWidth: 1
                //    },
                //    point: {
                //      radius: 4,
                //      hitRadius: 10,
                //      hoverRadius: 4
                //    }
                //  }
            }
            //plugins : [{
            //	id : 'footer1',
            //	beforeDraw : function(chart,options){
            //		ctx =chart.ctx;
            //		var height=chart.height;
            //		var width=chart.width;
            //		console.log("width="+width);
            //		ctx.restore();
            //		ctx.font="1em sans-serif";
            //		ctx.fillText("abc", width-200, height-300);
            //		ctx.save();
            //alert("Height"+height);
            //	}
            //}]
        });
    }
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
    // }
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
    //          },
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

    //              }
    //          }]
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
    //   options: {
    //      maintainAspectRatio: false,
    //      responsive: true,
    //      cutoutPercentage: 55,
    //     animation: {
    //        animateScale: true,
    //       animateRotate: true
    //     },
    //     legend: {
    //       display: false
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