
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
    


  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];

    var url = tab.url;
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
    console.log(title);

    callback(title);
  });
}

function saveNote(url,text) {
    var items = {};
    items[url] = text;
    chrome.storage.sync.set(items);
}

function readNote(url, callback) {
    chrome.storage.sync.get(url, (items) => {
        callback(chrome.runtime.lastError ? null : items[url])
    })
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
      
    var urlElement = document.getElementById('link');
    var textarea = document.getElementById('note');
      
    urlElement.innerHTML = url;

    
    readNote(url, (savedNote) => {
        if (savedNote) {
            textarea.innerHTML = savedNote;
        }
    });
    
      textarea.addEventListener("change", () => {
        console.log(textarea.value);
        saveNote(url,textarea.value);
    });
  });
    
  getCurrentTabTitle((title) => {
    var titelElement = document.getElementById('titel');
      
    titelElement.innerHTML = title;
  });
});
