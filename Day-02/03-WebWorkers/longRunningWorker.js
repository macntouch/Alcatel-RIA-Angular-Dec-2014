function doWork(){
	for(var i=0;i<10000;i++)
		for(var j=0;j<10000;j++)
			for(var k=0;k<100;k++){}
}
console.log("longRunningWorker loaded");
self.addEventListener("message", onMessage);
function onMessage(evtArg){
	var data = evtArg.data;
	if (data === "start"){
		doWork();
		self.postMessage("completed");
	}
}