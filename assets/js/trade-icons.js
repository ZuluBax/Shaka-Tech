/**
 * Small, shared line-icon set for trade demo service/gallery cards — one
 * consistent stroke weight and character across all 8 demos, referenced by
 * key from each assets/trades/{id}.js config instead of emoji. 24x24
 * viewBox, currentColor stroke, so a card's existing color (--t-accent)
 * drives it with no per-icon markup.
 */
const TRADE_ICON_STROKE = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

const TRADE_ICONS = {
    home: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M4 12 L12 5 L20 12"/><path d="M6.5 10.5 V20 H17.5 V10.5"/><path d="M10 20 V15 H14 V20"/></svg>`,
    roofNew: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M3 13 L12 5 L21 13"/><path d="M5.5 11.5 V19 H18.5 V11.5"/><path d="M12 9 V13 M10 11 H14"/></svg>`,
    cloudRain: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M6.5 16 a4 4 0 0 1 0.5-8 a5.5 5.5 0 0 1 10.7 1.3 A3.7 3.7 0 0 1 17 16 Z"/><path d="M8.5 19 L7.5 21 M12 19 L11 21.5 M15.5 19 L14.5 21"/></svg>`,
    droplet: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 3 C12 3 6 10.5 6 14.5 A6 6 0 0 0 18 14.5 C18 10.5 12 3 12 3 Z"/></svg>`,
    ruler: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3" y="8.5" width="18" height="7" rx="1.2"/><path d="M7 8.5 V12 M11 8.5 V11 M15 8.5 V12"/></svg>`,
    alertTriangle: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 4 L21.5 20 H2.5 Z"/><path d="M12 10 V14.5 M12 17.5 V17.6"/></svg>`,
    hammer: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M14.5 6 L18.5 10 L11 17.5 L7 13.5 Z"/><path d="M16.3 7.8 L19 5"/><path d="M8.5 12.5 L3.5 17.5 A1.8 1.8 0 0 0 6 20 L11 15"/></svg>`,
    wrench: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M15.5 5.5 a4 4 0 0 0-5.4 4.9 L4 16.5 A1.8 1.8 0 0 0 6.5 19 L12.6 12.9 a4 4 0 0 0 4.9-5.4 L14.8 10 L11.5 11 L10.5 7.7 Z"/></svg>`,
    shieldCheck: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 3.5 L19.5 6.5 V12 C19.5 16.5 16.3 19.8 12 21 C7.7 19.8 4.5 16.5 4.5 12 V6.5 Z"/><path d="M9 12 L11.2 14.2 L15.5 9.5"/></svg>`,
    plug: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M9 2.5 V7.5 M15 2.5 V7.5"/><path d="M6.5 7.5 H17.5 V11 A5.5 5.5 0 0 1 12 16.5 A5.5 5.5 0 0 1 6.5 11 Z"/><path d="M12 16.5 V21.5"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M13 2.5 L5.5 13.5 H11.5 L10.5 21.5 L18.5 10 H12.5 Z"/></svg>`,
    bulb: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M9 17.5 H15 M10 20.5 H14"/><path d="M12 3.5 A6 6 0 0 0 8.5 14.3 C9.5 15.1 10 16 10 17 H14 C14 16 14.5 15.1 15.5 14.3 A6 6 0 0 0 12 3.5 Z"/></svg>`,
    fan: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="12" cy="12" r="1.6"/><path d="M12 10.4 C11 7 11.5 3.8 13.7 3 C15.9 2.2 17.5 4.6 17 7 C16.6 9 14.5 10 12 10.4 Z"/><path d="M13.4 12.9 C16.5 13.6 19 15.9 18.5 18.2 C18 20.5 15 20.6 13.4 18.9 C12 17.5 11.6 15.2 13.4 12.9 Z"/><path d="M10.6 13.1 C9 15.9 5.9 17.4 4 15.9 C2.1 14.4 3 11.6 5.4 10.6 C7.4 9.8 9.5 10.6 10.6 13.1 Z"/></svg>`,
    tap: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M4 8.5 H15.5 A3 3 0 0 1 18.5 11.5 V13.5"/><path d="M4 5.5 V11.5"/><path d="M18.5 13.5 V16"/><path d="M18.5 18.5 V19.6"/></svg>`,
    boiler: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9.5 8 C9.5 6.5 11 6 11 7.5 C11 9 9.5 9 9.5 10.5 C9.5 12 11 11.5 11 13"/><circle cx="14.7" cy="9" r="0.15"/><circle cx="14.7" cy="12" r="0.15"/></svg>`,
    bath: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M3 12 H21 V14.5 A4.5 4.5 0 0 1 16.5 19 H7.5 A4.5 4.5 0 0 1 3 14.5 Z"/><path d="M5 12 V6.5 A2 2 0 0 1 8.5 5.2"/><path d="M6 19 V21 M18 19 V21"/></svg>`,
    doorJoinery: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="6" y="3" width="12" height="18" rx="0.6"/><circle cx="14.5" cy="12" r="0.15"/></svg>`,
    kitchen: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3.5" y="4" width="17" height="16" rx="1"/><path d="M3.5 10.5 H20.5"/><path d="M8 10.5 V4 M14 10.5 V4"/><circle cx="17.5" cy="15" r="0.15"/></svg>`,
    stairs: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M4 20 V16 H8 V12 H12 V8 H16 V4 H20 V20 Z"/></svg>`,
    furniture: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M5.5 12 V19.5 M18.5 12 V19.5"/><path d="M4.5 12 H19.5 V8.5 A2 2 0 0 0 17.5 6.5 H6.5 A2 2 0 0 0 4.5 8.5 Z"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M5 19 C4 11 9 4.5 19.5 4.5 C19.5 14 13.5 19 5 19 Z"/><path d="M5 19 C9 15 12.5 11.5 17.5 8"/></svg>`,
    tree: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 21 V15"/><path d="M12 3 L17 10 H14.3 L18 15.5 H6 L9.7 10 H7 Z"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3.5" y="3.5" width="17" height="17" rx="1"/><path d="M3.5 12 H20.5 M12 3.5 V20.5"/></svg>`,
    flower: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="12" cy="12" r="2.2"/><path d="M12 9.8 A2.4 2.6 0 1 1 12 4.6 A2.4 2.6 0 1 1 12 9.8"/><path d="M12 19.4 A2.4 2.6 0 1 1 12 14.2 A2.4 2.6 0 1 1 12 19.4"/><path d="M9.8 12 A2.6 2.4 0 1 1 4.6 12 A2.6 2.4 0 1 1 9.8 12"/><path d="M19.4 12 A2.6 2.4 0 1 1 14.2 12 A2.6 2.4 0 1 1 19.4 12"/></svg>`,
    roller: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3.5" y="4" width="12" height="6" rx="1.2"/><path d="M8 10 V15 H10.5 V21"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 3.5 L20.5 8 L12 12.5 L3.5 8 Z"/><path d="M3.5 12.5 L12 17 L20.5 12.5"/><path d="M3.5 17 L12 21.5 L20.5 17"/></svg>`,
    sparkle: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 3 L13.4 9.4 L20 12 L13.4 14.6 L12 21 L10.6 14.6 L4 12 L10.6 9.4 Z"/></svg>`,
    paw: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="12" cy="15.2" r="3.6"/><circle cx="6.2" cy="9.5" r="1.7"/><circle cx="17.8" cy="9.5" r="1.7"/><circle cx="9.3" cy="6" r="1.6"/><circle cx="14.7" cy="6" r="1.6"/></svg>`,
    scissorsGroom: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="6" cy="6.5" r="2.2"/><circle cx="6" cy="17.5" r="2.2"/><path d="M7.8 8 L20 20"/><path d="M7.8 16 L20 4"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 20.5 C6 16.5 3 12.8 3 9 A4.5 4.5 0 0 1 12 7 A4.5 4.5 0 0 1 21 9 C21 12.8 18 16.5 12 20.5 Z"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3.5" y="5" width="17" height="16" rx="1.5"/><path d="M3.5 10 H20.5"/><path d="M8 3.5 V6.5 M16 3.5 V6.5"/></svg>`,
    star: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><path d="M12 3.5 L14.9 9.5 L21.5 10.4 L16.7 15 L17.9 21.5 L12 18.3 L6.1 21.5 L7.3 15 L2.5 10.4 L9.1 9.5 Z"/></svg>`,
    badge: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="12" cy="9.5" r="6"/><path d="M9 14.5 L7.5 21.5 L12 19 L16.5 21.5 L15 14.5"/><path d="M9.3 9.5 L11 11.2 L14.8 7.4"/></svg>`,
    person: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><circle cx="12" cy="7.5" r="3.5"/><path d="M4.5 20.5 C4.5 15.8 7.8 13 12 13 C16.2 13 19.5 15.8 19.5 20.5"/></svg>`,
    brick: `<svg viewBox="0 0 24 24" ${TRADE_ICON_STROKE}><rect x="3" y="5" width="8" height="6" rx="0.6"/><rect x="13" y="5" width="8" height="6" rx="0.6"/><rect x="3" y="14" width="4" height="6" rx="0.6"/><rect x="9" y="14" width="8" height="6" rx="0.6"/><rect x="19" y="14" width="2" height="6" rx="0.6"/></svg>`,
};

function tradeIcon(key) {
    return TRADE_ICONS[key] || TRADE_ICONS.sparkle;
}
