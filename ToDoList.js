
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