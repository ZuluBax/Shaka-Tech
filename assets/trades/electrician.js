window.SHAKA_TRADE = {
    id: 'electrician',
    trade: 'Electrical',
    businessName: 'Shaka Electrician',
    town: 'West Yorkshire',
    mainService: 'Rewiring & Electrical Installations',

    theme: {
        accent: '#FACC15',
        accent2: '#FFD600',
        bg: '#080A0D',
        bgAlt: '#11151A',
        text: '#F5F7F8',
        muted: '#AAB3BC',
        headerBg: '#080A0D',
        headerText: '#F5F7F8',
        headingFont: "'Rajdhani', sans-serif",
        bodyFont: "'Poppins', sans-serif",
        googleFont: 'family=Rajdhani:wght@500;600;700&family=Poppins:wght@400;500;600',
        radius: '10px',
    },

    chatbot: {
        persona: 'Shaka Electrician Assistant',
        avatar: '⚡',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the job — a consumer unit upgrade is typically £250-£450, a full rewire is quoted after a survey. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['emergency', 'urgent', 'power', 'trip', 'tripping', 'fault'], answer: "Power loss, tripping circuits and faults are treated as priority call-outs — I can get your details and flag this as urgent." },
            { keywords: ['ev', 'charger', 'car'], answer: "Yes, we install EV home chargers, including OZEV grant-eligible installations." },
            { keywords: ['certificate', 'eicr', 'inspection'], answer: "We carry out full electrical inspections and issue EICR certificates for homes and landlords." },
            { keywords: ['guarantee', 'warranty', 'insured'], answer: "All work is certified and guaranteed, and we're fully insured NICEIC-registered electricians." },
            { keywords: ['smart', 'automation', 'app'], answer: "Yes — we design and install smart lighting, smart heating controls and full home automation, alongside standard electrical work." },
        ],
        fallbackAnswer: "That's a great question for our electrical team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: 'plug', name: 'Electrical Installations', desc: 'Full and partial rewires, consumer unit upgrades and new circuits, installed safely and tidily.' },
        { icon: 'wrench', name: 'Maintenance & Repairs', desc: 'Ongoing maintenance and repairs to keep your electrics safe and reliable.' },
        { icon: 'bulb', name: 'Lighting', desc: 'Indoor and outdoor lighting design and installation, from downlights to smart lighting.' },
        { icon: 'search', name: 'Fault Finding', desc: 'Fast, accurate fault finding for trips, power loss and intermittent faults.' },
        { icon: 'car', name: 'EV Charger Installation', desc: 'Home EV charger installation, including OZEV grant-eligible options.' },
        { icon: 'clipboard', name: 'Electrical Inspections', desc: 'EICR reports and safety inspections for homeowners and landlords.' },
    ],

    trustPoints: [
        { icon: 'shieldCheck', label: 'NICEIC<br>Approved' },
        { icon: 'badge', label: 'Fully<br>Insured' },
        { icon: 'star', label: 'Work<br>Guaranteed' },
        { icon: 'bolt', label: '24/7 Emergency<br>Service' },
    ],

    smartFeatures: [
        { icon: 'bulb', label: 'Smart Lighting', desc: 'App and voice-controlled lighting scenes for every room.' },
        { icon: 'fan', label: 'Smart Heating', desc: 'Smart thermostats and zone controls for a more efficient home.' },
        { icon: 'car', label: 'EV Charging', desc: 'Smart EV chargers that schedule around off-peak tariffs.' },
        { icon: 'smartphone', label: 'Home Automation', desc: 'One app to control lighting, heating and security together.' },
    ],

    work: [
        { img: '/assets/images/demos/electrician-consumer-unit.jpg', pos: '50% 35%', label: 'Consumer Unit Upgrade', alt: 'An electrician working on a consumer unit, testing circuits with a screwdriver' },
        { img: '/assets/images/demos/electrician-pendant-lights.jpg', pos: '50% 45%', label: 'Feature Lighting', alt: 'Cage-style pendant lights glowing warmly above a kitchen island' },
        { img: '/assets/images/demos/electrician-cove-lighting.jpg', pos: '50% 40%', label: 'Ambient Lighting', alt: 'Warm cove lighting built into a modern ceiling and kitchen units' },
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
