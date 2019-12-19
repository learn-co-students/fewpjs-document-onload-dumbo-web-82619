// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let sampleText = document.getElementById('text')
  console.log(sampleText)
  sampleText.innerHTML = "This is really cool!"
  // document.body.append(sampleText)
});
