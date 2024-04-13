const follow =document.getElementById("follow");

function change(event){
    event.target.textContent="Following";
}
follow.addEventListener("click",change);