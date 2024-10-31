const modal=document.getElementById("modal");
const section1=document.getElementById("section1");
function ouvrir(){
    section1.style.display="none";
    modal.style.display="block";


}
function fermer(){
    modal.style.display="none";
    section1.style.display="flex";
}