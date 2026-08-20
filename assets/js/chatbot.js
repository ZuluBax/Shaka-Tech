/**
 * ShakaChatbot — reusable, config-driven demo AI widget.
 * Used inline on the homepage "Meet Shaka AI" section and as a floating
 * widget on every trade demo site. Entirely simulated client-side —
 * no network calls, no real SMS/calendar integration.
 */
class ShakaChatbot {
    constructor(config) {
        this.mode = config.mode || 'inline';
        this.mountEl = config.mountEl;
        this.persona = config.persona || 'Shaka AI';
        this.avatar = config.avatar || '🤖';
        this.greeting = config.greeting;
        this.quickOptions = config.quickOptions || ['Get a quote', 'Book a callback', 'Ask a question'];
        this.knowledge = config.knowledge || [];
        this.businessName = config.businessName || 'Shaka Tech';
        this.fallbackAnswer = config.fallbackAnswer ||
            "I don't have that detail in this demo, but a real Shaka AI assistant would be trained on your business's exact services and FAQs. Want me to arrange a callback instead?";

        this.lead = {};
        this.flowStep = null;
        this.greetingNode = null;

        this._buildDom();
        this._start();
    }

    open() {
        if (this.mode !== 'floating') return;
        this.chatEl.classList.remove('is-hidden');
        if (this.launcherEl) this.launcherEl.style.display = 'none';
    }

    setBusinessName(name) {
        this.businessName = name;
        this.persona = `${name} Assistant`;
        if (this.titleNode) {
            this.titleNode.textContent = this.persona;
        }
        if (this.launcherEl) {
            this.launcherEl.setAttribute('aria-label', 'Open chat with ' + this.persona);
        }
        if (this.greetingNode) {
            this.greetingNode.textContent = this._greetingText();
        }
    }

    _greetingText() {
        return this.greeting.replace(/\{business\}/g, this.businessName);
    }

    _buildDom() {
        const isFloating = this.mode === 'floating';
        const wrap = document.createElement('div');
        wrap.className = 'shaka-chat' + (isFloating ? ' shaka-chat--floating is-hidden' : '');

        wrap.innerHTML = `
            <div class="shaka-chat__header">
                <div class="shaka-chat__avatar">${this.avatar}</div>
                <div>
                    <div class="shaka-chat__title">${this.persona}</div>
                    <div class="shaka-chat__status">● Online now (demo)</div>
                </div>
                ${isFloating ? '<button class="shaka-chat__close" aria-label="Close chat">✕</button>' : ''}
            </div>
            <div class="shaka-chat__body"></div>
        `;

        this.body = wrap.querySelector('.shaka-chat__body');
        this.titleNode = wrap.querySelector('.shaka-chat__title');
        this.chatEl = wrap;

        if (isFloating) {
            const launcher = document.createElement('button');
            launcher.className = 'shaka-launcher';
            launcher.setAttribute('aria-label', 'Open chat with ' + this.persona);
            launcher.innerHTML = '<span class="shaka-launcher__pulse"></span>💬';

            launcher.addEventListener('click', () => {
                wrap.classList.remove('is-hidden');
                launcher.style.display = 'none';
            });

            wrap.querySelector('.shaka-chat__close').addEventListener('click', () => {
                wrap.classList.add('is-hidden');
                launcher.style.display = '';
            });

            document.body.appendChild(launcher);
            document.body.appendChild(wrap);
            this.launcherEl = launcher;
        } else {
            this.mountEl.appendChild(wrap);
        }
    }

    _scrollToBottom() {
        this.body.scrollTop = this.body.scrollHeight;
    }

    _addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = 'shaka-msg shaka-msg--' + sender;
        msg.textContent = text;
        this.body.appendChild(msg);
        this._scrollToBottom();
        return msg;
    }

    _addCard(html) {
        const card = document.createElement('div');
        card.className = 'shaka-card';
        card.innerHTML = html;
        this.body.appendChild(card);
        this._scrollToBottom();
    }

    _showTyping() {
        const typing = document.createElement('div');
        typing.className = 'shaka-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        this.body.appendChild(typing);
        this._scrollToBottom();
        return typing;
    }

    _botSay(text, delay = 650) {
        return new Promise((resolve) => {
            const typing = this._showTyping();
            setTimeout(() => {
                typing.remove();
                this._addMessage(text, 'bot');
                resolve();
            }, delay);
        });
    }

    _clearQuickReplies() {
        const existing = this.body.querySelector('.shaka-chat__quick-replies');
        if (existing) existing.remove();
        const existingInput = this.body.querySelector('.shaka-chat__inline-input');
        if (existingInput) existingInput.remove();
    }

    _showQuickReplies(options) {
        this._clearQuickReplies();
        const row = document.createElement('div');
        row.className = 'shaka-chat__quick-replies';
        options.forEach((opt) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'shaka-chip';
            chip.textContent = opt;
            chip.addEventListener('click', () => this._handleQuickReply(opt));
            row.appendChild(chip);
        });
        this.body.appendChild(row);
        this._scrollToBottom();
    }

    _showTextInput(placeholder, onSubmit) {
        this._clearQuickReplies();
        const row = document.createElement('div');
        row.className = 'shaka-chat__inline-input';
        row.style.cssText = 'display:flex;gap:0.5rem;width:100%;align-self:stretch;';
        row.innerHTML = `
            <input type="text" placeholder="${placeholder}" style="flex:1;padding:0.65rem 0.9rem;border-radius:18px;border:1px solid rgba(0,230,255,0.25);background:var(--dark-bg);color:var(--light-gray);font-family:'Raleway',sans-serif;font-size:0.88rem;">
            <button type="button" style="background:linear-gradient(135deg,var(--cyan),var(--blue));color:var(--darker-bg);border:none;border-radius:18px;padding:0 1.1rem;font-weight:700;cursor:pointer;">Send</button>
        `;
        const input = row.querySelector('input');
        const btn = row.querySelector('button');
        const submit = () => {
            const val = input.value.trim();
            if (!val) return;
            row.remove();
            this._addMessage(val, 'user');
            onSubmit(val);
        };
        btn.addEventListener('click', submit);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
        this.body.appendChild(row);
        this._scrollToBottom();
        setTimeout(() => input.focus(), 50);
    }

    async _start() {
        this.greetingNode = await this._botSayAndReturn(this._greetingText(), 500);
        this._showQuickReplies(this.quickOptions);
    }

    _botSayAndReturn(text, delay) {
        return new Promise((resolve) => {
            const typing = this._showTyping();
            setTimeout(() => {
                typing.remove();
                const node = this._addMessage(text, 'bot');
                resolve(node);
            }, delay);
        });
    }

    async _handleQuickReply(option) {
        this._addMessage(option, 'user');
        this._clearQuickReplies();
        const normalized = option.toLowerCase();

        if (normalized.includes('question')) {
            await this._botSay("Sure — what would you like to know?");
            this._showTextInput('Type your question…', (q) => this._answerQuestion(q));
            return;
        }

        if (normalized.includes('start again') || normalized.includes('done')) {
            this.body.innerHTML = '';
            this._start();
            return;
        }

        // Quote / callback / emergency all funnel into lead capture
        this.lead.urgent = normalized.includes('emergency');
        if (this.lead.urgent) {
            await this._botSay("Got it — I'll flag this as urgent. I just need a few details so we can get back to you as fast as possible.");
        } else {
            await this._botSay("Great — I just need a few quick details and I'll arrange that for you.");
        }
        this._collectLead('name');
    }

    async _answerQuestion(question) {
        const q = question.toLowerCase();
        const match = this.knowledge.find((k) => k.keywords.some((kw) => q.includes(kw)));
        await this._botSay(match ? match.answer : this.fallbackAnswer);
        this._showQuickReplies(['Get a quote', 'Book a callback', 'Ask another question']);
    }

    async _collectLead(step) {
        const prompts = {
            name: "What's your name?",
            phone: "Thanks! What's the best phone number to reach you on?",
            email: "And your email address?",
            postcode: "What's your postcode, so we know the area?",
            problem: "In a few words, what do you need help with?",
        };
        const placeholders = {
            name: 'Your name…',
            phone: 'Your phone number…',
            email: 'Your email address…',
            postcode: 'Your postcode…',
            problem: 'Briefly describe the issue…',
        };

        if (step === 'name' || step === 'phone' || step === 'email' || step === 'postcode' || step === 'problem') {
            await this._botSay(prompts[step]);
            this._showTextInput(placeholders[step], (val) => this._receiveLeadField(step, val));
        }
    }

    async _receiveLeadField(step, value) {
        const validators = {
            name: (v) => v.length >= 2,
            phone: (v) => v.replace(/[^0-9]/g, '').length >= 7,
            email: (v) => /^\S+@\S+\.\S+$/.test(v),
            postcode: (v) => v.trim().length >= 3,
            problem: (v) => v.length >= 2,
        };

        if (!validators[step](value)) {
            await this._botSay("Hmm, that doesn't look quite right — could you try again?");
            this._showTextInput('Try again…', (val) => this._receiveLeadField(step, val));
            return;
        }

        this.lead[step] = value;

        const order = ['name', 'phone', 'email', 'postcode', 'problem'];
        const next = order[order.indexOf(step) + 1];
        if (next) {
            this._collectLead(next);
        } else {
            this._showTimeSlots();
        }
    }

    async _showTimeSlots() {
        await this._botSay("Last thing — when's best for a callback?");
        this._showQuickReplies(['Today, ASAP', 'This afternoon', 'Tomorrow morning', 'Tomorrow afternoon']);
        this._pendingTimeSlot = true;
        // Override next quick-reply handling for time slot selection
        const row = this.body.querySelector('.shaka-chat__quick-replies');
        row.querySelectorAll('.shaka-chip').forEach((chip) => {
            const clone = chip.cloneNode(true);
            chip.parentNode.replaceChild(clone, chip);
            clone.addEventListener('click', () => this._finishBooking(clone.textContent));
        });
    }

    async _finishBooking(timeSlot) {
        this._addMessage(timeSlot, 'user');
        this._clearQuickReplies();
        this.lead.timeSlot = timeSlot;

        await this._botSay('Callback successfully requested ✅', 700);

        this._addCard(`
            <div class="shaka-card__label">📅 Calendar confirmation <span class="shaka-demo-tag">Simulated</span></div>
            <div class="shaka-card__row"><span>Booked for</span><span>${this.lead.timeSlot}</span></div>
            <div class="shaka-card__row"><span>With</span><span>${this.businessName}</span></div>
            <div class="shaka-card__row"><span>Contact</span><span>${this.lead.name}</span></div>
        `);

        await new Promise((r) => setTimeout(r, 500));

        this._addCard(`
            <div class="shaka-card__label">💬 SMS confirmation <span class="shaka-demo-tag">Simulated</span></div>
            <div style="color:var(--light-gray);">"Hi ${this.lead.name}, thanks for contacting ${this.businessName}! We've booked your callback for ${this.lead.timeSlot}. Reply STOP to cancel."</div>
        `);

        await this._botSay(`We'll be in touch ${this.lead.timeSlot.toLowerCase()}. Anything else I can help with?`, 700);
        this._showQuickReplies(['Ask a question', 'Start again']);
    }
}

/**
 * renderHeroPreview — a lightweight, non-interactive, looping chat preview
 * for hero sections. Reuses the same visual language as ShakaChatbot but
 * has no input handling — it's a passive illustration, not the live demo.
 */
function renderHeroPreview(mountEl, config) {
    const wrap = document.createElement('div');
    wrap.className = 'shaka-chat';
    wrap.innerHTML = `
        <div class="shaka-chat__header">
            <div class="shaka-chat__avatar">${config.avatar || '🤖'}</div>
            <div>
                <div class="shaka-chat__title">${config.persona || 'Shaka AI'}</div>
                <div class="shaka-chat__status">● Live preview</div>
            </div>
        </div>
        <div class="shaka-chat__body"></div>
    `;
    mountEl.appendChild(wrap);
    const body = wrap.querySelector('.shaka-chat__body');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    async function playLoop() {
        body.innerHTML = '';
        for (const m of config.messages) {
            const typing = document.createElement('div');
            typing.className = 'shaka-typing';
            typing.innerHTML = '<span></span><span></span><span></span>';
            body.appendChild(typing);
            body.scrollTop = body.scrollHeight;
            await wait(800);
            typing.remove();

            const msg = document.createElement('div');
            msg.className = 'shaka-msg shaka-msg--' + m.sender;
            msg.textContent = m.text;
            body.appendChild(msg);
            body.scrollTop = body.scrollHeight;
            await wait(1100);
        }
        await wait(2800);
        playLoop();
    }

    playLoop();
}
