function navigate(site, e, newtab) {
  if(!e.target.classList.contains("active")) {
    if(newtab == false) {
      window.parent.location.href = site;
    }
    if(newtab == true) {
      window.open(site, "_blank");
    }
  }
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}
