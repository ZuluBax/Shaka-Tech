window.SHAKA_TRADE = {
    id: 'landscaper',
    trade: 'Landscaping',
    businessName: 'GreenScape Gardens',
    town: 'West Yorkshire',
    mainService: 'Garden Design & Landscaping',

    theme: {
        accent: '#4CAF50',
        accent2: '#9BDC9E',
        bg: '#0F1710',
        bgAlt: '#17221A',
        text: '#E7EDE8',
        muted: 'rgba(231, 237, 232, 0.65)',
        headingFont: "'Quicksand', sans-serif",
        googleFont: 'family=Quicksand:wght@500;600;700',
        radius: '24px',
    },

    chatbot: {
        persona: 'GreenScape Assistant',
        avatar: '🌳',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the project — a patio typically starts from £1,800, full garden redesigns are quoted after a site visit. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['patio', 'paving'], answer: "Yes, we design and lay patios in a range of materials to suit your garden and budget." },
            { keywords: ['driveway'], answer: "We install block paving, resin and gravel driveways, built to last." },
            { keywords: ['fence', 'fencing'], answer: "Yes, we supply and fit fencing of all types, from simple panel fencing to bespoke screening." },
            { keywords: ['maintenance', 'mowing', 'upkeep'], answer: "We offer ongoing garden maintenance packages to keep your outdoor space looking its best year-round." },
        ],
        fallbackAnswer: "That's a great question for our landscaping team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🌿', name: 'Garden Design', desc: 'Full garden design, from concept through to planting.' },
        { icon: '🧱', name: 'Patios', desc: 'Patios and outdoor living spaces built to last.' },
        { icon: '🚗', name: 'Driveways', desc: 'Block paving, resin and gravel driveway installation.' },
        { icon: '🚧', name: 'Fencing', desc: 'Fencing and screening fitted to a high standard.' },
        { icon: '🌱', name: 'Turfing', desc: 'Turf laying and lawn renovation for a lush, even finish.' },
        { icon: '✂️', name: 'Garden Maintenance', desc: 'Regular maintenance packages to keep gardens looking their best.' },
    ],

    gallery: [
        { icon: '🧱', caption: 'Patio installation — Leeds' },
        { icon: '🌿', caption: 'Full garden redesign — Huddersfield' },
        { icon: '🚗', caption: 'Block paving driveway — Bradford' },
        { icon: '🚧', caption: 'Garden fencing — Wakefield' },
        { icon: '🌱', caption: 'Lawn turfing — Halifax' },
        { icon: '✂️', caption: 'Seasonal maintenance — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Transformed our back garden completely — looks better than we imagined.', author: 'J. Holroyd, Leeds' },
        { stars: 5, text: 'New patio and fencing done in a week, really tidy work throughout.', author: 'S. Crowther, Huddersfield' },
        { stars: 4, text: 'Great communication and the driveway looks fantastic.', author: 'B. Tetley, Bradford' },
    ],

    faqs: [
        { q: 'Do you offer free garden design consultations?', a: 'Yes, we offer a free, no-obligation site visit and design consultation.' },
        { q: 'How long does a patio installation take?', a: 'Most standard patios take 3-5 days, depending on size and ground conditions.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all landscaping work." },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
