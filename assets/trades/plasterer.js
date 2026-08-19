window.SHAKA_TRADE = {
    id: 'plasterer',
    trade: 'Plastering',
    businessName: 'SmoothFinish Plastering',
    town: 'West Yorkshire',
    mainService: 'Plastering & Rendering',

    theme: {
        accent: '#B08A5A',
        accent2: '#8C6B42',
        bg: '#F3EEE6',
        bgAlt: '#EAE1D2',
        text: '#2B2620',
        muted: 'rgba(43, 38, 32, 0.65)',
        headingFont: "'Manrope', sans-serif",
        googleFont: 'family=Manrope:wght@500;600;700',
        radius: '16px',
    },

    chatbot: {
        persona: 'SmoothFinish Assistant',
        avatar: '🛠️',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the room and finish — a standard skim is typically £4-£6 per m², rendering is quoted separately. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['skim', 'skimming', 'ceiling'], answer: "Yes, we skim walls and ceilings to a smooth, paint-ready finish." },
            { keywords: ['render', 'rendering', 'external'], answer: "We carry out external rendering in traditional and modern finishes, including K-rend and silicone render." },
            { keywords: ['dry lining', 'drylining', 'partition'], answer: "Yes, we install dry lining and stud partitions for new rooms and extensions." },
            { keywords: ['crack', 'repair', 'damp'], answer: "We repair cracked or damaged plaster and can advise on damp-related issues before replastering." },
        ],
        fallbackAnswer: "That's a great question for our plastering team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🧱', name: 'Internal Plastering', desc: 'Smooth, professional plastering for any room in the house.' },
        { icon: '🎨', name: 'Skimming', desc: 'Skimming over existing plaster or plasterboard for a fresh finish.' },
        { icon: '🏠', name: 'Rendering', desc: 'External rendering in traditional and modern finishes.' },
        { icon: '📐', name: 'Dry Lining', desc: 'Dry lining and stud partitions for extensions and conversions.' },
        { icon: '🔧', name: 'Repairs', desc: 'Repairs for cracked, damaged or damp-affected plaster.' },
        { icon: '⬜', name: 'Ceiling Work', desc: 'Ceiling skimming, repairs and artex removal.' },
    ],

    gallery: [
        { icon: '🧱', caption: 'Full room re-plaster — Leeds' },
        { icon: '🏠', caption: 'External render — Huddersfield' },
        { icon: '📐', caption: 'Dry lining extension — Bradford' },
        { icon: '⬜', caption: 'Ceiling skim — Wakefield' },
        { icon: '🔧', caption: 'Crack repair — Halifax' },
        { icon: '🎨', caption: 'Plasterboard skim — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Walls came out silky smooth, honestly the best finish we\'ve had.', author: 'F. Sugden, Leeds' },
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
