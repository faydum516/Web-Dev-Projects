function store() {
    localStorage.setItem(document.getElementById("key").value, document.getElementById("value").value);
}
function remove() {
    localStorage.removeItem(document.getElementById("item-removal").value);
}
function add() {
    document.getElementById("note-taking-section").style.display = "block";
    document.getElementById("note-removing-section").style.display = "none";
}
function detach() {
    document.getElementById("note-taking-section").style.display = "none";
    document.getElementById("note-removing-section").style.display = "block";
}