var createGraph = require('ngraph.graph');
var inputFile = process.argv[2] || 'data/packages.csv';
module.exports = loadGraph;

function loadGraph(done) {
  var lineReader = require('line-reader');
  var graph = createGraph({ uniqueLinkIds: false });

  lineReader.eachLine(inputFile, function(line, last) {
    var packages = line.split(',');
    var mainPkg = packages[0];
    graph.addNode(mainPkg);
    if (packages[1] === ' null') {
      // this means there was a problem durig parsing of setup.py
      // just add it, and hope someone make python's dependencies
      // more friendly.
      return;
    }

    if (!packages[1]) {
      // this means there is no depencies for this package. Continue
      return;
    }
    for (var i = 1; i < packages.length; ++i) {
      graph.addLink(mainPkg, packages[i]);
    }
  }).then(function() {
    done(graph);
  });
}
