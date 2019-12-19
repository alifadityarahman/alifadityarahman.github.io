window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "STATISTIK PENGUNJUNG BERDASARKAN DAERAH",
            fontFamily: "Impact",
            fontWeight: "normal"
        },

        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        data: [{
            //startAngle: 45,
            indexLabelFontSize: 20,
            indexLabelFontFamily: "Garamond",
            indexLabelFontColor: "darkgrey",
            indexLabelLineColor: "darkgrey",
            indexLabelPlacement: "outside",
            type: "doughnut",
            showInLegend: true,
            dataPoints: [{
                    y: 853,
                    legendText: "Jawa",
                    indexLabel: "Jawa"
                },
                {
                    y: 235,
                    legendText: "Kalimantan",
                    indexLabel: "Kalimantan"
                },
                {
                    y: 270,
                    legendText: "Sumatera",
                    indexLabel: "Sumatera"
                },
                {
                    y: 221,
                    legendText: "Nusa Tenggara Barat",
                    indexLabel: "Nusa Tenggara Barat"
                },
                {
                    y: 101,
                    legendText: "Others 5%",
                    indexLabel: "Lain-lain"
                }
            ]
        }]
    });

    chart.render();
}