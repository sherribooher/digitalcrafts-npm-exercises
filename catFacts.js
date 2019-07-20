var pdfkit = require('pdfkit');
var catfacts = require('cat-facts');
var fs = require('fs');

function getCatFacts(num) {
  var facts = [];
  for (var i = 0; i < num; i++) {
    facts.push(catfacts.random());
  }
  return facts;
}

let newDoc = new pdfkit();

// Pipe the document to a file
newDoc.pipe(fs.createWriteStream('./img/cat.pdf'));

// Embed a font, set the font size, and render text
newDoc.font('./fonts/Fascinate-Regular.ttf');
newDoc.fontSize(42);
newDoc.text('CAT FACTS', {
  align: 'center'
}
);

newDoc.moveDown();
newDoc.font('./fonts/Roboto-Regular.ttf');
newDoc.fontSize(14);
newDoc.list(getCatFacts(15));

newDoc.end();
