
let tasks = [];
let editingTask = null;

//Ouverture du modal
function openModal(task = null) {
  document.getElementById("taskModal").classList.remove("hidden");
  document.getElementById("modalTitle").innerText = task ? "Modifier la tâche" : "Ajouter une tâche";
 
  if (task) {
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("date").value = task.date;
    document.getElementById("priority").value = task.priority;
    document.querySelector(`input[name='status'][value='${task.status}']`).checked = true;
    editingTask = task;
  }
}
//Ouverture du modal

//Fermeture du modal
function closeModal() {
    document.getElementById("taskModal").classList.add("hidden");
    document.getElementById("taskForm").reset();
    editingTask = null;
  }
//Fermeture du modal

// enregistrement de  la tache 
function saveTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const status = document.querySelector("input[name='status']:checked").value;
    const priority = document.getElementById("priority").value;

    if (editingTask) {
      editingTask.title = title;
      editingTask.description = description;
      editingTask.date = date;
      editingTask.priority = priority;
      editingTask.status = status;
    } else {
      const newTask = { title, description, date, priority, status };
      tasks.push(newTask);
    }

    closeModal();
    displayTasks();
    updateTaskCounts();
  }
  // enregistrement de la tache 

// Affichage de  la tache dans la partie convenable
  function displayTasks() {
    const statuses = ["todo", "doing", "done"];
   
    statuses.forEach(status => {
      const taskList = document.getElementById(`${status}Tasks`);
      taskList.innerHTML = "";

      const filteredTasks = tasks
        .filter(task => task.status === status)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

      filteredTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.className = getPriorityClass(task.priority);
        taskItem.innerHTML = getTaskHTML(task);
        taskList.appendChild(taskItem);
      });
    });
  }
  // Affichage de  la tache dans la partie convenable
