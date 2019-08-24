// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function inputData(data){
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value.toString());
    })
};

tableData.forEach(inputData);

function resetData(filteredData){
    d3.select("tbody").html("");
    filteredData.forEach(inputData);
};

var button = d3.select("#filter-btn");
var inputDate = d3.select(".form-control");

button.on("click", function (){
    d3.event.preventDefault();
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(data => data.datetime == inputValue);

    resetData(filteredData);
})

function show_more ( element_to_show ) {
    var element_to_show = document.getElementById("more");
    element_to_show.style.display = "inline";
    }

console.log(inputDate);