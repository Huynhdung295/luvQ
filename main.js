document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("wr2").classList.toggle("wr2");
});

document.getElementById("it1").addEventListener("click", function () {
  document.getElementById("text").innerHTML = "Quỳnh là người đáng iu nhất thế gian phải không?";
  document.getElementById("it2").disabled = true;
  document.getElementById("it3").disabled = true;
  document.getElementById("btn1").disabled = true;
  document.getElementById("wr3").classList.add("wr2");
});
document.getElementById("it2").addEventListener("click", function () {
  document.getElementById("text").innerHTML = "Quỳnh là người dễ thương nhất thế gian phải không?";
  document.getElementById("it1").disabled = true;
  document.getElementById("it3").disabled = true;
  document.getElementById("btn1").disabled = true;
  document.getElementById("wr3").classList.add("wr2");
});
document.getElementById("it3").addEventListener("click", function () {
  document.getElementById("text").innerHTML = "Quỳnh là người xinh đẹp nhất thế gian phải không?";
  document.getElementById("it2").disabled = true;
  document.getElementById("it1").disabled = true;
  document.getElementById("btn1").disabled = true;
  document.getElementById("wr3").classList.add("wr2");
});
document.getElementById("ch1").addEventListener("click", function () {
  alert("Yêu em nhất trên đời!!");
  location.reload();
});
function click() {
  var object = document.getElementById("item");

  object.onclick = function () {
    var x = Math.floor(Math.random() * 555);
    var y = Math.floor(Math.random() * 555);
    object.style.top = x + "px";
    object.style.left = y + "px";
  };
}
document.getElementById("item").addEventListener("click", function () {
    document.getElementById("item").style.position="absolute"
    document.getElementById("item").style.top = "60px"
    document.getElementById("item").style.left = "75px"
    click();
    alert("Mơ à!!!")
    
  });
