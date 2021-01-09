// https://stackoverflow.com/a/14284815/2780127

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function checkTimeline() {
  const atHome = window.location.href.includes("twitter.com/home")
  const timeline = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div");

  const whatsHappening = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div/div[2]");
  whatsHappening.style.visibility = "hidden";

  if (timeline != null) {
    timeline.style.visibility = atHome ? "hidden" : "visible";
    clearInterval(interval);
  }
}

var interval = setInterval(checkTimeline, 100);
