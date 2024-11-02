
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
  // recupérer la priorité de la tache
  function getPriorityClass(priority) {
    return {
      "P1": "p-4 bg-red-500 text-white rounded shadow",
      "P2": "p-4 bg-orange-500 text-white rounded shadow",
      "P3": "p-4 bg-green-500 text-white rounded shadow"
    }[priority];
  }
  //recupérer la priorité de la tache
  function getTaskHTML(task) {
    return `
      <strong>${task.title}</strong><br>${task.description}<br><small>${task.date}</small>
      <div class="flex space-x-2 mt-2">
        <button onclick="editTask('${task.title}', '${task.description}', '${task.date}', '${task.priority}', '${task.status}')"
          class="px-2 py-1 bg-yellow-50 text-black rounded">Modifier</button>
        <button onclick="deleteTask('${task.title}', '${task.date}')" class="px-2 py-1 bg-gray-700 text-white rounded">Supprimer</button>
      </div>
    `;
  }
   // Affichage de  la tache dans la partie convenable

   //modification de la tache 
   function editTask(title, description, date, priority, status) {
    const task = tasks.find(task => task.title === title && task.date === date);
    if (task) openModal(task);
  }
  //modification de la tache 

  //suppression de la tache 
  function deleteTask(title, date) {
    tasks = tasks.filter(task => !(task.title === title && task.date === date));
    displayTasks();
    updateTaskCounts();
  }
  //suppression de la tache

//changement du mode 
   const button = document.getElementById('toggleMode');
   let mode = 0; 

   button.addEventListener('click', () => {
    if (mode === 0) {
        colorBox.classList.remove('bg-gradient-to-r', 'from-sky-600', 'to-sky-950');
        colorBox.classList.add('bg-gradient-to-r', 'from-indigo-300', 'to-indigo-900');
        colorBox1.classList.remove('bg-gradient-to-r', 'from-sky-600', 'to-sky-950');
        colorBox1.classList.add('bg-gradient-to-r', 'from-indigo-900', 'to-indigo-300');
        mode = 1; // Update mode to indicate the first color set is active
    } else {
        colorBox.classList.remove('bg-gradient-to-r', 'from-indigo-300', 'to-indigo-900');
        colorBox.classList.add('bg-gradient-to-r', 'from-sky-600', 'to-sky-950');
        colorBox1.classList.remove('bg-gradient-to-r', 'from-indigo-900', 'to-indigo-300');
        colorBox1.classList.add('bg-gradient-to-r', 'from-sky-950', 'to-sky-600');
        mode = 0; // Update mode to indicate the second color set is active
    }
});
//changement du mode 