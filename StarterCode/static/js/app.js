// Read in json file

d3.json("data/samples.json").then



//Gauge Chart Code:
// var data = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       value: 450,
//       title: { text: "Speed" },
//       type: "indicator",
//       mode: "gauge+number+delta",
//       delta: { reference: 380 },
//       gauge: {
//         axis: { range: [null, 500] },
//         steps: [
//           { range: [0, 250], color: "lightgray" },
//           { range: [250, 400], color: "gray" }
//         ],
//         threshold: {
//           line: { color: "red", width: 4 },
//           thickness: 0.75,
//           value: 490
//         }
//       }
//     }
//   ];
  
//   var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
//   Plotly.newPlot('myDiv', data, layout);


//Bubble Chart Code:

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data, layout);