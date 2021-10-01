function navigateToExtension(edge, opera, chrome, firefox, safari, ie){    
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
	
	if(browser == "edge"){
		if(edge == "unsupported") alert("This extension is not available for Microsoft Edge.")
		else window.location.href = edge;
	}
	else if(browser == "opera"){
		if(opera == "unsupported") alert("This extension is not available for Opera.")
		else window.location.href = opera;
	}
	else if(browser == "chrome"){
		if(chrome == "unsupported") alert("This extension is not available for Google Chrome.")
		else window.location.href = chrome;
	}
	else if(browser == "ie"){
		if(ie == "unsupported") alert("This extension is not available for Internet Explorer.")
		else window.location.href = ie;
	}
	else if(browser == "firefox"){
		if(firefox == "unsupported") alert("This extension is not available for Firefox.")
		else window.location.href = firefox;
	}
	else if(browser == "safari"){
		if(safari == "unsupported") alert("This extension is not available for Safari.")
		else window.location.href = safari;
	} else {
    alert("Error: Can't detect your browser.");
  }
};