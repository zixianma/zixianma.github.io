
// Making charts showing trends of sentiments and new cases

var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}


var ctx = document.getElementById('mylinechart_1').getContext('2d');
var mylinechart_1 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [4, 2, 1, 5, 6, 7, 8],
            label: 'New cases',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#8b0000',
            borderWidth: 4,
            pointBackgroundColor: '#8b0000',
            yAxisID: "cases_axis",
        },
          {
            data: [-1, -0.5, 0, 0.2, 0.4, 0, -0.2],
            label: 'Sentiment value',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
            yAxisID: "sentiment_axis",
        },
       ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        title:{
          display:true,
          text: "Week 1 of March"
        },
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['March 1', '2', '3', '4', '5', '6', '7'],
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "cases_axis",
                scaleLabel: {
                    display: true,
                    labelString: 'New cases'
                }
            },{
                type: "linear",
                display: true,
                position: "right",
                id: "sentiment_axis",
                ticks: {
                    suggestedMin: -1,
                    suggestedMax: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Sentiment'
                }
            }]
        },
    },
});

var ctx = document.getElementById('mylinechart_2').getContext('2d');
var mylinechart_2 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [4, 2, 1, 5, 6, 7, 8],
            label: 'New cases',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#8b0000',
            borderWidth: 4,
            pointBackgroundColor: '#8b0000',
            yAxisID: "cases_axis",
        },
          {
            data: [-1, -0.5, 0, 0.2, 0.4, 0, -0.2],
            label: 'Sentiment value',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
            yAxisID: "sentiment_axis",
        },
       ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        title:{
          display:true,
          text: "Week 2 of March"
        },
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['March 8', '9', '10', '11', '12', '13', '14'],
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "cases_axis",
                scaleLabel: {
                    display: true,
                    labelString: 'New cases'
                }
            },{
                type: "linear",
                display: true,
                position: "right",
                id: "sentiment_axis",
                ticks: {
                    suggestedMin: -1,
                    suggestedMax: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Sentiment'
                }
            }]
        },
    },
});

var ctx = document.getElementById('mylinechart_3').getContext('2d');
var mylinechart_3 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [4, 2, 1, 5, 6, 7, 8],
            label: 'New cases',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#8b0000',
            borderWidth: 4,
            pointBackgroundColor: '#8b0000',
            yAxisID: "cases_axis",
        },
          {
            data: [-1, -0.5, 0, 0.2, 0.4, 0, -0.2],
            label: 'Sentiment value',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
            yAxisID: "sentiment_axis",
        },
       ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        title:{
          display:true,
          text: "Week 3 of March"
        },
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['March 15', '16', '17', '18', '19', '20', '21'],
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "cases_axis",
                scaleLabel: {
                    display: true,
                    labelString: 'New cases'
                }
            },{
                type: "linear",
                display: true,
                position: "right",
                id: "sentiment_axis",
                ticks: {
                    suggestedMin: -1,
                    suggestedMax: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Sentiment'
                }
            }]
        },
    },
});

var ctx = document.getElementById('mylinechart_4').getContext('2d');
var mylinechart_4 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [4, 2, 1, 5, 6, 7, 8],
            label: 'New cases',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#8b0000',
            borderWidth: 4,
            pointBackgroundColor: '#8b0000',
            yAxisID: "cases_axis",
        },
          {
            data: [-1, -0.5, 0, 0.2, 0.4, 0, -0.2],
            label: 'Sentiment value',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
            yAxisID: "sentiment_axis",
        },
       ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        title:{
          display:true,
          text: "Week 4 of March"
        },
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['March 22', '23', '24', '25', '26', '27', '28'],
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "cases_axis",
                scaleLabel: {
                    display: true,
                    labelString: 'New cases'
                }
            },{
                type: "linear",
                display: true,
                position: "right",
                id: "sentiment_axis",
                ticks: {
                    suggestedMin: -1,
                    suggestedMax: 1
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Sentiment'
                }
            }]
        },
    },
});

var ctx = document.getElementById('myscatterchart_1').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: '(New cases, Sentiment)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointBorderColor: 'rgba(0, 0, 0, 1)',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }, {
                x: 3,
                y: 3
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'New cases'
                }
            }],
            yAxes: [{
              type: 'linear',
              position: 'left',
              scaleLabel: {
                  display: true,
                  labelString: 'Sentiment'
              }
            }]
        }
    }
});
