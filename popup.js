chrome.runtime.onMessage.addListener(
  function(req, sender, response)
   {
    if(req.type=='getInfo') {
        alert('Hello')
        response({ok:"ok", info:"info ..."});
      }
   }
);
