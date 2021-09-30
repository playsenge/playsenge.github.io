function loaded(currentPage){
  var element = document.getElementById("navbar").contentWindow.document.getElementById(currentPage);
  element.classList.add("active");
}