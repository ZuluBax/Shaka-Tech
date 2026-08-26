window.SHAKA_TRADE = {
    id: 'dog-walker',
    trade: 'Dog Walking & Grooming',
    businessName: 'Shaka Dog Walker & Groomer',
    town: 'West Yorkshire',
    mainService: 'Dog Walking & Grooming',

    theme: {
        accent: '#D9466F',
        accent2: '#F3A6B8',
        bg: '#FAF7F2',
        bgAlt: '#FFFFFF',
        text: '#292827',
        muted: '#6F6B68',
        headerBg: '#FAF7F2',
        headerText: '#292827',
        headingFont: "'Baloo 2', sans-serif",
        bodyFont: "'DM Sans', sans-serif",
        googleFont: 'family=Baloo+2:wght@700;800&family=DM+Sans:wght@400;500;600&family=Quicksand:wght@500;600',
        radius: '20px',
    },

    chatbot: {
        persona: 'Shaka Dog Walker Assistant',
        avatar: '🐾',
        greeting: "👋 Hi! I'm the AI assistant for {business}. How can I help?",
        quickOptions: ['Book a walk', 'Book grooming', 'Ask a question', 'Get a quote'],
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
        { icon: 'paw', name: 'Dog Walking', desc: "Fun, safe walks tailored to your dog's needs." },
        { icon: 'scissorsGroom', name: 'Grooming', desc: 'Professional grooming to keep your dog looking and feeling great.' },
        { icon: 'calendar', name: 'Pet Sitting', desc: "Reliable care while you're away." },
        { icon: 'heart', name: 'Puppy Care', desc: 'Patient, loving support for your newest family member.' },
        { icon: 'home', name: 'Home Visits', desc: 'Care and attention in the comfort of their own home.' },
    ],

    trust: {
        heading: "They're Not Just Pets.<br><span class=\"accent-text\">They're Family.</span>",
        body: "That's why we treat every dog with the same love, patience and attention we'd want for our own.",
        checklist: ['Fully Insured', 'Experienced &amp; Caring', 'Individual Attention', 'Flexible Bookings'],
    },

    walking: {
        heading: 'Adventures Start Here.',
        body: "Safe, fun and stimulating walks designed around your dog's personality and energy.",
        list: ['Solo Walks', 'Group Walks', 'Puppy Walks', 'Adventure Walks'],
    },

    grooming: {
        heading: 'Look Good. Feel Good.',
        body: "From a fresh wash to a full groom, we'll make sure your dog leaves looking and feeling their best.",
        list: ['Bath &amp; Dry', 'Full Groom', 'Brush &amp; Deshed', 'Nail Trimming'],
    },

    dogs: [
        { name: 'Milo', breed: 'Cockapoo', img: '/assets/images/demos/dogwalker-hero.jpg', pos: '65% 35%', bio: "Milo loves his afternoon walks and never turns down a belly rub. He's one of our regulars and always greets us with a wagging tail.", fact: 'Favourite thing: chasing his tennis ball.' },
        { name: 'Bella', breed: 'Golden Retriever', img: '/assets/images/demos/dogwalker-family.jpg', pos: '60% 30%', bio: "Bella is gentle, friendly and loves nothing more than a cuddle on the sofa after a long walk. She's great with other dogs too.", fact: 'Favourite thing: cuddles on the sofa.' },
        { name: 'Rosie', breed: 'Cockapoo Puppy', img: '/assets/images/demos/dogwalker-puppy.jpg', pos: '50% 40%', bio: "Rosie is the newest member of the pack — still learning the ropes, full of energy and always up for playtime with her rope toy.", fact: 'Favourite thing: her pink rope toy.' },
        { name: 'Archie', breed: 'Dalmatian', img: '/assets/images/demos/dogwalker-walk.jpg', pos: '50% 45%', bio: "Archie has boundless energy and loves a good run in the park. Ball games are his absolute favourite part of the walk.", fact: 'Favourite thing: chasing his ball in the park.' },
    ],

    approach: [
        { num: '01', label: 'Meet', desc: 'We get to know you and your dog.' },
        { num: '02', label: 'Understand', desc: 'We learn their personality and routine.' },
        { num: '03', label: 'Care', desc: 'We provide personalised attention.' },
        { num: '04', label: 'Happy', desc: 'You get a happy, well-cared-for dog.' },
    ],

    work: [
        { img: '/assets/images/demos/dogwalker-walk.jpg', pos: '50% 40%', label: 'Park Adventures', span: 'big', alt: 'A dalmatian running and playing with a ball in a park' },
        { img: '/assets/images/demos/dogwalker-grooming.jpg', pos: '50% 30%', label: 'Grooming Day', span: 'tall', alt: 'A groomer brushing a cockapoo on a grooming table' },
        { img: '/assets/images/demos/dogwalker-hero.jpg', pos: '65% 35%', label: 'Happy At Home', span: 'normal', alt: 'A cockapoo sitting happily in a cosy dog bed' },
        { img: '/assets/images/demos/dogwalker-family.jpg', pos: '60% 30%', label: 'Family Time', span: 'normal', alt: 'A golden retriever being cuddled by its owner on a sofa' },
        { img: '/assets/images/demos/dogwalker-puppy.jpg', pos: '50% 40%', label: 'Puppy Playtime', span: 'wide', alt: 'A cockapoo puppy playing with a rope toy on a blanket' },
    ],

    areas: ['Leeds', 'Huddersfield', 'Bradford', 'Wakefield', 'Halifax', 'Dewsbury', 'Batley', 'Pontefract'],

    reviews: [
        { stars: 5, text: 'Our dog absolutely loves his walks. He gets excited as soon as he sees the Shaka van!', author: 'Emma & Bailey', img: '/assets/images/demos/dogwalker-walk.jpg' },
        { stars: 5, text: "Best groom she's ever had, and they were so gentle and patient with her.", author: 'Rachel & Bella', img: '/assets/images/demos/dogwalker-family.jpg' },
        { stars: 4, text: 'Reliable, friendly and always send photo updates. Highly recommend.', author: 'Sam & Rosie', img: '/assets/images/demos/dogwalker-puppy.jpg' },
    ],

    faqs: [
        { q: 'Are your walkers insured and DBS-checked?', a: 'Yes, every walker and groomer is fully insured and DBS-checked.' },
        { q: 'Do you offer group or solo walks?', a: 'Both — we offer solo walks and small, carefully matched group walks.' },
        { q: 'How do I know my dog is safe?', a: 'You get a photo and written update after every walk or grooming session.' },
        { q: 'What areas do you cover?', a: 'We cover Leeds, Huddersfield, Bradford, Wakefield and the surrounding West Yorkshire area.' },
    ],
};
