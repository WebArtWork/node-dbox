var should = require("should");
var dbox = require("../index")({});
var fs = require('fs');


describe("all test start", function() {
	var client;

	before(function(done) {
		console.log('process.argv');
		console.log(process.argv);
		client = dbox.client('IlOMi7jJOjUAAAAAAAAAiNrZ8k-pdwVYadT3RA77SMkgy91zRCgKo3vK1jgAB71C');
		done();
	})

	// it("should create new folder", function(done) {
	// 	var newName = 'newFolder'+Date.now();
	// 	client.mkdir(newName, function(err, response, status) {
	// 		/*err.should.have.property(null);
	// 		status.name.should.have.property(newName);*/
	// 		done();
	// 	})
	// })
  it("should get contents of file", function(done) {
    client.download("111.jpg", function(status, reply){
      // status.should.eql(200)

      fs.writeFile('2222.jpg',reply.body,   (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
  done()
});
      
    })
  })



//     it("should get contents of file", function(done) {
// fs.readFile('test/222.jpg', (err, data) => {
//   if (err) throw err;
//   console.log(data);

//      client.upload("22222222.jpg", data, function(status, reply){
//       // status.should.eql(200)
//       var x = JSON.stringify(reply.body)
//       console.log(reply.body);
//       done()
//     })
// });
 
//   })


	after(function() {
		//console.log("after step")
	})

})

