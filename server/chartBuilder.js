async function fetchData(url) {
    try {
        const response = await fetch(url);
        response.json().then(data => {
            console.log(data);
            createChart(data);
        });
    } catch (err) {
        console.log('fetch failed', err);
    }
}

function createChart(data) {

    let {line, bar} = data;

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

    var chartData = {
        labels: line.map(x => "Label: " + x) ,
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: window.chartColors.blue,
            borderWidth: 2,
            fill: false,
            data: line
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: window.chartColors.red,
            data: bar
            ,
            borderColor: 'white',
            borderWidth: 2
        },]

    };

    window.onload = function () {
        var ctx = document.getElementById('pyChart').getContext('2d');
        window.myMixedChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Combo Bar Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            }
        });
    };

}

fetchData("./result.json")
