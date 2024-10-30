const url = "https://valorant-api.com/v1/agents";
let page = 1;
let agentsData = [];

getData();

async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Not a valid response");
        const agentArray = await response.json();

        const seenNames = new Set();
        agentsData = agentArray.data.filter(agent => {
            if (!agent.fullPortrait || seenNames.has(agent.displayName)) return false;
            seenNames.add(agent.displayName);
            return true;
        });

        agentsData.sort((a, b) => a.displayName.localeCompare(b.displayName));
        displayAgents();
    } catch (err) {
        console.warn(err.message);
    }
}

function displayAgents() {
    const container = document.getElementById("agentsContainer");
    container.innerHTML = "";

    const baseline = (page - 1) * 5;
    const agentCount = Math.min(baseline + 5, agentsData.length);

    for (let i = baseline; i < agentCount; i++) {
        const agent = agentsData[i];
        const agentCard = document.createElement("div");
        agentCard.classList.add("agent");
        agentCard.onclick = () => window.location.href = `view.html?agentID=${agent.uuid}`;

        agentCard.innerHTML = `
            <img src="${agent.displayIcon}" alt="${agent.displayName}">
            <h2>${agent.displayName}</h2>
            <p>${agent.description}</p>
        `;

        container.appendChild(agentCard);

        agentCard.addEventListener('mouseenter', () => {
            document.querySelectorAll('.agent').forEach(otherAgent => {
                if (otherAgent !== agentCard) {
                    otherAgent.style.filter = 'blur(5px)';
                    otherAgent.style.transition = 'filter 0.3s ease';
                }
            });
        });

        agentCard.addEventListener('mouseleave', () => {
            document.querySelectorAll('.agent').forEach(otherAgent => {
                otherAgent.style.filter = 'none';
                otherAgent.style.transition = 'filter 0.3s ease';
            });
        });
    }
}

const nextPage = () => {
    if (page * 5 < agentsData.length) {
        page++;
        displayAgents();
    }
};

const prevPage = () => {
    if (page > 1) { 
        page--;
        displayAgents();
    }
};
