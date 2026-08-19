/**
 * Applies a trade's visual identity (set in assets/trades/{id}.js, under
 * `theme`) to the .trade-site element's CSS custom properties — accent
 * colours, background tone, heading font and card shape — so every demo
 * gets a genuinely distinct look from one shared stylesheet. Also loads
 * the trade's heading font from Google Fonts if one is specified.
 */
document.addEventListener('DOMContentLoaded', () => {
    const trade = window.SHAKA_TRADE;
    const site = document.querySelector('.trade-site');
    if (!trade || !site || !trade.theme) return;

    const theme = trade.theme;
    const props = {
        accent: '--t-accent',
        accent2: '--t-accent-2',
        bg: '--t-bg',
        bgAlt: '--t-bg-alt',
        text: '--t-text',
        muted: '--t-muted',
        headingFont: '--t-heading-font',
        radius: '--t-radius',
    };

    Object.keys(props).forEach((key) => {
        if (theme[key]) site.style.setProperty(props[key], theme[key]);
    });

    if (theme.googleFont) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?${theme.googleFont}&display=swap`;
        document.head.appendChild(link);
    }
});
