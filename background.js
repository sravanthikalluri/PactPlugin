var url;
chrome.tabs.onActivated.addListener(function (tabId) {
    var tab_id = tabId.tabId;
    chrome.tabs.get(tab_id, function(tab){
        url = tab.url;
    });
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method == "getURL"){
        sendResponse(url);
        getURL(sendResponse);
        return true;
    }
});