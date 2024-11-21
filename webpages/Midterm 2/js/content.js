var titles = [
    "About",
    "Why Travel?",
    "How do you prepare for a trip?",
    "Let's Go!"
];
var descriptions = [
    "Ready to explore? Get ready to discover what the world has to offer. Traveling goes beyond just visiting new places—it’s about trying new things, connecting with different cultures, and creating unforgettable memories. Whether seeking adventure, relaxation, or simply a change of scenery, there’s always something amazing waiting to be found. Don’t wait—take the leap and see where the next journey leads!",
    "Traveling is an exciting way to break away from the everyday and embrace the unknown. It invites new experiences, whether through exploring unfamiliar landscapes or simply stepping outside the usual routine. Each journey presents opportunities for self-discovery, offering fresh perspectives, unexpected connections, and the joy of finding something new. From quiet moments of reflection to thrilling adventures, travel opens doors to countless stories and memories. With each destination, there’s the chance to challenge oneself, grow, and return with a deeper appreciation of the world’s diversity. It’s about more than just reaching a place—it’s about the experiences that come along the way.",
    "Preparing for a trip involves researching your destination, booking travel and accommodations, and packing smartly for the climate and activities. Ensure your travel documents are in order, including passports and visas, and have travel insurance in place. Set a budget for the trip, and make arrangements for health, such as vaccinations and a first-aid kit. Don’t forget to arrange for someone to take care of things at home. Proper preparation helps reduce stress and ensures a smooth, enjoyable journey, allowing you to fully embrace the experiences ahead.",
    "Are you ready to step out and experience the world in a whole new way? There’s so much out there waiting for you, with incredible adventures and unforgettable moments just waiting to be discovered. The journey of a lifetime might be closer than you think. So, why wait? Pack your bags, prepare yourself, and set off on an adventure that will leave you with memories that will last forever!"
];

for (var i = 0; i < descriptions.length; i++) {
    var myContainer = document.getElementById("contentContainer");

    myContainer.innerHTML +=
        '<div class="text-black d-flex flex-column justify-content-center align-items-center px-5 py-5" id="contentSection' + i + '">' +
        '<div class="container">' +
        '<p class="h1 mb-3 animate__animated animate__backInLeft wow"><b>' + titles[i] + '</b></p>' +
        '<p class="animate__animated animate__backInUp wow">' + descriptions[i] + '</p>' +
        '<img class="rounded-5 animate__animated animate__fadeIn wow" src="img/img' + i + '.jpg" style="width: 100%; height: auto;">' +
        '</div>' +
        '</div>';
}
