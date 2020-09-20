//d3 JavaScript

//fetch("https://api.covid19api.com/summary")
//    .then((data) => data.json())
//    .then((data) => console.log(data))

const canvas = d3.select(".canva");
canvas.attr("width", "500").attr("height", "500")
const svg = canvas.append("svg")
                .attr('width', "500px")
                .attr("height", "250px")

svg.append("circle").attr("cx", "134")
                .attr("cy", "134")
                .attr("r", "50")
                .attr("fill", "none")
                .attr("stroke", "yellow")
                .attr("stroke-width", "5px")
