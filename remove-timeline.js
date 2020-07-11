// https://stackoverflow.com/a/14284815/2780127

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var timeline = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div");
timeline.style.visibility = "hidden";
