var should = require("should");
var dbox = require("../index")({});

describe("all test start", function() {
	var client;

	before(function(done) {
		console.log('process.argv');
		console.log(process.argv);
		client = dbox.client('accessToken');
		done();
	})

	it("should create new folder", function(done) {
		var newName = 'newFolder'+Date.now();
		client.mkdir(newName, function(err, response, status) {
			/*err.should.have.property(null);
			status.name.should.have.property(newName);*/
			done();
		})
	})


	after(function() {
		//console.log("after step")
	})

})