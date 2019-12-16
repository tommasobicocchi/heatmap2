import "chart.js";

Chart.defaults.global.defaultFontFamily = 'Comfortaa';

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
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
        ],
        borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "white",
          fontSize: 20
        }
      },
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 10,
            stepSize: 1,
            beginAtZero: true
          }
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 16,
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
        borderColor: [
        'white',
        'white',
        'white',
        'white',
        ],
        borderWidth: 5
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 20
        }
      },
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 10,
            stepSize: 1,
            beginAtZero: true
          }
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 16,
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
        '#5C6584',
        'white',
        '#00D592',
        '#8B99CB',
        ],
        borderColor: [
        '#5C6584',
        'white',
        '#00D592',
        '#8B99CB',
        ],
        borderWidth: 1
      }]
    },
    options: {
      cutoutPercentage: 85,
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 20
        }
      },
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 10,
            stepSize: 1,
            beginAtZero: true
          }
        }],
        xAxes: [{
          display: false,
          gridLines: {
            display: false ,
            color: "#FFFFFF"
          },
          ticks: {
            fontColor: "white",
            fontSize: 16,
            stepSize: 1,
            beginAtZero: true
          }
        }]
      }
    }
  })
};
