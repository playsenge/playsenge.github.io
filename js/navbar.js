function navigate(site, e) {
  if(!e.target.classList.contains("active")) window.parent.location.href = site;
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}