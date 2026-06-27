/*
function buildFeaturePages(features) {
    for (feature of features.feature_list) {
        featureGrid = document.createElement("a");
        featureGrid.setAttribute("href", feature.link);
        featureGrid.setAttribute("class", "feature clickable");

        header = document.createElement("h1");
        header.appendChild(document.createTextNode(feature.header));

        hbreak = document.createElement("hr");



    }
}
*/


fetch("/assets/feature.html")
.then((response) => response.text())
.then((htmlFile) => console.log(htmlFile));


/*
fetch("/json/features.json")
.then((response) => response.json())
.then((jsonFile) => buildFeaturePages(jsonFile));
*/