window.SHAKA_TRADE = {
    id: 'plumber',
    trade: 'Plumbing',
    businessName: 'Shaka Plumber',
    town: 'West Yorkshire',
    mainService: 'Emergency Plumbing & Bathrooms',

    theme: {
        accent: '#0057D9',
        accent2: '#1479F9',
        bg: '#FFFFFF',
        bgAlt: '#F4F7FA',
        text: '#123B78',
        muted: '#667085',
        headerBg: '#FFFFFF',
        headerText: '#123B78',
        headingFont: "'Montserrat', sans-serif",
        bodyFont: "'Source Sans 3', sans-serif",
        googleFont: 'family=Montserrat:wght@600;700;800&family=Source+Sans+3:wght@400;500;600',
        radius: '14px',
    },

    chatbot: {
        persona: 'Shaka Plumber Assistant',
        avatar: '🚰',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the job — a call-out visit starts from £65, bathroom installs are quoted after a free survey. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['emergency', 'urgent', 'leak', 'burst', 'flooding'], answer: "Leaks and burst pipes are treated as priority call-outs — I can get your details and flag this as urgent." },
            { keywords: ['bathroom', 'shower', 'suite'], answer: "Yes, we design and fit full bathroom suites, from a simple refresh to a complete refit." },
            { keywords: ['radiator', 'heating', 'boiler'], answer: "We handle boiler installations, servicing and repairs, plus radiators and general heating work." },
            { keywords: ['hour', 'open', 'time', '24'], answer: "Our office team is available Mon-Fri 8am-6pm, but this AI assistant can take enquiries and emergency call-outs any time, day or night." },
        ],
        fallbackAnswer: "That's a great question for our plumbing team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    heroChecklist: ['Boiler Installations', 'Bathroom Suites', 'Leaks & Repairs', 'Emergency Plumbing'],

    servicesBar: [
        { icon: 'wrench', label: 'Plumbing' },
        { icon: 'boiler', label: 'Boiler Services' },
        { icon: 'bath', label: 'Bathrooms' },
        { icon: 'kitchen', label: 'Kitchens' },
        { icon: 'alertTriangle', label: 'Emergency' },
    ],

    whyChoose: {
        eyebrow: 'Here When You Need Us',
        heading: 'Professional plumbing without the hassle.',
        body: "We're a local plumbing team serving West Yorkshire, dedicated to fast response and honest pricing. From a dripping tap to a full bathroom, we treat every job like it's our own home.",
        checklist: ['No Call Out Charge', 'Competitive Prices', 'Work Guaranteed', '24/7 Emergency Service'],
    },

    services: [
        { icon: 'wrench', name: 'General Plumbing', desc: 'Repairs, installations and maintenance for the whole home.' },
        { icon: 'boiler', name: 'Boiler Services', desc: 'Installation, servicing and repairs from certified engineers.' },
        { icon: 'bath', name: 'Bathroom Plumbing', desc: 'Complete bathroom plumbing solutions, from suite to tiling.' },
        { icon: 'kitchen', name: 'Kitchen Plumbing', desc: 'Sinks, taps, appliances and pipework fitted neatly.' },
        { icon: 'droplet', name: 'Leaks & Repairs', desc: 'Fast diagnosis and professional repairs before small problems grow.' },
        { icon: 'alertTriangle', name: 'Emergency Plumbing', desc: 'Rapid response call-outs when you need us most.' },
    ],

    trustCards: [
        { icon: 'shieldCheck', name: 'Fully Qualified', desc: 'Professional plumbing expertise you can trust.' },
        { icon: 'badge', name: 'Work Guaranteed', desc: 'Quality workmanship you can rely on.' },
        { icon: 'star', name: 'Competitive Prices', desc: 'Clear and fair pricing, with no surprises.' },
        { icon: 'alertTriangle', name: '24/7 Emergency', desc: 'Help when you need it most, day or night.' },
    ],

    work: [
        { img: '/assets/images/demos/plumber-bathroom.jpg', pos: '45% 55%', label: 'Bathroom Installation', alt: 'A modern freestanding bathtub and walk-in shower installation' },
        { img: '/assets/images/demos/plumber-kitchen.jpg', pos: '50% 40%', label: 'Kitchen Plumbing', alt: 'A matte black kitchen mixer tap over a stone sink' },
        { img: '/assets/images/demos/plumber-boiler.jpg', pos: '50% 35%', label: 'Boiler Installation', alt: 'A modern wall-mounted combi boiler with copper pipework' },
        { img: '/assets/images/demos/plumber-repair.jpg', pos: '55% 40%', label: 'Plumbing Repair', alt: 'A plumber using a wrench to repair pipework under a sink' },
        { img: '/assets/images/demos/plumber-drainage.jpg', pos: '40% 45%', label: 'Outdoor Drainage', alt: 'A guttering downpipe fitted to the outside of a house' },
        { img: '/assets/images/demos/plumber-van.jpg', pos: '50% 30%', label: 'Professional Service', alt: 'A branded Shaka Plumber van parked on a residential street' },
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
