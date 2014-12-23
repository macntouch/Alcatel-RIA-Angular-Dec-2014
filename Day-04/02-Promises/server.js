var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path"),
	qs = require("querystring");

var staticResourceExtns = [".html",".js",".css",".jpg",".png",".ico",".txt",".xml",".json"];
function isStaticResource(resourcePath){
	return staticResourceExtns.indexOf(path.extname(resourcePath)) != -1;
}
var server = http.createServer(function(req,res){
	req.url = req.url === "/" ? "index.html" : req.url;
	req.url = url.parse(req.url,true);
	if (isStaticResource(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);

		if (fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath, {enconding : "utf8"});
			stream.pipe(res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		if (req.url.pathname === "/tasks"){
			var tasks = {
				list : [
					{"id":"1417002854136","name":"Another new task","category":"Official","createdAt":"2014-11-26T11:54:14.136Z","isCompleted":false},
					{"id":"1417003001514","name":"New task - 1000","category":"Official","createdAt":"2014-11-26T11:56:41.514Z","isCompleted":false},
					{"id":"1417003063935","name":"One more new task - 11","category":"Personal","createdAt":"2014-11-26T11:57:43.935Z","isCompleted":false},
					{"id":"1417003106733","name":"sdfsaf","category":"Official","createdAt":"2014-11-26T11:58:26.733Z","isCompleted":false}
				]};
			setTimeout(function(){
				res.write(JSON.stringify(tasks));
				res.end();	
			},5000);
			
		}
	}
});
server.listen(9090);
console.log("server listening on port 9090");