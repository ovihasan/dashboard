/* Book Overview  chart strat from here */
                        var ctx = document.getElementById("bookoverviewchart").getContext('2d');
                        var lineChart = new Chart(ctx, {
                            type: 'line',


                                    data: {
                                        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"],
                                        datasets: [{
                                            label: "This Week",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps:true,
                                            lineTension: 0, // use for chart drow straight line or remove chart point radious

                                        },
                                        {
                                            label: "This Month",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 800, 250, 1200, 55, 1300,700,1200],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0, // use for chart drow straight line or remove chart point radious
                                          },
                                         {
                                            label: "This Year",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0, // use for chart drow straight line or remove chart point radious
                                          },

                                        ]



                            },
                            options: {

                                scales: {
                                    yAxes: [{ /* Yaxis start here */
                                        ticks: {
                                            beginAtZero:false
                                        },
                                        gridLines: { /* This is use for hide Yaxis gridline from graph */
                                            color: 'rgb(233, 233, 233)',
                                        }   /* end gridlines*/

                                    }], /* Yaxis end here */
                                    xAxes:[{ /* Xaxes start from here */
                                        gridLines: { /* This is use for hide Xaxis gridline from graph */
                                            color: "rgba(0, 0, 0, 0)",
                                        }   /* end gridlines*/

                                    }]/* XAxis end here */
                                }
                            }
                        });
                 /* Revenue chart strat here */









/* New book */

                 /* Revenue chart strat from here */
                        var ctx = document.getElementById("newbookchart").getContext('2d');
                        var barChart = new Chart(ctx, {
                            type: 'line',


                                    // The data for our dataset
                                    data: {
                                        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"],
                                        datasets: [{
                                            label: "This Week",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps:true,
                                            lineTension: 0,

                                        },
                                        {
                                            label: "This Month",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 800, 250, 1200, 55, 1300,700,1200],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0,
                                          },
                                         {
                                            label: "This Year",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0,
                                          }
                                        ]



                            },
                            options: {

                                scales: {
                                    yAxes: [{ /* Yaxis start here */
                                        ticks: {
                                            beginAtZero:true
                                        },
                                        gridLines: { /* This is use for hide Yaxis gridline from graph */
                                            color: "rgba(0, 0, 0, 0)",
                                        }   /* end gridlines*/

                                    }], /* Yaxis end here */
                                    xAxes:[{ /* Xaxes start from here */
                                        gridLines: { /* This is use for hide Xaxis gridline from graph */
                                            color: "rgba(0, 0, 0, 0)",
                                        }   /* end gridlines*/

                                    }]/* XAxis end here */
                                }
                            }
                        });
                 /* Revenue chart strat here */


                 /* New Book End here */







                 /* Revenue chart strat from here */
                        var ctx = document.getElementById("oldbookchart").getContext('2d');
                        var barChart = new Chart(ctx, {
                            type: 'line',


                                    // The data for our dataset
                                    data: {
                                        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"],
                                        datasets: [{
                                            label: "This Week",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps:true,
                                            lineTension: 0,

                                        },
                                        {
                                            label: "This Month",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 800, 250, 1200, 55, 1300,700,1200],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0,
                                          },
                                         {
                                            label: "This Year",
                                            backgroundColor: 'rgb(255, 106, 92)',
                                            borderColor: 'rgb(255, 106, 92)',
                                            data: [0, 700, 300, 1000, 100, 1200, 600, 1300],
                                            fill:false,
                                            pointBorderColor: 'rgb(255, 106, 92)',
                                            pointBackgroundColor: 'rgb(255, 106, 92)',
                                            pointBorderWidth: 6,
                                            pointHoverRadius: 8,
                                            spanGaps: false,
                                            lineTension: 0,
                                          }
                                        ]



                            },
                            options: {

                                scales: {
                                    yAxes: [{ /* Yaxis start here */
                                        ticks: {
                                            beginAtZero:true
                                        },
                                        gridLines: { /* This is use for hide Yaxis gridline from graph */
                                            color: "rgba(0, 0, 0, 0)",
                                        }   /* end gridlines*/

                                    }], /* Yaxis end here */
                                    xAxes:[{ /* Xaxes start from here */
                                        gridLines: { /* This is use for hide Xaxis gridline from graph */
                                            color: "rgba(0, 0, 0, 0)",
                                        }   /* end gridlines*/

                                    }]/* XAxis end here */
                                }
                            }
                        });
                 /* Revenue chart strat here */

/* New straight line
                 var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: '#ff7044',
    backgroundColor: 'transparent',

    pointBorderColor: '#ff7044',
    pointBackgroundColor: '#ff7044',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
*/
