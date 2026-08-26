window.SHAKA_TRADE = {
    id: 'joiner',
    trade: 'Joinery',
    businessName: 'Shaka Joiner',
    town: 'West Yorkshire',
    mainService: 'Bespoke Joinery & Carpentry',

    theme: {
        accent: '#8B5E34',
        accent2: '#B07A45',
        bg: '#FAF7F2',
        bgAlt: '#FFFDF9',
        text: '#3B2F2F',
        muted: '#81766D',
        headerBg: '#FAF7F2',
        headerText: '#3B2F2F',
        headingFont: "'Playfair Display', serif",
        bodyFont: "'Lora', serif",
        googleFont: 'family=Playfair+Display:wght@600;700&family=Lora:wght@400;500;600&family=Inter:wght@500;600',
        radius: '6px',
    },

    chatbot: {
        persona: 'Shaka Joiner Assistant',
        avatar: '🪚',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Get a quote', 'Book a callback', 'Ask a question', 'View our work'],
        knowledge: [
            { keywords: ['price', 'cost', 'much', 'quote'], answer: "Pricing depends on the piece — a fitted wardrobe typically starts from £800, bespoke work is quoted after we understand your space. Want me to arrange a quote?" },
            { keywords: ['area', 'cover', 'location', 'where'], answer: "We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area." },
            { keywords: ['staircase', 'stairs'], answer: "Yes, we design and build bespoke staircases, from a simple refurbishment to a full replacement." },
            { keywords: ['door', 'doors'], answer: "We supply and fit internal and external doors, made to measure where needed." },
            { keywords: ['kitchen'], answer: "Yes, we design and handcraft bespoke kitchens built around how you use your space." },
            { keywords: ['guarantee', 'warranty'], answer: "All our joinery comes with a workmanship guarantee — we'll confirm the details on your quote." },
        ],
        fallbackAnswer: "That's a great question for our joinery team — I'll take your details and someone will follow up with the specifics. Want me to arrange a callback?",
    },

    servicesBar: [
        { icon: 'furniture', label: 'Bespoke Joinery' },
        { icon: 'kitchen', label: 'Kitchens' },
        { icon: 'doorJoinery', label: 'Doors' },
        { icon: 'stairs', label: 'Staircases' },
        { icon: 'furniture', label: 'Fitted Furniture' },
    ],

    about: {
        eyebrow: 'Quality Woodwork',
        heading: 'Made to last.',
        body: "We're a local joinery team serving West Yorkshire, dedicated to quality craftsmanship and honest pricing. From bespoke furniture to full staircases, every piece is designed and built around your home.",
        checklist: ['Bespoke Designs', 'Premium Materials', 'Expert Craftsmanship', 'Attention to Detail'],
    },

    services: [
        { icon: 'furniture', name: 'Bespoke Joinery', desc: 'Made specifically for your home, from concept to finished piece.' },
        { icon: 'kitchen', name: 'Kitchens', desc: 'Handcrafted kitchens designed around how you live.' },
        { icon: 'stairs', name: 'Staircases', desc: 'Beautiful, functional bespoke staircases built to last.' },
        { icon: 'doorJoinery', name: 'Doors', desc: 'Traditional and contemporary timber doors, made to measure.' },
        { icon: 'furniture', name: 'Fitted Furniture', desc: 'Built-in storage designed precisely for your space.' },
        { icon: 'ruler', name: 'Architectural Joinery', desc: 'Detailed timber work for distinctive, characterful properties.' },
    ],

    process: [
        { num: '01', label: 'Consultation', desc: 'We discuss your ideas and requirements.' },
        { num: '02', label: 'Design', desc: 'Your project is carefully designed around your space.' },
        { num: '03', label: 'Craft', desc: 'Our joinery is made with precision and attention to detail.' },
        { num: '04', label: 'Installation', desc: 'Everything is professionally installed and finished.' },
    ],

    whyChoose: [
        { name: 'Bespoke', desc: 'Every project is made specifically for you.' },
        { name: 'Quality', desc: 'Premium timber and carefully selected materials.' },
        { name: 'Experience', desc: 'Traditional craftsmanship combined with modern techniques.' },
    ],

    work: [
        { img: '/assets/images/demos/joiner-kitchen.jpg', pos: '50% 45%', label: 'Bespoke Kitchen', alt: 'A handcrafted oak kitchen with a large central island' },
        { img: '/assets/images/demos/joiner-staircase.jpg', pos: '50% 35%', label: 'Staircase', alt: 'A close-up of a bespoke oak staircase newel post and balustrade' },
        { img: '/assets/images/demos/joiner-interior.jpg', pos: '50% 40%', label: 'Fitted Shelving', alt: 'Built-in oak shelving and cabinetry in a cosy living room' },
        { img: '/assets/images/demos/joiner-entrance.jpg', pos: '50% 40%', label: 'Timber Entrance', alt: 'A bespoke oak porch and front door on a period house' },
        { img: '/assets/images/demos/joiner-dovetail.jpg', pos: '50% 45%', label: 'Custom Furniture', alt: 'A close-up of a hand-cut dovetail joint on an oak drawer' },
        { img: '/assets/images/demos/joiner-craft.jpg', pos: '50% 35%', label: 'Handcrafted Detail', alt: 'A craftsman using a chisel to shape a timber joint' },
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
