chrome.runtime.sendMessage({type:'getInfo'}, function(ret)
  {
  if(!ret) {console.log("Error send message "+chrome.runtime.lastError); return;}
  if(ret.ok=='ok') console.log(ret.info);
  }
);