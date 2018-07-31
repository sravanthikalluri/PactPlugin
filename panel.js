var currentUrl;
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    if(link) {
        link.addEventListener('click', function() {
            getCurrentPageUrl();
        });
    }
});

function getCurrentPageUrl(){
    document.getElementById('getCurrentUrl').innerText = currentUrl;
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://pactnew.azurewebsites.net/getpageinfo?page='+currentUrl);
    myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4) {
            document.getElementById('ajax-content').innerText = myRequest.responseText;
        }
    };
    myRequest.send();
    
};
chrome.runtime.sendMessage({method:"getURL"},function(response){
    currentUrl = response;
});
