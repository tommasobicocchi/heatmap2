import "chart.js";


const barChart = (headers, data) => {
  var ctx = document.getElementById('barChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: '# of Votes',
        data: data,
        // chart.js gets data as an array!
        backgroundColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};

                // v pass data as a string here
const lineChart = () => {
var ctx = document.getElementById('lineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      // these are the headers
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        // chart.js gets data as an array!
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};

const doughnutChart = () => {
var ctx = document.getElementById('doughnutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      // these are the headers
      datasets: [{
        label: '# of Votes',
        data: [500, 431, 356, 600, 345, 211],
        // chart.js gets data as an array!
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};


export { barChart, lineChart, doughnutChart }
