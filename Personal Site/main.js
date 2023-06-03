let circles = document.querySelectorAll('.circle');

function bigger(event) {
  let circle = event.target;
  circle.style.height = "350px";
  circle.style.width = "350px";
}

function resetHeight(event) {
  let circle = event.target;
  circle.style.height = ""; // Resetting to the default value (empty string)
  circle.style.width = "";
}

//looping the 3 circles
circles.forEach(function(circle) {
  circle.addEventListener('mouseover', bigger);
  circle.addEventListener('mouseout', resetHeight);
});
