var descriptions = [
    "WebDev: First Sem",
    "AppDev: Second Sem"
];
var links = [
    "webdev",
    "ADET"
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

