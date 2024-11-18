var descriptions = [
    "Activity 4: Attack Shark X3 Pro",
    "Activity 5: Osaka Castle",
    "Activity 6: Bird Fun Facts",
    "Activity 7: Valorant Agents",
    "Description of Project 5",
    "Description of Project 6"
];
var links = [
    "webpages/Activity 4/Device Showcase.html",
    "webpages/Activity 5/index.html",
    "webpages/Activity 6/index.html",
    "webpages/Activity 7/index.html",
    "#",
    "#"
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

