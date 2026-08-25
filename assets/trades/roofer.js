/**
 * Trade configuration for the Roofer demo (Shaka Roofer).
 * Drives the AI chatbot's persona/knowledge and the personalisation panel.
 * To add a new trade, copy this file, adjust the fields, and build a
 * matching /demos/{id}/ page using the same reusable CSS classes.
 */
window.SHAKA_TRADE = {
    id: 'roofer',
    trade: 'Roofing',
    businessName: 'Shaka Roofer',
    town: 'West Yorkshire',
    mainService: 'Roof Repairs & Replacement',

    theme: {
        accent: '#60A5FA',
        accent2: '#38BDF8',
        bg: '#0F172A',
        bgAlt: '#1E3A8A',
        text: '#F8FAFC',
        headerBg: '#0F172A',
        headerText: '#F8FAFC',
        headingFont: "'Oswald', sans-serif",
        bodyFont: "'Open Sans', sans-serif",
        googleFont: 'family=Oswald:wght@500;600;700&family=Open+Sans:wght@400;500;600;700',
        radius: '8px',
    },

    chatbot: {
        persona: 'Apex Roofing Assistant',
        avatar: '🏠',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the job — a small repair might be £150-£350, a full re-roof is usually quoted after a free site visit. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['emergency', 'urgent', 'leak', 'leaking'], answer: "Leaks and storm damage are treated as priority call-outs — I can get your details and flag this as urgent." },
            { keywords: ['guarantee', 'warranty'], answer: "All roofing work comes with a workmanship guarantee — the length depends on the job type, we'll confirm on your quote." },
            { keywords: ['flat roof', 'flat roofing'], answer: "Yes, we install and repair flat roofing including EPDM and felt systems." },
            { keywords: ['gutter', 'guttering', 'fascia', 'soffit'], answer: "We handle guttering, fascias and soffits, either as standalone jobs or alongside a re-roof." },
            { keywords: ['hour', 'open', 'time'], answer: "Our office team is available Mon-Fri 8am-6pm, but this AI assistant can take enquiries and emergency call-outs any time, day or night." },
        ],
        fallbackAnswer: "That's a great question for our roofing team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: 'home', name: 'Roof Repairs', desc: 'Fast, reliable repairs for leaks, storm damage and worn roofing.' },
        { icon: 'roofNew', name: 'New Roofs', desc: 'Full roof replacements built to last, with a workmanship guarantee.' },
        { icon: 'cloudRain', name: 'Flat Roofing', desc: 'EPDM and felt flat roof installation and repair.' },
        { icon: 'droplet', name: 'Guttering', desc: 'Gutter clearing, repair and replacement to keep water moving.' },
        { icon: 'ruler', name: 'Fascias & Soffits', desc: 'Fresh, low-maintenance fascias and soffits for a finished look.' },
        { icon: 'alertTriangle', name: 'Emergency Repairs', desc: 'Priority call-outs for leaks and storm damage.' },
    ],

    gallery: [
        { icon: 'home', caption: 'Full re-roof — Leeds' },
        { icon: 'wrench', caption: 'Emergency leak repair — Huddersfield' },
        { icon: 'cloudRain', caption: 'Flat roof install — Bradford' },
        { icon: 'droplet', caption: 'Guttering upgrade — Wakefield' },
        { icon: 'ruler', caption: 'Fascia & soffit refresh — Halifax' },
        { icon: 'hammer', caption: 'New build roofing — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Sorted our leak the same day we called. Really professional and tidy work.', author: 'S. Whitfield, Leeds' },
        { stars: 5, text: 'Full re-roof done on time and on budget. Would recommend to anyone locally.', author: 'M. Hardaker, Huddersfield' },
        { stars: 4, text: 'Great communication throughout and a fair price for the guttering work.', author: 'J. Ackroyd, Bradford' },
    ],

    faqs: [
        { q: 'How quickly can you respond to an emergency leak?', a: 'Emergency call-outs are prioritised — most are attended the same day, depending on location and severity.' },
        { q: 'Do you offer free quotes?', a: 'Yes, we offer free, no-obligation site visits and quotes for most jobs.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all roofing work carried out." },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
