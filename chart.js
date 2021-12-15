var width = 80
height = 80
margin = 0

var radius = Math.min(width, height) / 2 - margin
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width * 2.6)
    .attr("height", height * 4)
    .append("g")
    .attr("transform", "translate(" + width * 1.3 + "," + height * 1.3 + ")");

var data = { a: 3, b: 7 }

var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#27ae60", "#34495e", "#7b6888", "#6b486b", "#a05d56"])

var pie = d3.pie()
    .value(function (d) { return d.value; })
var data_ready = pie(d3.entries(data))

svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(100)
        .outerRadius(radius)
    )
    .attr('fill', function (d) { return (color(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "1px")
    .style("opacity", 0.7)
// --------------      End of donute ---------

// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 360 - margin.left - margin.right,
//     height = 230 - margin.top - margin.bottom;

// var svg = d3.select("#my_dataviz1")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("http://127.0.0.1:8080/data1.csv", function(data) {

//   var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
//     .key(function(d) { return d.brand;})
//     .entries(data);

//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, function(d) { return d.Date; }))
//     .range([ 0, width ]);
//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).ticks(5));

//   var y = d3.scaleLinear()
//     .domain([0, d3.max(data, function(d) { return +d.Totalimpressions; })])
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y));

//   var res = sumstat.map(function(d){ return d.key })
//   var color = d3.scaleOrdinal()
//     .domain(res)
//     .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

//   svg.selectAll(".line")
//       .data(sumstat)
//       .enter()
//       .append("path")
//         .attr("fill", "none")
//         .attr("stroke", function(d){ return color(d.key) })
//         .attr("stroke-width", 1.5)
//         .attr("d", function(d){
//           return d3.line()
//             .x(function(d) { return x(d.Date); })
//             .y(function(d) { return y(+d.Totalimpressions); })
//             (d.values)
//         })

// })

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ['W39 (2021-09-27)', 'W40 (2021-10-04)', 'W41 (2021-10-11)', 'W42 (2021-10-18)', 'W43 (2021-10-25)', 'W44 (2021-11-01)', 'W45 (2021-11-08)', 'W46 (2021-11-15)'],
        datasets: [{
            data: [401423, 901698, 892808, 829914, 744148, 759811, 792237, 825330],
            label: "Bosch",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [527213, 1095320, 1141990, 931458, 861679, 952623, 1425261, 1441302],
            label: "Hisense",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [4706022, 10564596, 10235323, 9131386, 10164616, 12117477, 14260998, 15177355],
            label: "LG",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [43925039, 112880839, 87979164, 24497713, 20552414, 22098084, 25728070, 27025336],
            label: "Others",
            borderColor: "#34495e",
            fill: false
        }, {
            data: [6867238, 15828743, 14976639, 13059251, 13201962, 14699828, 16881923, 17424567],
            label: "Samsung",
            borderColor: "#e67e22",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Weekly Trend – Traffic '
        }
    }
});

new Chart(document.getElementById("line-chart1"), {
    type: 'line',
    data: {
        labels: ['W39 (2021-09-27)', 'W40 (2021-10-04)', 'W41 (2021-10-11)', 'W42 (2021-10-18)', 'W43 (2021-10-25)', 'W44 (2021-11-01)', 'W45 (2021-11-08)', 'W46 (2021-11-15)'],
        datasets: [{
            data: [0.0299086, 0.024036873, 0.02325696, 0.019651434, 0.020577896, 0.022666163, 0.024493933, 0.020418499],
            label: "Bosch",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [0.035093975, 0.036398495, 0.036579129, 0.035654855, 0.035344949, 0.03490048, 0.039259476, 0.037799157],
            label: "Hisense",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [0.02669367, 0.028129235, 0.024760039, 0.02559261, 0.032057384, 0.030303585, 0.030452567, 0.029671507],
            label: "LG",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [0.009066856, 0.007291742, 0.008572564, 0.028445961, 0.03196807, 0.033561462, 0.037902493, 0.036743669],
            label: "Others",
            borderColor: "#34495e",
            fill: false
        }, {
            data: [0.030310294, 0.032392338, 0.028047081, 0.029920858, 0.035015553, 0.038347796, 0.035792427, 0.035680141],
            label: "Samsung",
            borderColor: "#e67e22",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Weekly Trend – Add to cart Rate '
        }
    }
});

//--------------
var ctx1 = $("#doughnut-chartcanvas-1");
var options = {
    responsive: true,
    title: {
        display: true,
        position: "top",
        text: "Doughnut Chart",
        fontSize: 18,
        fontColor: "#111"
    },
    legend: {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#333",
            fontSize: 16
        }
    }
};

$(function () {

    var ctx1 = $("#doughnut-chartcanvas-1");

    var data1 = {
        labels: ["match1", "match2"],
        datasets: [
            {
                label: "TeamA Score",
                data: [7, 3],
                backgroundColor: [
                    "#DEB887",
                    "#A9A9A9"
                ],
                borderColor: [
                    "#CDA776",
                    "#989898",
                ],
                borderWidth: [1, 1]
            }
        ]
    };
    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "cart value share",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });
});
