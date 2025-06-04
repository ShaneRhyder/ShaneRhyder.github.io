var descriptions = [
    "A03 | TechTrove",
    "A04 | POS System",
    "A07 | Music Albums"
];
var links = [
    "A03/index.html",
    "A04-Backup/index.html",
    "A07/index.html"
];

for (var i = 0; i < descriptions.length; i++) {
    var myContainer = document.getElementById("cardContainer");

    myContainer.innerHTML +=
        '<div class="project-card">' +
        '<h1><b>' + 'Project' + " " + (i+1) + '</b></h1>' +
        '<p>' + descriptions[i] + '</p>' +
        '<a href="' + links[i] + '">' +
        '<button class="project-btn">View Details</button>' +
        '</a>' +
        '</div>';
}

