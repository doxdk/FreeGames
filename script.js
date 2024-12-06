const themeToggle = document.getElementById('themeToggle');
const gameType = document.getElementById('gameType');
const priceGroup = document.getElementById('priceGroup');
const endDateGroup = document.getElementById('endDateGroup');
const gamesGrid = document.getElementById('gamesGrid');

let games = [
    {
        name: "Portal 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
        type: "free",
        price: 0,
        endDate: null,
        platform: "steam",
        keepable: true
    },
    {
        name: "Grand Theft Auto V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        type: "offer",
        price: 19.99,
        endDate: "2024-12-31T23:59:59",
        platform: "epicgames",
        keepable: true
    },
    {
        name: "Assassin's Creed Valhalla",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg",
        type: "offer",
        price: 29.99,
        endDate: "2024-12-25T23:59:59",
        platform: "ubisoft",
        keepable: true
    }
];

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});


gameType.addEventListener('change', () => {
    const isOffer = gameType.value === 'offer';
    priceGroup.style.display = isOffer ? 'block' : 'none';
    endDateGroup.style.display = isOffer ? 'block' : 'none';
});

function renderGames() {
    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <div class="game-meta">
                    <span class="price-tag">${game.type === 'free' ? 'Free' : `$${game.price}`}</span>
                    ${game.endDate ? `<br>Ends: ${new Date(game.endDate).toLocaleDateString()}` : ''}
                    <br>${game.keepable ? 'Keeps to library' : 'Temporary access'}
                </div>
                <div class="platform-badge">${game.platform.toUpperCase()}</div>
            </div>
        </div>
    `).join('');
}

renderGames();
