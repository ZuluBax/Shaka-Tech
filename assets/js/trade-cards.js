/**
 * Shared trade catalogue — drives the homepage "Interactive Trade Demos"
 * grid and the /demos showroom. Add a new trade here (and a matching
 * /demos/{id}/ page) to expand the showroom without touching layout code.
 */
const SHAKA_TRADES = [
    { id: 'roofer', name: 'Roofer', icon: '🏠', blurb: 'Roof repairs, new roofs and emergency call-outs.', status: 'live' },
    { id: 'builder', name: 'Builder', icon: '🧱', blurb: 'Extensions, renovations and new builds.', status: 'live' },
    { id: 'electrician', name: 'Electrician', icon: '⚡', blurb: 'Rewiring, consumer units and EV chargers.', status: 'live' },
    { id: 'plumber', name: 'Plumber', icon: '🚰', blurb: 'Emergency plumbing, leaks and bathrooms.', status: 'live' },
    { id: 'joiner', name: 'Joiner', icon: '🪚', blurb: 'Bespoke furniture, doors and staircases.', status: 'live' },
    { id: 'landscaper', name: 'Landscaper', icon: '🌳', blurb: 'Garden design, patios and driveways.', status: 'live' },
    { id: 'plasterer', name: 'Plasterer', icon: '🛠️', blurb: 'Skimming, rendering and dry lining.', status: 'live' },
    { id: 'dog-walker', name: 'Dog Walker & Groomer', icon: '🐕', blurb: 'Dog walking, grooming and pet care bookings.', status: 'live' },
];

function renderTradeCards(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = SHAKA_TRADES.map((trade) => {
        const isLive = trade.status === 'live';
        const tag = isLive ? '<span class="trade-badge live">Live Demo</span>' : '<span class="trade-badge soon">Coming Soon</span>';
        const cta = isLive ? 'Explore Demo →' : 'In development';
        const href = isLive ? `/demos/${trade.id}/` : '/demos/';

        return `
            <a class="trade-card${isLive ? '' : ' is-soon'}" href="${href}">
                ${tag}
                <div class="trade-icon">${trade.icon}</div>
                <h3>${trade.name}</h3>
                <p>${trade.blurb}</p>
                <span class="trade-cta">${cta}</span>
            </a>
        `;
    }).join('');
}
