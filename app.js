// Read in json file
// d3.json("samples.json").then(function(data){ console.log(data)});

async function init2(){
    console.log("init called");
    d3.json("./samples.json").then((data) => {      
        console.log(data) ;
        return data.names;     
    })    
}   
async function initdropdown2(){
    console.log("initdropdown called");
    let nameArray = await (init2());
    var ddlItems = document.getElementById("selDataset")

        for (var i = 0; i < nameArray.length; i++) {
            var opt = nameArray[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            ddlItems.appendChild(el);
          }
}



//initdropdown2();



function init(){
    d3.json("./samples.json").then((data) => {      
    nameArray = data.names;
    var ddlItems = document.getElementById("selDataset")

        for (var i = 0; i < nameArray.length; i++) {
            var opt = nameArray[i];
            var element = document.createElement("option");
            element.textContent = opt;
            element.value = opt;
            ddlItems.appendChild(element);
          }
    })    
}  

init();

// const dataPromise = d3.json(./samples.json);
//     console.log("Data Promise: ", dataPromise);



// Drop Down Menu Event Handler
d3.selectAll("#selDataset").on("change", updatePage);

function updatePage() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selDataset").node();
  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.id;
 
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;

  console.log(selectedOption);

  d3.json("./samples.json").then((data) => {      
    metaArray = data.metadata; 
    var id = "ID: ";
    var demotable = d3.select("#sample-metadata");
    demotable.html("");
    for (var i = 0; i < metaArray.length; i++) {
        if (metaArray[i].id == selectedOption){
            demotable.append("h5"). text(id + selectedOption);
            console.log("match found");
            var ethnicity = "ETHNICITY: " + metaArray[i].ethnicity;
            demotable.append("h5"). text(ethnicity);
            //demotable.appendChild(ethnicity);
            console.log(ethnicity);
            var gender = "GENDER: " + metaArray[i].gender;
            console.log(gender);
            demotable.append("h5"). text(gender);
            var age = "AGE: " + metaArray[i].age;
            console.log(age);
            demotable.append("h5"). text(age);
            var location = "LOCATION: " + metaArray[i].location
            console.log(location);
            demotable.append("h5"). text(location);
            var bbtype = "BBTYPE: " + metaArray[i].bbtype
            console.log(bbtype);
            demotable.append("h5"). text(bbtype);
            var wfreq = "WFREQ: " + metaArray[i].wfreq
            console.log(wfreq);
            demotable.append("h5"). text(wfreq);

        }
    }
    updateCharts(selectedOption);
    //demotable.updatePage;
})    
}

//Bar Chart Code
function updateCharts(id) {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.selectAll("#selDataset").node();
    // Assign the dropdown menu item ID to a variable
    var dropdownMenuID = dropdownMenu.id;
   
    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;
  
    console.log(selectedOption);
  
    d3.json("./samples.json").then((data) => { 
    bacteriaArray = data.samples; 
    var id = "ID: ";
    console.log("ID Found");
    // var trace1 = d3.select("#sample-metadata");
    // demotable.html("");
    // for (var i = 0; i < demotable.otu_ids; i++) {
    //     if (trace1[i].id == selectedOption){}
// var trace1 = {
//     xcords: [data.sample_values],
// TODOS:  need to calculate the top 10 samples.
//     ycords: [data.otu_lables],
//     type: "bar"
//     orientation: 'h'
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "Top 10 Bacteria Cultures Found"
//   };
  
//   Plotly.newPlot("bar", data, layout);
//    }



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


//BONUS Gauge Chart Code:

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
//           { range: [0, 250], color: "beige" },
//           { range: [250, 400], color: "green" }
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
//   Plotly.newPlot('gauge', data, layout)