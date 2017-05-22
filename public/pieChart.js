var PieChart = function() {

  var container = document.getElementById("pieChart");

  var chart = new Highcharts.Chart({
    chart: {
      type: 'characters',
      renderTo: container
    },
    title: { //NEW
       text: "Harry Potters Gender" 
    },
    
    series: [
      {
        name: "rajini"
      }
    ]
  });

};