
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
    


  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];

    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    console.log(url);

    callback(url);
  });
}

function getCurrentTabTitle(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
    


  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];

    var title = tab.title;
    console.assert(typeof title == 'string', 'tab.title should be a string');
    console.log(title);

    callback(title);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var urlElement = document.getElementById('link');
      
    urlElement.innerHTML = url;
  });
  getCurrentTabTitle((title) => {
    var titelElement = document.getElementById('titel');
      
    titelElement.innerHTML = title;
  });

});
