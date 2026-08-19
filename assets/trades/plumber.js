window.SHAKA_TRADE = {
    id: 'plumber',
    trade: 'Plumbing',
    businessName: 'FlowRight Plumbing',
    town: 'West Yorkshire',
    mainService: 'Emergency Plumbing & Bathrooms',

    theme: {
        accent: '#2F9BDE',
        accent2: '#8FD3F4',
        bg: '#0E141C',
        bgAlt: '#17212D',
        text: '#E8EEF4',
        muted: 'rgba(232, 238, 244, 0.65)',
        headingFont: "'Poppins', sans-serif",
        googleFont: 'family=Poppins:wght@500;600;700',
        radius: '20px',
    },

    chatbot: {
        persona: 'FlowRight Assistant',
        avatar: '🚰',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the job — a call-out visit starts from £65, bathroom installs are quoted after a free survey. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['emergency', 'urgent', 'leak', 'burst', 'flooding'], answer: "Leaks and burst pipes are treated as priority call-outs — I can get your details and flag this as urgent." },
            { keywords: ['bathroom', 'shower', 'suite'], answer: "Yes, we design and fit full bathroom suites, from a simple refresh to a complete refit." },
            { keywords: ['radiator', 'heating', 'boiler'], answer: "We handle radiator installs, repairs and general heating work — for full boiler swaps we'll advise on the best option for your home." },
            { keywords: ['hour', 'open', 'time', '24'], answer: "Our office team is available Mon-Fri 8am-6pm, but this AI assistant can take enquiries and emergency call-outs any time, day or night." },
        ],
        fallbackAnswer: "That's a great question for our plumbing team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🚨', name: 'Emergency Plumbing', desc: 'Fast, reliable call-outs for leaks, blockages and burst pipes.' },
        { icon: '💧', name: 'Leaks', desc: 'Leak detection and repair before small problems become big ones.' },
        { icon: '🔧', name: 'Burst Pipes', desc: 'Rapid response to burst pipes to limit damage to your home.' },
        { icon: '🛁', name: 'Bathrooms', desc: 'Full bathroom design and installation, from suite to tiling.' },
        { icon: '🔥', name: 'Radiators', desc: 'Radiator installation, repair and power flushing.' },
        { icon: '🚿', name: 'General Plumbing', desc: 'Taps, toilets, washing machines and everything in between.' },
    ],

    gallery: [
        { icon: '🛁', caption: 'Bathroom refit — Leeds' },
        { icon: '💧', caption: 'Emergency leak repair — Huddersfield' },
        { icon: '🔥', caption: 'Radiator upgrade — Bradford' },
        { icon: '🚿', caption: 'En-suite install — Wakefield' },
        { icon: '🔧', caption: 'Burst pipe repair — Halifax' },
        { icon: '🚰', caption: 'Kitchen plumbing — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Had a burst pipe on a Sunday and they were out within the hour. Lifesavers.', author: 'H. Normanton, Leeds' },
        { stars: 5, text: 'New bathroom looks fantastic — tidy work and finished when they said.', author: 'C. Oldroyd, Huddersfield' },
        { stars: 4, text: 'Fixed our leak quickly and explained exactly what had gone wrong.', author: 'P. Senior, Bradford' },
    ],

    faqs: [
        { q: 'How quickly can you respond to a burst pipe?', a: 'Emergency call-outs are prioritised — most are attended the same day.' },
        { q: 'Do you offer free quotes for bathrooms?', a: 'Yes, we offer free, no-obligation surveys and quotes for bathroom installs.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all plumbing work." },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
