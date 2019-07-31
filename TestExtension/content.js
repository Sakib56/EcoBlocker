console.log("it works!")

var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    var currentDiv = divs[i]
    var currentDivID = currentDiv.id
    
    var hasId = currentDivID.length > 0
    if (hasId) {
        var element = document.getElementById(currentDivID);
        var innerText = element.innerHTML.toString()

        var containsAd = innerText.includes("ad")
        if (containsAd) {
            element.parentNode.removeChild(element);
        }
    }
}