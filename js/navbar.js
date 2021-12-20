function navigate(site, e) {
  if(!e.target.classList.contains("active")) {
      window.parent.location.href = site;
  }
}

function navigateNewTab(site, e) {
  if(!e.target.classList.contains("active")) {
      window.open(site, "_blank");
  }
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}
