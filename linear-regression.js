const tf = require("@tensorflow/tfjs-node");
const { mod } = require("@tensorflow/tfjs-node");

class LinearRegression {
  constructor(features, labels, options) {
    this.features = features;
    this.labels = labels;

    this.options = Object.assign({ learningRate: 0.1 }, options);
  }
}

module.exports = LinearRegression;