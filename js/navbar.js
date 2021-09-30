function goHome(e) {
    redirect("/", e);
}

function redirect(site, e){
    if(!e.target.classList.includes("active")) {
        window.parent.location.href = site;
    }
}

// professionalism 1000
if(window.top == window.self){
  window.top.location.href = "/";
}