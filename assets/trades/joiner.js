window.SHAKA_TRADE = {
    id: 'joiner',
    trade: 'Joinery',
    businessName: 'Heritage Joinery Co.',
    town: 'West Yorkshire',
    mainService: 'Bespoke Joinery & Staircases',

    theme: {
        accent: '#B07D3A',
        accent2: '#D9AF73',
        bg: '#1A140E',
        bgAlt: '#251D14',
        headingFont: "'Playfair Display', serif",
        googleFont: 'family=Playfair+Display:wght@600;700;800',
        radius: '8px',
    },

    chatbot: {
        persona: 'Heritage Joinery Assistant',
        avatar: '🪚',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the piece — a fitted wardrobe typically starts from £800, bespoke work is quoted after we understand your space. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['staircase', 'stairs'], answer: "Yes, we design and build bespoke staircases, from a simple refurbishment to a full replacement." },
            { keywords: ['door', 'doors'], answer: "We supply and fit internal and external doors, made to measure where needed." },
            { keywords: ['flooring', 'floor'], answer: "Yes, we fit solid wood, engineered and laminate flooring to a high standard." },
            { keywords: ['guarantee', 'warranty'], answer: "All our joinery comes with a workmanship guarantee — we'll confirm the details on your quote." },
        ],
        fallbackAnswer: "That's a great question for our joinery team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🪑', name: 'Bespoke Furniture', desc: 'Handmade furniture built to fit your space exactly.' },
        { icon: '🚪', name: 'Doors', desc: 'Internal and external doors supplied and fitted to measure.' },
        { icon: '🪵', name: 'Flooring', desc: 'Solid wood, engineered and laminate flooring, expertly fitted.' },
        { icon: '🪜', name: 'Staircases', desc: 'Bespoke staircase design, building and refurbishment.' },
        { icon: '🗄️', name: 'Fitted Storage', desc: 'Fitted wardrobes, alcove units and made-to-measure storage.' },
        { icon: '🔨', name: 'General Joinery', desc: 'Skirting, architrave and general carpentry, done properly.' },
    ],

    gallery: [
        { icon: '🪜', caption: 'Staircase refurbishment — Leeds' },
        { icon: '🗄️', caption: 'Fitted wardrobes — Huddersfield' },
        { icon: '🪵', caption: 'Solid wood flooring — Bradford' },
        { icon: '🚪', caption: 'Bespoke front door — Wakefield' },
        { icon: '🪑', caption: 'Built-in furniture — Halifax' },
        { icon: '🔨', caption: 'Alcove shelving — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Our new staircase is beautiful — real craftsmanship and attention to detail.', author: 'E. Longbottom, Leeds' },
        { stars: 5, text: 'Fitted wardrobes fit perfectly into an awkward alcove. Couldn’t be happier.', author: 'N. Garforth, Huddersfield' },
        { stars: 4, text: 'Lovely flooring, fitted neatly and finished on schedule.', author: 'W. Ramsden, Bradford' },
    ],

    faqs: [
        { q: 'Do you do bespoke, made-to-measure work?', a: 'Yes, most of our work is bespoke and built to fit your exact space.' },
        { q: 'Do you offer free quotes?', a: 'Yes, we offer free, no-obligation quotes for most jobs.' },
        { q: 'Are you insured?', a: "Yes, we're fully insured for all joinery work carried out." },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
