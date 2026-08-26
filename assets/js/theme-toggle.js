/**
 * Adds a light/dark mode toggle to every trade demo page.
 *
 * Each trade already ships one designed default palette (assets/trades/{id}.js
 * `theme`) applied by trade-colors.js as inline custom properties on
 * .trade-site — some trades are designed light (landscaper, joiner, plumber,
 * plasterer, builder, dog-walker), some designed dark (electrician, roofer).
 * Rather than hand-authoring a second bespoke palette per trade, this reuses
 * one shared "surface" pair (a generic near-black dark set and a generic
 * near-white light set) for whichever mode ISN'T the trade's own default —
 * only bg/bgAlt/text/muted/headerBg/headerText move; each trade's own
 * accent/accent2 (its actual brand colour) is never touched, so the toggle
 * still reads as "this trade's site in dark mode", not a generic reskin.
 *
 * Must load after trade-colors.js (both listen for DOMContentLoaded; DOM
 * event listeners run in registration order, so this file's <script> tag
 * needs to come after trade-colors.js's in each demo's index.html) so the
 * trade's own default is already applied before this decides whether to
 * override it.
 */
(function () {
    var STORAGE_KEY = 'shaka-demo-theme';

    var GENERIC_DARK = {
        bg: '#15171A',
        bgAlt: '#1D2023',
        text: '#F2F1EE',
        muted: 'rgba(242, 241, 238, 0.65)',
    };

    var GENERIC_LIGHT = {
        bg: '#F7F8FA',
        bgAlt: '#FFFFFF',
        text: '#12151A',
        muted: 'rgba(18, 21, 26, 0.65)',
    };

    var SURFACE_PROPS = {
        bg: '--t-bg',
        bgAlt: '--t-bg-alt',
        text: '--t-text',
        muted: '--t-muted',
        headerBg: '--t-header-bg',
        headerText: '--t-header-text',
    };

    // Relative luminance of a #rrggbb colour, to decide whether a trade's own
    // designed theme.bg counts as "light" or "dark" without maintaining a
    // hardcoded per-trade list (works for any trade added later too).
    function isDarkHex(hex) {
        var m = typeof hex === 'string' && hex.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (!m) return false; // unknown format: assume the trade is light-default
        var channels = [m[1], m[2], m[3]].map(function (h) {
            var c = parseInt(h, 16) / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        var luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
        return luminance < 0.5;
    }

    function readStoredMode() {
        try {
            var v = window.localStorage.getItem(STORAGE_KEY);
            return v === 'dark' || v === 'light' ? v : null;
        } catch (e) {
            return null; // private browsing / storage disabled — fall back silently
        }
    }

    function storeMode(mode) {
        try {
            window.localStorage.setItem(STORAGE_KEY, mode);
        } catch (e) {
            // Non-fatal: the toggle still works for the rest of this visit.
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var trade = window.SHAKA_TRADE;
        var site = document.querySelector('.trade-site');
        if (!trade || !site || !trade.theme) return;

        var defaultTheme = trade.theme;
        var defaultIsDark = isDarkHex(defaultTheme.bg);

        // The trade's own designed palette IS one of the two modes; the
        // shared generic surface fills in whichever mode it didn't design.
        var lightSurface = defaultIsDark ? GENERIC_LIGHT : defaultTheme;
        var darkSurface = defaultIsDark ? defaultTheme : GENERIC_DARK;

        function applyMode(mode) {
            var surface = mode === 'dark' ? darkSurface : lightSurface;
            // headerBg/headerText fall back to bg/text for the generic
            // surfaces (which don't define their own header colours) —
            // every trade's own theme sets headerBg/headerText explicitly,
            // so this fallback only ever applies to GENERIC_DARK/LIGHT.
            var values = {
                bg: surface.bg,
                bgAlt: surface.bgAlt,
                text: surface.text,
                muted: surface.muted,
                headerBg: surface.headerBg || surface.bg,
                headerText: surface.headerText || surface.text,
            };
            Object.keys(SURFACE_PROPS).forEach(function (key) {
                if (values[key]) site.style.setProperty(SURFACE_PROPS[key], values[key]);
            });
            site.setAttribute('data-theme', mode);

            document.querySelectorAll('.theme-toggle').forEach(function (btn) {
                var goingTo = mode === 'dark' ? 'light' : 'dark';
                btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
                btn.setAttribute('aria-label', 'Switch to ' + goingTo + ' mode');
                btn.title = 'Switch to ' + goingTo + ' mode';
                btn.textContent = mode === 'dark' ? '☀️' : '🌙';
            });
        }

        var initialMode = readStoredMode() || (defaultIsDark ? 'dark' : 'light');
        applyMode(initialMode);

        // Inject the toggle button once, into the shared nav-links list —
        // every trade page uses the same header markup, so one generic
        // insertion point (just before the final "Get a Quote"-style CTA
        // item) works across all of them.
        var navList = document.querySelector('.nav-links');
        if (navList && !navList.querySelector('.theme-toggle')) {
            var item = document.createElement('li');
            item.className = 'theme-toggle-item';

            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'theme-toggle';
            button.setAttribute('aria-label', 'Toggle dark mode');

            item.appendChild(button);

            var lastItem = navList.lastElementChild;
            if (lastItem) {
                navList.insertBefore(item, lastItem);
            } else {
                navList.appendChild(item);
            }

            button.addEventListener('click', function () {
                var current = site.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                var next = current === 'dark' ? 'light' : 'dark';
                applyMode(next);
                storeMode(next);
            });

            // Re-run after applyMode(initialMode) already set data-theme, so
            // the freshly-created button gets the correct starting icon.
            applyMode(site.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
        }
    });
})();
