var namdashboardcontroller = moadashboardapp.controller('namdashboardcontroller', function($scope, $http, commondata, $rootScope) {

    $scope.heading = "National Ayush Mission.";
    $scope.$watch('heading', function(newValue) {
        $scope.$emit('nameChanged', newValue);
    });

    <!--    State Dropdown       -->
    var data0 = {
        "sessionid": "90021002256"
    };

    var parameter3 = {
        method: 'POST',
        url: 'stateservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data0
    };
    $http(parameter3).then(function(response) {
        $scope.state_array0 = (response.data);
        $scope.selectedstate0 = $scope.state_array0[0];
    });
    <!-- ------------State Dropdown Over --------------------- -->
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
    var data1 = {
        'state_code': 1
    }

    var opd_data_chart = {};
    var month_array = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var data_array_2022_2023 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var data_array_2023_2024 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //var parameter2={
    //		method : 'POST',
    //        url : 'namopddataservlet',
    //        'Content-Type' : 'application/json;charset=utf-8',
    //		data : data1
    //};
    //$http(parameter2).then(function(response){
    //		var json_array_opd_data=response.data;


    try {
        var ctx = document.getElementById("opd_data_graph");
        ctx.height = 100;
        var data_opd = {
            labels: month_array,
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
                label: '2022-2023',
                data: data_array_2022_2023,
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
            }, {
                label: "2023-2024",
                data: data_array_2023_2024,
                backgroundColor: 'transparent',
                borderColor: 'rgba(40,167,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(40,167,69,0.75)',
            }]
        };

        var config = {
            type: 'line',
            data: data_opd,
            options: options_common,
            plugins: []
        };
        opd_data_chart = new Chart(ctx, config);


    } catch (error) {
        console.log(error);
    }
    //     Financial Chart         
    var financial_graph = null;
    var financial_year = ['2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
    var central_share = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var state_share = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sanctioned_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var uc_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    try {
        var config_fin = {
            type: 'bar',
            data: {
                labels: financial_year,
                datasets: [{
                        label: 'Central Share',
                        stack: 'group-1',
                        backgroundColor: "#948A54",
                        data: central_share
                    },
                    {
                        label: 'State Share',
                        stack: 'group-1',
                        backgroundColor: "#C4BD97",
                        data: state_share
                    },
                    {
                        label: 'Released Amount',
                        stack: 'group-2',
                        backgroundColor: "#FF915B",
                        data: sanctioned_array
                    },
                    {
                        label: 'UC recieved',
                        stack: 'group-3',
                        backgroundColor: "#F5A487",
                        data: uc_array
                    }

                ]
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
                        stacked: true,
                        display: true,
                        categoryPercentage: .8,
                        barPercentage: 1
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
            plugins: []
        }
        var context = document.getElementById("financial_graph");
        financial_chart = new Chart(context, config_fin);
    } catch (error) {}



    //});
    try {
        $scope.selectedstateallocation0 = function() {
            $scope.state_name0 = $scope.selectedstate0.state_name
            var data1 = {
                'state_code': $scope.selectedstate0.state_code
            }

            var parameter2 = {
                method: 'POST',
                url: 'namopddataservlet',
                'Content-Type': 'application/json;charset=utf-8',
                data: data1
            };
            $http(parameter2).then(function(response) {
                var json_array1 = response.data;
                opd_data_chart.data.datasets[0].data = json_array1[0].data;
                opd_data_chart.data.datasets[1].data = json_array1[1].data;
                opd_data_chart.update();
            });
            var parameter7 = {
                method: 'POST',
                url: 'fundallocationservlet',
                'Content-Type': 'application/json;char-set=UTF-8',
                data: data1
            };
            $http(parameter7).then(function(response) {
                var fund_data1 = response.data;
                financial_chart.data.datasets[0].data = fund_data1.central_share;
                financial_chart.data.datasets[1].data = fund_data1.state_share;
                financial_chart.data.datasets[2].data = fund_data1.sanctioned;
                financial_chart.data.datasets[3].data = fund_data1.uc;
                financial_chart.update();
            }, function(error) {
                alert(JSON.stringify(error));

            });


        }
    } catch (error) {
        console.log(error);
    }

    <!--  ----------------   -->
    <!--  No Of HWC Setup    -->	

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
                plugins: []
            }
            var ctx5 = document.getElementById("no_of_hwc");
            ctx5.height = 150;
            new Chart(ctx5, config_hwc);

        },
        function(error) {});
    <!--        ----------------------------------  -->	


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
        /*-----------------------------------------------------------------------------*/
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
        ctx_hwc_performance.height = 150;
        new Chart(ctx_hwc_performance, config3);

    });
    <!-- ---------------------------------------------------------------------------------------- -->
    <!--                   NAM Infrastructure Data 
    <!--	-----------------------------------------------------------------------	-->
    data1 = {
        sessionId: '5467906543563'
    }
    var parameter55 = {
        method: 'POST',
        url: 'infrastructureservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data1
    };
    $http(parameter55).then(function(response) {
        var json_array_infrastructure = response.data;
        var infrastructure_data = {
            labels: json_array_infrastructure.financial_year,
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
                label: "10 Beded Hospitals",
                data: json_array_infrastructure.tenbeded,
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,190,169,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(255,190,169,0.75)',
            }, {
                label: "30 Beded Hospitals",
                data: json_array_infrastructure.thirtybeded,
                backgroundColor: 'transparent',
                borderColor: 'rgba(133,58,34,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(133,58,34,0.75)',
            }, {
                label: "50 Beded Hospitals",
                data: json_array_infrastructure.fiftybeded,
                backgroundColor: 'transparent',
                borderColor: 'rgba(93,40,24,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(93,40,24,0.75)',
            }, {
                label: "Primary Healthcare Centres",
                data: json_array_infrastructure.phc,
                backgroundColor: 'transparent',
                borderColor: 'rgba(40,167,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(40,167,69,0.75)',
            }, {
                label: "Community Healthcare Centre",
                data: json_array_infrastructure.chc,
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,112,67,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(255,112,67,0.75)',
            }]
        }
        options_common.scales.yAxes[0].scaleLabel.labelString = "No. Of Health Facilities";
        //alert(JSON.stringify(options_common.scales.yAxes[0].scaleLabel.labelString)); //..scaleLabel));
        var config5 = {
            type: 'line',
            data: infrastructure_data,
            options: options_common,
            plugins: []
        }
        var ctx_infrastructure = document.getElementById("infrastructure");
        ctx_infrastructure.height = 100;
        new Chart(ctx_infrastructure, config5);

    });

    <!--   ------------------------------------------------------------------------  -->
    //var  data1={
    //	graph_part: '1'
    //}
    //var parameter99={
    //		method : 'POST',
    //		url : 'hwcoutputoutcomeservlet',
    //		'Content-Type' : 'application/json;charset=utf-8',
    //		data : data1
    //};

    //var   output_array1=[];
    //var   outcome_array1=[];
    //var   progress_array1=[];
    //var   indicator_id_array1=[];
    //var   indicator_description_array1=[];
    //$scope.table_data1=[];

    //$http(parameter99).then(function(response){
    //		var json_array=response.data;
    //		alert(JSON.stringify(json_array));
    //		output_array1=json_array.output;
    //		outcome_array1=json_array.outcome;
    //		progress_array1=json_array.progress;
    //		indicator_id_array1=json_array.indicator_id;
    //		indicator_description_array1=json_array.indicator_description;
    //		for(let i=0; i<indicator_id_array1.length; i++){
    //			 var x1=indicator_id_array1[i];
    //			 var x2=indicator_description_array1[i];
    //			 var x3={
    //				 'indicator_id': x1,
    //				 'indicator_description': x2
    //			 }
    //			 $scope.table_data1.push(x3);
    //alert("x1"+JSON.stringify($scope.table_data1));

    //		}
    //alert("output"+JSON.stringify($scope.table_data1));
    <!--     ---------Graph--------------- -->
    //var config_output_outcome1={
    //	type: 'bar',
    //	data: {
    //		labels : ['TX1','TX3','TX4'],
    //		datasets : [
    //			{
    //				label : 'Outcome',
    //				backgroundColor: "#ECA72C",
    //				data : outcome_array1
    //			},
    //			{
    //				label : 'Output',
    //				backgroundColor: "#F5C45D",
    //				data : output_array1
    //			},
    //			{
    //				label : 'Progress',
    //				backgroundColor: "#FAE5C4",
    //				data : progress_array1
    //			}
    //		]
    //	},
    //	options : {
    //		responsive : true,
    //		legend: {
    //			display: true,
    //			position : "top"
    //		},
    //		title: {
    //			display: false,
    //			text: 'Monitoring of Outcome/Output: 2023-2024'
    //		},
    //		scales: {
    //			xAxes: [{
    //				display: true,
    //				categoryPercentage: .8,
    //				barPercentage: 1
    //			}],
    //			yAxes : [{
    //				ticks : {
    //					beginAtZero : true
    //				}
    //			}]
    //		}
    //	},
    //	plugins : []
    //}
    //var context=document.getElementById("nam_output_outcome1");
    //new Chart(context,config_output_outcome1);		

    //});
    <!--         NAM Outcome Output-2                   -->

    //var  data2={
    //		graph_part: '2'
    //	}
    //	var parameter100={
    //			method : 'POST',
    //			url : 'hwcoutputoutcomeservlet',
    //			'Content-Type' : 'application/json;charset=utf-8',
    //			data : data2
    //	};

    //	var   output_array2=[];
    //	var   outcome_array2=[];
    //	var   progress_array2=[];
    //	var   indicator_id_array2=[];
    //	var   indicator_description_array2=[];
    //	$scope.table_data2=[];

    //	$http(parameter100).then(function(response){
    //			var json_array=response.data;
    //		alert(JSON.stringify(json_array));
    //			output_array2=json_array.output;
    //			outcome_array2=json_array.outcome;
    //			progress_array2=json_array.progress;
    //			indicator_id_array2=json_array.indicator_id;
    //			indicator_description_array2=json_array.indicator_description;
    //			for(let i=0; i<indicator_id_array2.length; i++){
    //				 var x1=indicator_id_array2[i];
    //				 var x2=indicator_description_array2[i];
    //				 var x3={
    //					 'indicator_id': x1,
    //					 'indicator_description': x2
    //				 }
    //				 $scope.table_data2.push(x3);
    //alert("x1"+JSON.stringify($scope.table_data1));
    //			
    //			}
    //alert("output"+JSON.stringify($scope.table_data1));
    <!--     ---------Graph--------------- -->
    //	var config_output_outcome2={
    //		type: 'bar',
    //		data: {
    //			labels : ['TX2','TX5','TX6'],
    //			datasets : [
    //				{
    //					label : 'Outcome',
    //					backgroundColor: "#ECA72C",
    //					data : outcome_array2
    //				},
    //				{
    //					label : 'Output',
    //					backgroundColor: "#F5C45D",
    //					data : output_array2
    //				},
    //				{
    //					label : 'Progress',
    //					backgroundColor: "#FAE5C4",
    //					data : progress_array2
    //				}
    //			]
    //		},
    //		options : {
    //			responsive : true,
    //   		legend: {
    //    			display: true,
    //				position : "top"
    //    		},
    //    		title: {
    //    			display: false,
    //    			text: 'Monitoring of Output/Outcome: 2023-2024'
    //    		},
    //			scales: {
    //				xAxes: [{
    //					display: true,
    //					categoryPercentage: .8,
    //					barPercentage: 1
    //				}],
    //				yAxes : [{
    //					ticks : {
    //						beginAtZero : true
    //					}
    //				}]
    //			}
    //    	},
    //		plugins : []
    //	}
    //var context=document.getElementById("nam_output_outcome2");
    //new Chart(context,config_output_outcome2);		

    //});


    <!--  ----------------------------- -->


    var data2 = {
        "sessionid": "90021002256"
    };

    var parameter3 = {
        method: 'POST',
        url: 'stateservlet',
        'Content-Type': 'application/json;charset=utf-8',
        data: data2
    };
    $http(parameter3).then(function(response) {
        $scope.state_array = (response.data);
        $scope.selectedstate = $scope.state_array[0];
    });


    /* ---------------------------------------------------------- */

    /*       Ayush Service-1   Target Achievement Section    */
    //var  data66={
    //	graph_part : '1',
    //};
    //var parameter66={
    //	method : 'POST',
    //	url : 'hwcoutputoutcomeservlet',
    //	'Content-Type' : 'application/json;charset=utf-8',
    //	data : data66
    ///};


    //$http(parameter66).then(function(response){
    //	var json_array=response.data;
    //	
    //   var graph_data={
    //			labels : ['Outcome','Output','Progress'],
    //   		datasets: [{
    //    			label: "Target",
    //    			backgroundColor: "#fb5607",
    //				//data : targets
    //    		}, {
    //    			label: "Achievement",
    //    			backgroundColor: "#ffbe0b",
    //				//data : achievements
    //    		}]
    //    	};		
    //	var ctx = document.getElementById("nam_output_outcome2");
    //ctx.height=200;
    //new Chart(ctx, {
    //    	type: 'bar',
    //    	data: {
    //			labels : labels_data,
    //    		datasets: [{
    //    			label: "Target",
    //    			backgroundColor: "#fb5607",
    //				data : targets
    //    		}, {
    //    			label: "Achievement",
    //    			backgroundColor: "#ffbe0b",
    //				data : achievements
    //    		}]
    //    	},
    //    	options: {
    //			responsive : true,
    //    		legend: {
    //    			display: true,
    //				position : "top"
    //    		},
    //    		title: {
    //    			display: false,
    //    			text: 'Monitoring of Achievement V/S Target of IEC Activities: 2023-2024'
    //    		},
    //			scales: {
    //				xAxes: [{
    //					display: true,
    //					categoryPercentage: .8,
    //					barPercentage: 1
    //				}],
    //				yAxes : [{
    //						ticks : {
    //							beginAtZero : true
    //						}
    //					}]
    //				}
    //       	}
    //      });


    //	});

    /*------------------------------------------------------------------ */
    //var financial_graph=null;
    //var financial_year=['2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020','2020-2021','2021-2022','2022-2023','2023-2024'];
    //var central_share=[0,0,0,0,0,0,0,0,0,0];
    //var state_share=[0,0,0,0,0,0,0,0,0,0];   
    //try{
    //		var config_fin={
    //		type: 'bar',
    //		data: {
    //			labels : financial_year,
    //			datasets : [
    //     			{
    //					label : 'Central Share',
    //					backgroundColor: "#ECA72C",
    //					data : central_share
    //				},
    //				{
    //					label : 'State Share',
    //					backgroundColor: "#F5C45D",
    //					data : state_share
    //				}
    //				
    //			]
    //		},
    //		options : {
    //			responsive : true,
    //    		legend: {
    //    			display: true,
    //				position : "top"
    //    		},
    //    		title: {
    //    			display: false,
    //    			text: 'Monitoring of Achievement V/S Target of IEC Activities: 2023-2024'
    //    		},
    //			scales: {
    //				xAxes: [{
    //					display: true,
    //					categoryPercentage: .8,
    //					barPercentage: 1
    //				}],
    //				yAxes : [{
    //					ticks : {
    //						beginAtZero : true
    //					}
    //				}]
    //			}
    //    	},
    //		plugins : []
    //	}
    //    var context=document.getElementById("financial_graph");
    //    financial_graph=new Chart(context,config_fin);
    //}
    //catch(error){
    //}
    //-- ------------------------------------------------- -->	
    //$scope.selectedstateallocation=function()
    //{
    //alert("Selected State="+JSON.stringify($scope.selectedstate));
    //var parameter7={
    //	method : 'POST',
    //	url : 'fundallocationservlet',
    //	'Content-Type' : 'application/json;char-set=UTF-8',
    //	data : $scope.selectedstate
    //};
    //$http(parameter7).then(function(response){
    //	 var fund_data1=response.data;
    //alert(JSON.stringify($scope.fund_table_data));
    //	<!--      -----------------------   -->
    //     financial_graph.data.datasets[0].data=fund_data1.central_share;
    //     financial_graph.data.datasets[1].data=fund_data1.state_share;
    //	 financial_graph.update();
    //	<!--  ----------------------------- -->
    //},function(error){
    //	alert(JSON.stringify(error));
    //
    //});
    //}





    //alert(JSON.stringify($scope.selectedstate));

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


});