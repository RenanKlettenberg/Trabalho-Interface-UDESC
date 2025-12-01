var options = {
    series: [{
        name: 'Ambos',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Filmes',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Séries',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        width: '100%',
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        },
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 0
    },
    yaxis: {
        stepSize: 20,
    },
    xaxis: {
        categories: ['Suspense', 'Comédia', 'Mistério', 'Romance', 'Horror', 'Terror'],
    },
    legend: {
        position: 'right',
        labels: {
            colors: '#ffffff'
        },
        markers: {
            fillColors: ['#00C8FF', '#00FF7F', '#FFA500'] // cores das bolinhas
        }
    },
};

var chart = new ApexCharts(document.querySelector("#preferencias-chart"), options);
chart.render();

function lastNDays(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        arr.push(d.getTime());
    }
    return arr.reverse();
}

const days = lastNDays(10);


var contribuicoes_options = {
    series: [{
        name: 'Nota',
        data: [
            [days[0], 8, 15],
            [days[1], 5, 25],
            [days[2], 3, 12],
            [days[3], 10, 30],
            [days[4], 6, 28],
            [days[5], 2, 30],
            [days[6], 9, 22],
            [days[7], 4, 28],
            [days[8], 7, 20],
            [days[9], 1, 18],

            [days[0], 3, 20],
            [days[1], 9, 18],
            [days[2], 6, 35],
            [days[3], 1, 25],
            [days[4], 10, 40],

            [days[5], 8, 10],
            [days[6], 4, 20],
            [days[7], 7, 25],
            [days[8], 2, 18],
            [days[9], 5, 15],

            [days[0], 6, 30],
            [days[1], 1, 22],
            [days[2], 10, 28],
            [days[3], 4, 20],
            [days[4], 8, 18]
        ]
    }],
    chart: {
        height: 275,
        width: '100%',
        type: 'bubble',
        toolbar: {
            show: false
        }, 
        zoom: {
            enabled: false
        }
    },
    fill: {
        opacity: 0.8
    },
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        max: 10
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        theme: 'dark',
    },
    colors: ["#BC5BE6"],
};

var chart2 = new ApexCharts(document.querySelector("#contribuicoes-chart"), contribuicoes_options);
chart2.render();


