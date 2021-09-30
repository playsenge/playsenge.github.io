function navigate(site) {
  if(window.parent.location.href != site) window.parent.location.href = site;
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}