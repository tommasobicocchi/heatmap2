import "chart.js";

Chart.defaults.global.defaultFontFamily = 'Comfortaa';

export const bar = (element, headers, data, title) => {
  var ctx = element.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: title,
        data: data,
        // chart.js gets data as an array!
        backgroundColor: [
        '#5C6584',
        '#00D592',
        '#8B99CB',
        '#ffc966',
        '#90EE90',
        '#53b0ae',
        '#b163a3',

        ],
        borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
        ],
        borderWidth: 3
      }]
    },
    options: {
      legend: {
        display: false,
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


export const line = (element, headers, data, title) => {
  var ctx = element.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: title,
        data: data,
        // chart.js gets data as an array!
        borderColor: [
        'white',
        'white',
        'white',
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
        display: false,
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

export const doughnut = (element, headers, data, title) => {
  var ctx = element.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: headers,
      // these are the headers
      datasets: [{
        label: title,
        data: data,
        // chart.js gets data as an array!
        backgroundColor: [
        '#5C6584',
        '#00D592',
        '#8B99CB',
        '#ffc966',
        '#90EE90',
        '#53b0ae',
        '#b163a3',

        ],
        borderColor: [
        '#5C6584',
        '#00D592',
        '#8B99CB',
        '#ffc966',
        '#90EE90',
        '#53b0ae',
        '#b163a3',

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
