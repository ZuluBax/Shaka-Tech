window.SHAKA_TRADE = {
    id: 'landscaper',
    trade: 'Landscaping',
    businessName: 'Shaka Landscaper',
    town: 'West Yorkshire',
    mainService: 'Landscape Design & Garden Maintenance',

    theme: {
        accent: '#16A34A',
        accent2: '#4D9F45',
        bg: '#F7F8F2',
        bgAlt: '#FFFFFF',
        text: '#1F2921',
        muted: '#68736A',
        headerBg: '#F7F8F2',
        headerText: '#1F2921',
        headingFont: "'Raleway', sans-serif",
        bodyFont: "'Nunito Sans', sans-serif",
        googleFont: 'family=Raleway:wght@600;700;800&family=Nunito+Sans:wght@400;500;600&family=Cormorant+Garamond:wght@500;600',
        radius: '20px',
    },

    chatbot: {
        persona: 'Shaka Landscaper Assistant',
        avatar: '🌳',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'View our work'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the project — a patio typically starts from £1,800, full garden redesigns are quoted after a site visit. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['patio', 'paving'], answer: "Yes, we design and lay patios in a range of materials to suit your garden and budget." },
            { keywords: ['turf', 'lawn', 'grass'], answer: "We lay new turf and renovate tired lawns for a lush, even finish." },
            { keywords: ['fence', 'fencing'], answer: "Yes, we supply and fit fencing of all types, from simple panel fencing to bespoke screening." },
            { keywords: ['maintenance', 'mowing', 'upkeep'], answer: "We offer ongoing garden maintenance packages to keep your outdoor space looking its best year-round." },
        ],
        fallbackAnswer: "That's a great question for our landscaping team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    servicesRibbon: [
        { icon: 'leaf', label: 'Garden Design' },
        { icon: 'grid', label: 'Turfing' },
        { icon: 'brick', label: 'Patios' },
        { icon: 'flower', label: 'Planting' },
        { icon: 'grid', label: 'Fencing' },
        { icon: 'scissorsGroom', label: 'Maintenance' },
    ],

    intro: {
        heading: 'Beautiful gardens. Built to enjoy.',
        body: 'We design and create beautiful outdoor spaces that bring your garden to life.',
        checklist: ['Creative Design', 'Quality Materials', 'Reliable Service'],
    },

    services: {
        featured: { icon: 'leaf', name: 'Garden Design', desc: 'From initial ideas to a complete outdoor transformation.' },
        list: [
            { icon: 'grid', name: 'Turfing' },
            { icon: 'brick', name: 'Patios & Paving' },
            { icon: 'flower', name: 'Planting' },
            { icon: 'grid', name: 'Fencing' },
            { icon: 'scissorsGroom', name: 'Garden Maintenance' },
        ],
    },

    whyChoose: [
        { icon: 'sparkle', name: 'Design', desc: 'Thoughtfully designed gardens.' },
        { icon: 'shieldCheck', name: 'Quality', desc: 'Premium materials and planting.' },
        { icon: 'badge', name: 'Experience', desc: 'Professional landscaping expertise.' },
        { icon: 'heart', name: 'Care', desc: 'Gardens built to last and enjoy.' },
    ],

    work: [
        { img: '/assets/images/demos/landscaper-hero.jpg', pos: '50% 45%', label: 'Large Garden', span: 'big', alt: 'A landscaped garden pathway lined with box hedging and a timber pergola' },
        { img: '/assets/images/demos/landscaper-patio.jpg', pos: '50% 40%', label: 'Patio', span: 'tall', alt: 'An evening patio with outdoor seating, lighting and planting' },
        { img: '/assets/images/demos/landscaper-turfing.jpg', pos: '50% 50%', label: 'Planting', span: 'wide', alt: 'A landscaper laying a roll of new turf' },
        { img: '/assets/images/demos/landscaper-driveway.jpg', pos: '50% 55%', label: 'Garden Project', span: 'normal', alt: 'A curved block-paved driveway with garden lighting' },
        { img: '/assets/images/demos/landscaper-lawn.jpg', pos: '50% 60%', label: 'Lawn', span: 'normal', alt: 'A freshly cut, striped lawn bordered by planting' },
        { img: '/assets/images/demos/landscaper-pathway-lit.jpg', pos: '50% 40%', label: 'Pathway', span: 'wide', alt: 'A stepped garden pathway lit with lantern lighting at dusk' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Our garden has completely transformed. The design, workmanship and attention to detail were fantastic.', author: 'Sarah, West Yorkshire' },
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
