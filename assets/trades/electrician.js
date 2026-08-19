window.SHAKA_TRADE = {
    id: 'electrician',
    trade: 'Electrical',
    businessName: 'BrightSpark Electrical',
    town: 'West Yorkshire',
    mainService: 'Rewiring & Electrical Installations',

    theme: {
        accent: '#F2C94C',
        accent2: '#FFE08A',
        bg: '#0D0D10',
        bgAlt: '#18181C',
        text: '#F0F0F2',
        muted: 'rgba(240, 240, 242, 0.65)',
        headingFont: "'Chakra Petch', sans-serif",
        googleFont: 'family=Chakra+Petch:wght@500;600;700',
        radius: '10px',
    },

    chatbot: {
        persona: 'BrightSpark Assistant',
        avatar: '⚡',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the job — a consumer unit upgrade is typically £250-£450, a full rewire is quoted after a survey. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['emergency', 'urgent', 'power', 'trip', 'tripping'], answer: "Power loss and tripping circuits are treated as priority call-outs — I can get your details and flag this as urgent." },
            { keywords: ['ev', 'charger', 'car'], answer: "Yes, we install EV home chargers, including OZEV grant-eligible installations." },
            { keywords: ['certificate', 'eicr', 'inspection'], answer: "We carry out full electrical inspections and issue EICR certificates for homes and landlords." },
            { keywords: ['guarantee', 'warranty', 'insured'], answer: "All work is certified and guaranteed, and we're fully insured NICEIC-registered electricians." },
        ],
        fallbackAnswer: "That's a great question for our electrical team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🔌', name: 'Rewiring', desc: 'Full and partial house rewires carried out safely and tidily.' },
        { icon: '📦', name: 'Consumer Units', desc: 'Consumer unit upgrades to meet the latest safety standards.' },
        { icon: '💡', name: 'Lighting', desc: 'Indoor and outdoor lighting design and installation.' },
        { icon: '🔲', name: 'Sockets', desc: 'Additional sockets and switches fitted neatly, wherever you need them.' },
        { icon: '🔋', name: 'EV Chargers', desc: 'Home EV charger installation, including grant-eligible options.' },
        { icon: '📋', name: 'Electrical Inspections', desc: 'EICR reports and safety inspections for homeowners and landlords.' },
    ],

    gallery: [
        { icon: '📦', caption: 'Consumer unit upgrade — Leeds' },
        { icon: '🔋', caption: 'EV charger install — Huddersfield' },
        { icon: '💡', caption: 'Outdoor lighting — Bradford' },
        { icon: '🔌', caption: 'Full rewire — Wakefield' },
        { icon: '🔲', caption: 'Socket upgrade — Halifax' },
        { icon: '📋', caption: 'Landlord EICR — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Sorted our tripping circuit the same day — quick, safe and explained everything clearly.', author: 'A. Marsden, Leeds' },
        { stars: 5, text: 'EV charger fitted neatly in an afternoon. Really professional throughout.', author: 'D. Sutcliffe, Huddersfield' },
        { stars: 4, text: 'Full rewire done with minimal disruption and a fair price.', author: 'K. Illingworth, Bradford' },
    ],

    faqs: [
        { q: 'How quickly can you respond to a power emergency?', a: 'Emergency call-outs are prioritised — most are attended the same day.' },
        { q: 'Are you NICEIC registered?', a: "Yes, all our electricians are fully certified and NICEIC-registered." },
        { q: 'Do you install EV chargers?', a: 'Yes, including OZEV grant-eligible home installations.' },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
