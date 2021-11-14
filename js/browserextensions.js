function addExtensionHref(e, edge, opera, chrome, firefox, safari, ie){    
	alert("loaded! " + e)
  var browser = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return "edge";
        case agent.indexOf("edg") > -1: return "edge";
        case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
        case agent.indexOf("trident") > -1: return "ie";
        case agent.indexOf("firefox") > -1: return "firefox";
        case agent.indexOf("safari") > -1: return "safari";
        default: return "other";
    }
	})(window.navigator.userAgent.toLowerCase());
  
  var element = e.target;
  var extension = e.target.innerText;
  extension = "works";
  
  switch(browser) {
    case "edge":
      if(edge == "unsupported") alert(extension + " is not available for Microsoft Edge.")
      else element.href = edge;
      break;
    case "opera":
      if(opera == "unsupported") alert(extension + " is not available for Opera.")
      else element.href = opera;
      break;
    case "chrome":
      if(chrome == "unsupported") alert(extension + " is not available for Google Chrome.")
      else element.href = chrome;
      break;
    case "ie":
      if(ie == "unsupported") alert(extension + " is not available for Internet Explorer.")
      else element.href = ie;
      break;
    case "firefox":
      if(firefox == "unsupported") alert(extension + " is not available for Firefox.")
      else element.href = firefox;
      break;
    case "safari":
      if(safari == "unsupported") alert(extension + " is not available for Safari.")
      else element.href = safari;
      break;
    default:
      alert("Error: Can't detect your browser.");
      break;
  }
};