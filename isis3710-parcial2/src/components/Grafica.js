import React, { useEffect } from "react";
import * as d3 from "d3";

function Grafica(props) {
  useEffect(() => {
    let habitaciones = [];
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].homeId === props.idEspacio) {
        habitaciones.push(props.data[i]);
      }
    }
    drawChart(habitaciones);
  }, [props]);

  function drawChart(data) {
    const width = 450;
    const height = 450;
    const margin = { top: height / 2, left: width / 2 };

    d3.select("#canvas").select("svg").remove();

    const canvas = d3.select("#canvas");
    const svg = canvas
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([0, data.length]);

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(200);
    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.powerUsage.value);
    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 2)
      .append("title")
      .text(
        (d) =>
          `${d.data.name}: ${d.data.powerUsage.value} ${d.data.powerUsage.unit}`
      );
  }

  return <div id="canvas"></div>;
}

export default Grafica;
