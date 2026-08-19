window.SHAKA_TRADE = {
    id: 'dog-walker',
    trade: 'Dog Walking & Grooming',
    businessName: 'Tail Waggers Pet Care',
    town: 'West Yorkshire',
    mainService: 'Dog Walking & Grooming',

    theme: {
        accent: '#2BB3A3',
        accent2: '#8CE0D3',
        bg: '#0B1616',
        bgAlt: '#122120',
        text: '#E4F3F0',
        muted: 'rgba(228, 243, 240, 0.65)',
        headingFont: "'Fredoka', sans-serif",
        googleFont: 'family=Fredoka:wght@500;600;700',
        radius: '26px',
    },

    chatbot: {
        persona: 'Tail Waggers Assistant',
        avatar: '🐕',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'Emergency repair'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "A 30-minute solo walk starts from £14, group walks and grooming packages vary by size and coat. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['groom', 'grooming', 'bath', 'nail'], answer: "Yes, we offer full grooming including bathing, brushing, nail trimming and styling for all breeds." },
            { keywords: ['walk', 'walking', 'daily'], answer: "We offer solo and small-group walks, daily or as often as you need, with full updates and photos after each visit." },
            { keywords: ['insured', 'dbs', 'safe'], answer: "All our walkers and groomers are insured, DBS-checked and experienced with dogs of every size and temperament." },
            { keywords: ['puppy', 'sitting', 'visit'], answer: "Yes, we offer puppy visits and pet sitting for when you're away or working long hours." },
        ],
        fallbackAnswer: "That's a great question for our pet care team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    services: [
        { icon: '🐕', name: 'Dog Walking', desc: 'Solo and small-group walks, tailored to your dog\'s energy and needs.' },
        { icon: '🛁', name: 'Dog Grooming', desc: 'Full grooming service including bathing, brushing and styling.' },
        { icon: '🐾', name: 'Puppy Visits', desc: 'Short, frequent visits to keep young puppies happy and settled.' },
        { icon: '🏠', name: 'Pet Sitting', desc: 'In-home pet sitting for holidays, work trips and long days.' },
        { icon: '✂️', name: 'Nail Trimming', desc: 'Gentle, stress-free nail trimming for dogs of all sizes.' },
        { icon: '✨', name: 'Bathing & Styling', desc: 'Breed-appropriate styling and a fresh, clean finish every time.' },
    ],

    gallery: [
        { icon: '🐕', caption: 'Morning group walk — Leeds' },
        { icon: '🛁', caption: 'Full groom & style — Huddersfield' },
        { icon: '🐾', caption: 'Puppy visit — Bradford' },
        { icon: '✂️', caption: 'Nail trim session — Wakefield' },
        { icon: '🏠', caption: 'Holiday pet sitting — Halifax' },
        { icon: '✨', caption: 'Bath & blow dry — Dewsbury' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Our dog absolutely adores his daily walk — always comes back happy and tired out.', author: 'M. Ellison, Leeds' },
        { stars: 5, text: 'Best groom she\'s ever had, and they were so gentle and patient with her.', author: 'R. Kellett, Huddersfield' },
        { stars: 4, text: 'Reliable, friendly and always send photo updates. Highly recommend.', author: 'S. Waddington, Bradford' },
    ],

    faqs: [
        { q: 'Are your walkers insured and DBS-checked?', a: 'Yes, every walker and groomer is fully insured and DBS-checked.' },
        { q: 'Do you offer group or solo walks?', a: 'Both — we offer solo walks and small, carefully matched group walks.' },
        { q: 'How do I know my dog is safe?', a: 'You get a photo and written update after every walk or grooming session.' },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
