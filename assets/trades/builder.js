window.SHAKA_TRADE = {
    id: 'builder',
    trade: 'Building',
    businessName: 'Shaka Builder',
    town: 'West Yorkshire',
    mainService: 'New Builds & Renovations',

    theme: {
        accent: '#F0651F',
        accent2: '#F58B4C',
        bg: '#FFFFFF',
        bgAlt: '#FBEAD9',
        text: '#141414',
        muted: 'rgba(20, 20, 20, 0.65)',
        headerBg: '#FFFFFF',
        headerText: '#141414',
        headingFont: "'Barlow Condensed', sans-serif",
        googleFont: 'family=Barlow+Condensed:wght@500;600;700;800',
        radius: '10px',
    },

    chatbot: {
        persona: 'Shaka Builder Assistant',
        avatar: '🧱',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Every build is different — a single-storey extension typically starts from £25,000, but we'll only know for sure after a site visit. Want me to arrange a free quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We work across Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['extension', 'extend'], answer: "Yes, single and double-storey extensions are one of our specialities, from initial design through to building control sign-off." },
            { keywords: ['planning', 'permission'], answer: "We can advise on planning permission and building regulations, and work with an architect if your project needs full planning drawings." },
            { keywords: ['guarantee', 'warranty', 'insured'], answer: "All structural work comes with a workmanship guarantee and we're fully insured for every project we take on." },
            { keywords: ['time', 'long', 'take'], answer: "A typical single-storey extension takes 10-14 weeks from breaking ground, depending on scope — we'll give you a firm timeline with your quote." },
        ],
        fallbackAnswer: "That's a great question for our building team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: 'home', name: 'New Builds' },
        { icon: 'ruler', name: 'Extensions' },
        { icon: 'roller', name: 'Renovations' },
        { icon: 'stairs', name: 'Loft Conversions' },
        { icon: 'calendar', name: 'Project Management' },
    ],

    checklist: [
        'Experienced & Qualified Team',
        'Transparent Pricing',
        'On Time & On Budget',
        'Fully Insured',
    ],

    stats: [
        { number: '15+', label: 'Years Experience' },
        { number: '250+', label: 'Projects Completed' },
        { number: '250+', label: 'Happy Clients' },
        { number: '100%', label: 'Satisfaction Rate' },
    ],

    projects: [
        { img: '/assets/images/demos/builder-livingroom.jpg', alt: 'Open-plan living room with fireplace and garden view — Leeds' },
        { img: '/assets/images/demos/builder-patio.jpg', alt: 'Rear extension with bi-fold doors onto a new patio — Huddersfield' },
        { img: '/assets/images/demos/builder-stairs.jpg', alt: 'Feature staircase in a full renovation — Bradford' },
        { img: '/assets/images/demos/builder-house.jpg', alt: 'Completed new-build exterior — Wakefield', pos: '80% 60%' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Our extension was managed brilliantly from start to finish — always kept us in the loop.', author: 'R. Coates, Leeds' },
        { stars: 5, text: 'Renovated our entire ground floor on time and the finish is fantastic.', author: 'L. Bramham, Huddersfield' },
        { stars: 4, text: 'Professional team, tidy site, and the brickwork matched our existing house perfectly.', author: 'T. Firth, Wakefield' },
    ],

    faqs: [
        { q: 'Do you handle planning permission?', a: 'We can advise and work alongside an architect where full planning drawings are needed.' },
        { q: 'How long does a typical extension take?', a: 'Most single-storey extensions take 10-14 weeks from breaking ground, depending on scope.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all structural and building work." },
        { q: 'Do you offer free quotes?', a: 'Yes, we offer free, no-obligation site visits and quotes for most projects.' },
    ],
};
