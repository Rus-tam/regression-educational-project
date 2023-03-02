const tf = require("@tensorflow/tfjs-node");
const loadCSV = require("./load-csv");

let { features, labels, testFeatures, tesLabels } = loadCSV("./cars.csv", {
  shuffle: true,
  splitTest: 50,
  dataColumns: ["horsepower"],
  labelColumns: ["mpg"],
});
