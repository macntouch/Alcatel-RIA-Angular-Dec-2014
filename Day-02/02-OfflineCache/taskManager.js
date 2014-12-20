(function(){
		window.addEventListener("DOMContentLoaded", init);
		window.addEventListener("storage" , loadTasksFromStorage);
		
		function init(){
			document.getElementById("btnAdd").addEventListener("click", onBtnAddClick);
			document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
			loadTasksFromStorage();
		}
		function loadTasksFromStorage(){
			document.getElementById("olTaskList").innerHTML = "";
			taskStorage.getAll().forEach(addTaskToList);
		}
		function onBtnAddClick(){
			var taskName = document.getElementById("txtTask").value;
			var newTask = taskStorage.add(taskName);
			addTaskToList(newTask);
		}
		function addTaskToList(task){
			var newTaskElement = document.createElement("li");
			newTaskElement.setAttribute("task-id", task.id);
			newTaskElement.innerHTML = task.name;
			if (task.isCompleted)
				newTaskElement.classList.add("completed");
			newTaskElement.addEventListener("click", onTaskClick);
			document.getElementById("olTaskList").appendChild(newTaskElement);
		}
		function onTaskClick(){
			this.classList.toggle("completed");
			taskStorage.toggle(this.getAttribute("task-id"));
		}
		function onBtnRemoveCompletedClick(){
			var taskItems = document.getElementById("olTaskList").children;
			for(var i= taskItems.length-1; i>=0; i--)
				if (taskItems[i].classList.contains("completed")){
					taskItems[i].removeEventListener("click", onTaskClick);
					taskStorage.remove(taskItems[i].getAttribute("task-id"));
					taskItems[i].remove();
				}
		}
	})();