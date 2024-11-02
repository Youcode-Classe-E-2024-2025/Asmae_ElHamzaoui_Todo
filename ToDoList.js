const modal=document.getElementById("modal");
const section1=document.getElementById("section1");
const ouvrir=document.getElementById('ouvrir');
const taskForm=document.getElementById("taskForm");
//afficher le modal
ouvrir.addEventListener("click",()=>{
    section1.style.display="none";
    modal.style.display="block";
})
//masquer le modal
function fermer(){
    modal.style.display="none";
    section1.style.display="flex";
}
//testing another way
const titre=document.getElementById("title").value;
const description=document.getElementById("description").value;
const date=document.getElementById("date").value;
const test=document.getElementById("filmora");
const status=document.querySelector('input[name="status"]:checked').value;
 test.addEventListener("clisk",()=>{     
    const task=document.createElement("div");
        task.classList.add("task");
        task.innerHTML=`
             <h4>${titre}</h4>
             <p>${description}</p>
             <p>Date:${date}</p>
        `;
         //Ajouter la tache à la section correspondante
    if(status==="todo"){
        document.getElementById("todoTasks").appendChild(task);
    }else if(status==="doing"){
        document.getElementById("doingTasks").appendChild(task);
    }else if(status==="done"){
        document.getElementById("doneTasks").appendChild(task);
    }
 });


