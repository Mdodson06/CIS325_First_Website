function addToList(item) {
    document.getElementById("myList").innerHTML += "<li>"+item+"</li>";
}

window.addEventListener('DOMContentLoaded', function(){
    this.document.getElementById("input").value = "";
    document.getElementById('button').addEventListener('click',()=>{
        v = document.getElementById("input").value;
        if (v) {
            addToList(v);
        }
    });
});