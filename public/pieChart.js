var PieChart = function(data) {

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
        data.forEach( function(character) {
          // statements
        });{
        name: character.name
      }
    }
    ]

  });

};