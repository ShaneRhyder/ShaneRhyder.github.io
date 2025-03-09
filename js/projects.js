var descriptions = [
    "Activity 4: Attack Shark X3 Pro",
    "Activity 5: Osaka Castle",
    "Activity 6: Bird Fun Facts",
    "Activity 7: Valorant Agents",
    "Midterm 1 - Unit 4: Guitar Covers",
    "Midterm 1 - Unit 5: Embedded",
    "Midterm 2: Parallax",
    "Midterm 3: 404 Page"
];
var links = [
    "webpages/Activity 4/Device Showcase.html",
    "webpages/Activity 5/index.html",
    "webpages/Activity 6/index.html",
    "webpages/Activity 7/index.html",
    "webpages/Midterm 1 - Unit 4/index.html",
    "index.html/#playlist",
    "webpages/Midterm 2/index.html",
    "../404.html"
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

