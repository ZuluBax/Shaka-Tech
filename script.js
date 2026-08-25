// This site has no backend of its own — Web3Forms delivers submissions
// straight to an inbox with no content moderation on the free tier — so
// keyboard-mashed spam (fake name/email/phone, gibberish message) has to be
// caught here, client-side, before it's ever sent. None of these checks can
// prove a submission is genuine (that needs a real verification step, e.g.
// emailing a confirmation link, which needs a backend this site doesn't
// have) — they only catch the obvious case of random-character mashing.
const COMMON_ENGLISH_WORDS = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'to', 'of', 'and', 'or', 'but',
    'for', 'with', 'on', 'in', 'at', 'by', 'from', 'as', 'it', 'its', 'this', 'that', 'these',
    'those', 'i', 'im', 'you', 'your', 'youre', 'we', 'our', 'us', 'me', 'my', 'he', 'she',
    'they', 'them', 'their', 'not', 'no', 'yes', 'do', 'does', 'did', 'have', 'has', 'had',
    'will', 'would', 'can', 'could', 'should', 'please', 'thanks', 'thank', 'hi', 'hello',
    'hey', 'need', 'want', 'like', 'about', 'if', 'when', 'what', 'how', 'why', 'who', 'get',
    'got', 'just', 'so', 'than', 'then', 'there', 'here', 'out', 'up', 'down', 'all', 'some',
    'any', 'more', 'most', 'one', 'two', 'call', 'email', 'phone', 'quote', 'roof', 'help',
    'looking', 'interested', 'available', 'service', 'work', 'job', 'project', 'house', 'home',
    'know', 'let', 'back', 'today', 'tomorrow', 'week', 'time', 'good', 'great', 'new', 'free',
]);

// Five-plus consonants in a row (no vowel) isn't pronounceable in English,
// so it's a solid, cheap signal for keyboard-mashed text either way.
function hasUnpronounceableRun(text) {
    return /[^aeiouAEIOU0-9\s'.\-_@+%]{5,}/.test(text);
}

function isValidName(value) {
    const trimmed = value.trim();
    if (trimmed.length < 2 || trimmed.length > 60) return false;
    if (!/^[A-Za-zÀ-ɏ' -]+$/.test(trimmed)) return false;
    if (!/[aeiouAEIOU]/.test(trimmed)) return false;
    if (hasUnpronounceableRun(trimmed)) return false;
    return true;
}

function isValidEmail(value) {
    const trimmed = value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) return false;
    const [local, domain] = trimmed.split('@');
    const domainName = domain.split('.')[0];
    if (hasUnpronounceableRun(local)) return false;
    if (hasUnpronounceableRun(domainName)) return false;
    return true;
}

function isValidUKPhone(value) {
    const cleaned = value.trim().replace(/[\s()-]/g, '');
    return /^(\+44|0044|0)\d{9,10}$/.test(cleaned);
}

function isValidMessage(value) {
    const trimmed = value.trim();
    if (trimmed.length < 15) return false;
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length < 4) return false;

    const alphaWords = words.map((w) => w.replace(/[^A-Za-z']/g, '')).filter((w) => w.length > 0);
    const commonHits = new Set();
    alphaWords.forEach((w) => {
        if (COMMON_ENGLISH_WORDS.has(w.toLowerCase())) commonHits.add(w.toLowerCase());
    });
    if (commonHits.size < 2) return false;

    const gibberishCount = alphaWords.filter((w) => w.length >= 4 && hasUnpronounceableRun(w)).length;
    if (alphaWords.length && gibberishCount / alphaWords.length > 0.35) return false;

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    const contactStatus = document.getElementById('contact-form-status');
    const contactSubmitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    if (contactForm) {
        const clearFieldError = (field) => field.classList.remove('field-invalid');
        ['name', 'email', 'phone', 'message'].forEach((fieldName) => {
            const field = contactForm.elements[fieldName];
            if (field) field.addEventListener('input', () => clearFieldError(field));
        });

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Guard against a future markup edit dropping #contact-form-status
            // or its submit button — without this the handler would throw on
            // a null .textContent/.disabled write instead of failing quietly.
            if (!contactStatus || !contactSubmitButton) return;

            const nameField = contactForm.elements.name;
            const emailField = contactForm.elements.email;
            const phoneField = contactForm.elements.phone;
            const messageField = contactForm.elements.message;

            const problems = [];
            [nameField, emailField, phoneField, messageField].forEach(clearFieldError);

            if (nameField && !isValidName(nameField.value)) {
                problems.push('enter your full name');
                nameField.classList.add('field-invalid');
            }
            if (emailField && !isValidEmail(emailField.value)) {
                problems.push('enter a valid email address');
                emailField.classList.add('field-invalid');
            }
            if (phoneField && phoneField.value.trim() && !isValidUKPhone(phoneField.value)) {
                problems.push('enter a valid phone number (or leave it blank)');
                phoneField.classList.add('field-invalid');
            }
            if (messageField && !isValidMessage(messageField.value)) {
                problems.push('tell us a bit more about what you need, in a real sentence');
                messageField.classList.add('field-invalid');
            }

            if (problems.length) {
                contactStatus.textContent = `Please ${problems.join('; ')}.`;
                contactStatus.className = 'form-status form-status--error';
                (nameField && nameField.classList.contains('field-invalid') ? nameField
                    : emailField && emailField.classList.contains('field-invalid') ? emailField
                    : phoneField && phoneField.classList.contains('field-invalid') ? phoneField
                    : messageField).focus();
                return;
            }

            contactSubmitButton.disabled = true;
            contactStatus.textContent = 'Sending…';
            contactStatus.className = 'form-status';

            const formData = new FormData(contactForm);
            // Web3Forms' own bot-decoy field — leave it in the payload, real users never fill it in.
            const payload = Object.fromEntries(formData);

            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(payload),
                });
                const result = await res.json();

                if (result.success) {
                    contactStatus.textContent = "Thanks — we've got your message and will get back to you soon.";
                    contactStatus.className = 'form-status form-status--success';
                    contactForm.reset();
                } else {
                    contactStatus.textContent = "Something went wrong sending that — please try again, or email hello@shakatech.co.uk directly.";
                    contactStatus.className = 'form-status form-status--error';
                }
            } catch (err) {
                contactStatus.textContent = "Network error — please try again, or email hello@shakatech.co.uk directly.";
                contactStatus.className = 'form-status form-status--error';
            } finally {
                contactSubmitButton.disabled = false;
            }
        });
    }

    // Smooth scroll for in-page anchor links only (real page links like /demos pass through)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        link.addEventListener('click', function(e) {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinksEl = document.querySelector('.nav-links');
                if (navLinksEl) navLinksEl.classList.remove('is-open');
            }
        });
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksList = document.querySelector('.nav-links');
    if (navToggle && navLinksList) {
        navToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('is-open');
        });
    }

    // Scroll-triggered reveal animations
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach((el) => observer.observe(el));
    }
});
