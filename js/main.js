var btn =  document.querySelector('.fa-list');
var btnn =  document.querySelector('nav');
btn.onclick = function(){
  btnn.style.visibility = 'visible';
  btnn.style.transform = "translate(200px)";
  
}
var btn =  document.querySelector('.fa-xmark');
var btnn =  document.querySelector('nav');
btn.onclick = function(){
  btnn.style.visibility = 'hidden';
  btnn.style.transform = "translate(-200px)";
  
}



