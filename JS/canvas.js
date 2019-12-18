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
                    y: 53.37,
                    legendText: "Jawa",
                    indexLabel: "Jawa"
                },
                {
                    y: 35.0,
                    legendText: "Kalimantan",
                    indexLabel: "Kalimantan"
                },
                {
                    y: 7,
                    legendText: "Maluku",
                    indexLabel: "Maluku"
                },
                {
                    y: 2,
                    legendText: "Nusa Tenggara Barat",
                    indexLabel: "Nusa Tenggara Barat"
                },
                {
                    y: 5,
                    legendText: "Others 5%",
                    indexLabel: "Lain-lain"
                }
            ]
        }]
    });

    chart.render();
}