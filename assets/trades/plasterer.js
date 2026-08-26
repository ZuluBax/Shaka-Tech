window.SHAKA_TRADE = {
    id: 'plasterer',
    trade: 'Plastering',
    businessName: 'Shaka Plasterer',
    town: 'West Yorkshire',
    mainService: 'Plastering & Rendering',

    theme: {
        accent: '#A99684',
        accent2: '#77736D',
        bg: '#F8F7F4',
        bgAlt: '#EEE9E1',
        text: '#171A19',
        muted: '#77736D',
        headerBg: '#FFFFFF',
        headerText: '#171A19',
        headingFont: "'Poppins', sans-serif",
        bodyFont: "'Roboto', sans-serif",
        googleFont: 'family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@400;500&family=DM+Sans:wght@500;600',
        radius: '10px',
    },

    chatbot: {
        persona: 'Shaka Plasterer Assistant',
        avatar: '🛠️',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the room and finish — a standard skim is typically £4-£6 per m², rendering is quoted separately. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['skim', 'skimming', 'ceiling'], answer: "Yes, we skim walls and ceilings to a smooth, paint-ready finish." },
            { keywords: ['render', 'rendering', 'external'], answer: "We carry out external rendering in traditional and modern finishes, including K-rend and silicone render." },
            { keywords: ['dry lining', 'drylining', 'partition'], answer: "Yes, we install dry lining and stud partitions for new rooms and extensions." },
            { keywords: ['coving', 'cornice'], answer: "Yes, we fit and repair coving and cornice work to finish a room properly." },
            { keywords: ['crack', 'repair', 'damp'], answer: "We repair cracked or damaged plaster and can advise on damp-related issues before replastering." },
        ],
        fallbackAnswer: "That's a great question for our plastering team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    servicesRibbon: [
        { icon: 'layers', label: 'Skimming' },
        { icon: 'home', label: 'Rendering' },
        { icon: 'grid', label: 'Dry Lining' },
        { icon: 'hammer', label: 'Repairs' },
        { icon: 'ruler', label: 'Coving' },
    ],

    intro: {
        heading: 'Precision. Quality.<br>Every Time.',
        body: "Every job gets the same care, whether it's a single ceiling or a full house re-plaster — sharp corners, flat walls and a finish that's ready to paint.",
        checklist: ['Fully Insured', 'Free, No-Obligation Quotes', 'Tidy, Reliable Tradesmen'],
    },

    services: [
        { icon: 'layers', name: 'Skimming', desc: 'Skimming over existing plaster or plasterboard for a smooth, paint-ready finish.' },
        { icon: 'home', name: 'Rendering', desc: 'External rendering in traditional and modern finishes, including K-rend and silicone.' },
        { icon: 'grid', name: 'Dry Lining', desc: 'Dry lining and stud partitions for extensions, conversions and new rooms.' },
        { icon: 'hammer', name: 'Repairs', desc: 'Repairs for cracked, damaged or damp-affected plaster.' },
        { icon: 'ruler', name: 'Coving', desc: 'Coving and cornice fitting and repair to finish a room properly.' },
    ],

    work: [
        { img: '/assets/images/demos/plasterer-hero.jpg', pos: '50% 45%', label: 'Feature Wall', span: 'big', alt: 'A freshly plastered feature wall with a fireplace and recessed shelving' },
        { img: '/assets/images/demos/plasterer-wall.jpg', pos: '50% 40%', label: 'Full Room Skim', span: 'normal', alt: 'A smoothly plastered bedroom wall and ceiling' },
        { img: '/assets/images/demos/plasterer-hallway.jpg', pos: '50% 35%', label: 'Hallway & Stairs', span: 'normal', alt: 'A plastered hallway with staircase and front door' },
        { img: '/assets/images/demos/plasterer-kitchen.jpg', pos: '50% 40%', label: 'Kitchen Extension', span: 'normal', alt: 'A plastered kitchen extension with island and pendant lighting' },
        { img: '/assets/images/demos/plasterer-bathroom.jpg', pos: '50% 40%', label: 'Bathroom Refit', span: 'normal', alt: 'A plastered bathroom with freestanding bath and walk-in shower' },
    ],

    realResults: [
        { img: '/assets/images/demos/plasterer-kitchen.jpg', label: 'Kitchen Extension — Leeds', alt: 'A plastered kitchen extension with island and pendant lighting' },
        { img: '/assets/images/demos/plasterer-bathroom.jpg', label: 'Bathroom Refit — Wakefield', alt: 'A plastered bathroom with freestanding bath and walk-in shower' },
    ],

    whyChoose: [
        { icon: 'badge', name: 'Experience', desc: 'Years of plastering and rendering across West Yorkshire.' },
        { icon: 'ruler', name: 'Precision', desc: 'Sharp corners, flat walls, every time.' },
        { icon: 'sparkle', name: 'Clean Work', desc: 'Dust sheets down, site left tidy on every job.' },
        { icon: 'shieldCheck', name: 'Reliability', desc: 'Turn up on time and finish when we say we will.' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: "Walls came out silky smooth, honestly the best finish we've had.", author: 'F. Sugden, Leeds' },
        { stars: 5, text: 'Rendered the whole front of the house — looks brand new.', author: 'G. Micklethwaite, Huddersfield' },
        { stars: 4, text: 'Tidy, punctual and the ceiling repair is completely seamless.', author: 'O. Rishworth, Bradford' },
    ],

    faqs: [
        { q: 'How long before I can paint after plastering?', a: 'Freshly plastered walls typically need 5-7 days to dry before painting, depending on the room.' },
        { q: 'Do you offer free quotes?', a: 'Yes, we offer free, no-obligation quotes for most jobs.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all plastering and rendering work." },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
