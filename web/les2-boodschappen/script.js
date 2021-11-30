console.log("scrips is geladen")

const shootervak = document.getElementById('shooters');
const platformervak = document.getElementById('platformers');

function zetInShooters(shooters){
    console.log(shooters);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = shooters;
    nieuwElement.className = 'rood';
    shootervak.appendChild(nieuwElement);
}

function zetInPlatformers(platformers){
    console.log(platformers);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = platformers;
    nieuwElement.className = 'groen';
    platformervak.appendChild(nieuwElement);
}