// Read in json file
// d3.json("samples.json").then(function(data){ console.log(data)});
var nameArray;
function init(){
    console.log("init called");
    d3.json("./samples.json").then((data) => {
        nameArray = data.names;
        console.log( nameArray);
        var ddlItems = document.getElementById("selDataset")

        for (var i = 0; i < nameArray.length; i++) {
            var opt = nameArray[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            ddlItems.appendChild(el);
          }
    })
    
}   
 

init();



// const dataPromise = d3.json(./samples.json);
//     console.log("Data Promise: ", dataPromise);



// Drop Down Menu Event Handler
d3.selectAll("#selDataset").on("optionChange", updatePage);

function updatePage() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selDataset").node();
  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.id;
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
}

//Bar Chart Code

// var trace1 = {
//     x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "Top 10 Bacteria Cultures Found"
//   };
  
//   Plotly.newPlot("bar", data, layout);


//Gauge Chart Code:

// var data = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       value: 450,
//       title: { text: "Belly Button Washing Frequency" },
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
  
//   var layout = { width: 600, height: 450, margin: { t: 0, b: 0 }};
//   Plotly.newPlot('gauge', data, layout);


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
//     title: 'Bacteria Cultures Per Sample',
//     x: 'OTU ID',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('bubble', data, layout);