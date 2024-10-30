var title = document.getElementById("title");
var img = document.getElementById("img");
var agentRole = document.getElementById("agentRole");
var agentAbilities = document.getElementById("agentAbilities");

const loadAgent = async (searchTerm) => {
    const response = await fetch('https://valorant-api.com/v1/agents/' + searchTerm);
    const agentData = await response.json();
    const agent = agentData.data;

    title.innerHTML = agent.displayName;
    img.src = agent.fullPortrait;
    agentRole.innerHTML = `
            <img class="mt-2" style="background-color: rgb(182, 91, 91); width: 100px; border-radius: 80px; padding: 12px;" src="${agent.role.displayIcon}">
            <p style="margin-bottom: 0; font-family: 'Tungsten-Bold'; font-size: 2em; color: rgb(182, 91, 91);">${agent.role.displayName}</p>
    `;

    agentAbilities.innerHTML = "";

    agent.abilities.forEach(ability => {
        const abilityContainer = document.createElement("div");
        abilityContainer.classList.add("ability");

        abilityContainer.innerHTML = `
            <img src="${ability.displayIcon}">
            <h2>${ability.displayName}</h2>
            <p>${ability.description}</p>
        `;

        agentAbilities.appendChild(abilityContainer);
    });
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('agentID')) {
    loadAgent(urlParams.get('agentID'));
} else {
    title.innerHTML = "Wrong Agent";
}