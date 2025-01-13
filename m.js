google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Define the DataTable
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task");
  data.addColumn("number", "Hours per Day");
  data.addRows([
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  // Define chart options
  var options = {
    pieHole: 0.4,
    height: 400,
    width: 600,
  };

  // Create and draw the chart
  var chart = new google.visualization.PieChart(
    document.getElementById("donut_chart")
  );
  chart.draw(data, options);
}
