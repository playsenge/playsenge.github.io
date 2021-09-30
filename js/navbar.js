function goHome() {
    redirect("/");
}

function redirect(site)
  window.parent.location.href = site;
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}