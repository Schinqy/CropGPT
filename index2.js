      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['pH', 3]
         
        ]);

        var options = {
          width: 1200, height: 360,
          redFrom: 0, redTo: 5,
          yellowFrom:9, yellowTo: 14,
            greenFrom:5, greenTo: 9,
          max:14,
          minorTicks: 1
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);
var a = 0;
        setInterval(function() {
          data.setValue(0, 1, a++);
          chart.draw(data, options);
		  if(a==15)
        {
	       a=0;
        }
		
		if(a>0 && a<3)
		{
			document.getElementById("status").innerHTML = "Very Acidic";
		}
		else if(a>3 && a<6)
		{
			document.getElementById("status").innerHTML = "Acidic";
		}
		else if(a>6 && a<7)
		{
			document.getElementById("status").innerHTML = "Almost Neutral";
		}
		else if(a>=7 && a<7.4)
		{
			document.getElementById("status").innerHTML = "Neutral";
		}
		else if(a>7.4 && a<9)
		{
			document.getElementById("status").innerHTML = "Slightly Alkaline";
		}
		else if(a>9)
		{
			document.getElementById("status").innerHTML = "Alkaline";
		}
		
		
        }, 5000);

      }
	  
	  
	  
	  //********************* VHURA DATASET ****************************//
function readTextFile(file)
{var allText="";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("fertilizer.txt");

	  // var datah = $.csv.toObjects(allText);
	  document.getElementById("deta").innerHTML = allText;
	  
	  