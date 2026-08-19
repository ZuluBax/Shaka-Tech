window.SHAKA_TRADE = {
    id: 'builder',
    trade: 'Building',
    businessName: 'Ridgeline Builders',
    town: 'West Yorkshire',
    mainService: 'Extensions & Renovations',

    theme: {
        accent: '#4A6FA5',
        accent2: '#8FB2DE',
        bg: '#14171A',
        bgAlt: '#1D2226',
        text: '#E6E9EC',
        muted: 'rgba(230, 233, 236, 0.65)',
        headingFont: "'Barlow Condensed', sans-serif",
        googleFont: 'family=Barlow+Condensed:wght@500;600;700',
        radius: '6px',
    },

    chatbot: {
        persona: 'Ridgeline Builders Assistant',
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
        { icon: '🏗️', name: 'Extensions', desc: 'Single and double-storey extensions designed around how you live.' },
        { icon: '🔨', name: 'Renovations', desc: 'Full property renovations, from a single room to a whole house.' },
        { icon: '🏠', name: 'New Builds', desc: 'Ground-up new build projects, managed start to finish.' },
        { icon: '🧱', name: 'Structural Work', desc: 'Structural alterations, steel beams and load-bearing changes.' },
        { icon: '🧰', name: 'Brickwork', desc: 'Quality brickwork and blockwork for extensions and repairs.' },
        { icon: '📈', name: 'Property Improvements', desc: 'Loft conversions, garage conversions and general improvements.' },
    ],

    gallery: [
        { icon: '🏗️', caption: 'Rear extension — Leeds' },
        { icon: '🏠', caption: 'Full renovation — Huddersfield' },
        { icon: '🧱', caption: 'Loft conversion — Bradford' },
        { icon: '🔨', caption: 'Kitchen extension — Wakefield' },
        { icon: '🧰', caption: 'Garage conversion — Halifax' },
        { icon: '📐', caption: 'New build — Dewsbury' },
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
