//event listener event for all buttons on the page
document.getElementsByClassName("btn").onclick = function(event){
  event.preventDefault();
  location.href = "contact.html"
}