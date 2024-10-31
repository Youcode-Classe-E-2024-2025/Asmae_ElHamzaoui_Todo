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
// gestion de la soumission du formulaire
    
    taskForm.addEventListener("submit",(event)=>{
    event.preventDefault(); 


    //Récupérer les valeurs des champs 
    const title=document.getElementById("title").value;
    console.log(title);
    const description=document.getElementById("description").value;
    console.log(description);
    const date=document.getElementById("date").value;
    console.log(date);
    const status=document.querySelector('input[name="status"]:checked').value;
    console.log(status);

    //Créer un élément de tache
    const task=document.createElement("div");
    task.classList.add("task");
    task.innerHTML=`
         <h4>${title}</h4>
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
   //Fermer et réinitialiser le modal
   modal.style.display="none";
   taskForm.reset();
});

