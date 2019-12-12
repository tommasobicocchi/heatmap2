import "chart.js";


export const bar = (element, headers, data) => {
  var ctx = element.getContext('2d');
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
                fontColor: "black",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};

export const line = (element, headers, data) => {
var ctx = element.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: '# of Votes',
        data: data,
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
                fontColor: "black",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};

export const doughnut = (element, headers, data) => {
var ctx = element.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: '# of Votes',
        data: data,
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
                fontColor: "black",
                fontSize: 12
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 12,
                    stepSize: 1,
                    beginAtZero: true
                }
        }]
      }
    }
  })
};
