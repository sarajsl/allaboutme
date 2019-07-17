function myFunction() {
  var person = prompt("pls enter your name", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "hi " + person + "! whats up?";
  }
}
