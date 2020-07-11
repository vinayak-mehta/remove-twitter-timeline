function handleUpdated(tabId, changeInfo, tabInfo) {
  if(changeInfo.url == "https://twitter.com/home") {
    browser.tabs.executeScript(tabId, {
      file: "remove-timeline.js",
      runAt: "document_idle"
    });
  }
}

browser.tabs.onCreated.addListener(handleUpdated);
browser.tabs.onUpdated.addListener(handleUpdated);
