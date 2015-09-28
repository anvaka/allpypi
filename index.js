console.log('Loading graph');
var save = require('ngraph.tobinary');
require('./lib/loadgraph.js')(process);

function process(graph) {
  console.log('Loaded ' + graph.getNodesCount() + ' nodes; ' + graph.getLinksCount() + ' links');

  var createLayout = require('ngraph.offline.layout');
  var layout = createLayout(graph);
  console.log('Starting layout');
  layout.run();
  console.log('Done. Exporting this to binary format');
  save(graph, { outDir: './data' });
  console.log('Done!');
}
