// https://stackoverflow.com/a/14284815/2780127

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function hideDistractions() {
  const onHome = window.location.href.includes("twitter.com/home")
  const timeline = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div");
  const whatsHappening = getElementByXpath("/html/body/div/div/div/div[2]/main/div/div/div/div[2]");

  if (timeline != null || whatsHappening != null) {
    timeline.style.visibility = onHome ? "hidden" : "visible";
    whatsHappening.style.visibility = "hidden";

    clearInterval(interval);
    interval = 0;
  }
}

var interval = setInterval(hideDistractions, 100);
