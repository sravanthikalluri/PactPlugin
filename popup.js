console.log("hello from devtools");
chrome.devtools.panels.create("pact",
                              "coldfusion10.png",
                              "panel.html",
                              function(panel) { console.log("hello from callback"); });