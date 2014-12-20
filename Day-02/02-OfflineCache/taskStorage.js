	/* 
	taskObject => id, name, isCompleted
	taskStorage
		- add (taskName)
		- toggle (taskId)
		- remove (taskId)
		- getAll() => array of task objects from storage
	*/
	var taskStorage = (function(){
		var storage = window.sessionStorage;

		function addTask(taskName){
			var id = new Date().getTime().toString();
			var newTask = {
				id : id,
				name : taskName,
				isCompleted : false
			};
			storage.setItem(id, JSON.stringify(newTask));
			return newTask;
		}

		function toggleTask(id){
			var task = JSON.parse(storage.getItem(id));
			task.isCompleted = !task.isCompleted;
			storage.setItem(id, JSON.stringify(task));
		}
		function removeTask(id){
			storage.removeItem(id);
		}
		function getAllTasks(){
			var result = [];
			for(var i=0;i<storage.length;i++)
				result.push(JSON.parse(storage.getItem(storage.key(i))))
			return result;
		}
		return {
			add : addTask,
			remove : removeTask,
			toggle : toggleTask,
			getAll : getAllTasks
		}
	})();
