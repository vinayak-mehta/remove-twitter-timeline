var browser = browser || chrome

function handleCreated(tabInfo) {
  browser.tabs.executeScript(tabInfo.id, {
    file: "remove-timeline.js",
    runAt: "document_idle"
  });
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  browser.tabs.executeScript(tabId, {
    file: "remove-timeline.js",
    runAt: "document_idle"
  });
}

browser.tabs.onCreated.addListener(handleCreated);
browser.tabs.onUpdated.addListener(handleUpdated);
