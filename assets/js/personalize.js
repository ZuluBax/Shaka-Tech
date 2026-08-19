/**
 * "Make this demo yours" — reusable personalisation script for trade demo
 * pages. Updates every [data-bind] element on the page from the form
 * inputs, purely client-side (no data is stored or sent anywhere).
 */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personalize-form');
    if (!form) return;

    const status = document.getElementById('personalize-status');
    const defaults = {
        businessName: window.SHAKA_TRADE ? window.SHAKA_TRADE.businessName : '',
        town: window.SHAKA_TRADE ? window.SHAKA_TRADE.town : '',
        mainService: window.SHAKA_TRADE ? window.SHAKA_TRADE.mainService : '',
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const businessName = (data.get('businessName') || '').trim() || defaults.businessName;
        const town = (data.get('town') || '').trim() || defaults.town;
        const mainService = (data.get('mainService') || '').trim() || defaults.mainService;

        document.querySelectorAll('[data-bind="businessName"]').forEach((el) => { el.textContent = businessName; });
        document.querySelectorAll('[data-bind="town"]').forEach((el) => { el.textContent = town; });
        document.querySelectorAll('[data-bind="mainService"]').forEach((el) => { el.textContent = mainService; });

        if (window.shakaFloatingChat) {
            window.shakaFloatingChat.setBusinessName(businessName);
        }

        status.textContent = `Updated! This is what a ${window.SHAKA_TRADE ? window.SHAKA_TRADE.trade.toLowerCase() : 'trade'} website could look like for ${businessName} in ${town}.`;
    });
});
