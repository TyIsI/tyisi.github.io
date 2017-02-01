var fs = require('fs');

var status = {
	"status":"alive",
	"last_seen":Date.now()
}

fs.writeFile( 'status.json', JSON.stringify( status ), function(err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
