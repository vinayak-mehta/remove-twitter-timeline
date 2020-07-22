// https://stackoverflow.com/a/14284815/2780127

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function checkTimeline() {
  var timeline = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div");
  if (timeline != null) {
    timeline.style.visibility = "hidden";
    clearInterval(interval);
  }
}

var interval = setInterval(checkTimeline, 100);
