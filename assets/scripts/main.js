const cookieBanner = document.getElementById('cookie-banner');
const acceptButton = document.getElementById('accept-cookies');
const manageCookiesButton = document.getElementById('manage-cookies'); 

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (!getCookie('cookie_consent_accepted')) {
    cookieBanner.classList.remove('hidden');
}

acceptButton.addEventListener('click', () => {
    setCookie('cookie_consent_accepted', 'true', 365);
    cookieBanner.classList.add('hidden');
});

const modalOpenTriggers = document.querySelectorAll('[data-modal-open]');
const modalCloseTriggers = document.querySelectorAll('[data-modal-close]');
const modalOverlays = document.querySelectorAll('[data-modal-overlay]');

modalOpenTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.dataset.modalOpen;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    });
});

modalCloseTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.dataset.modalClose;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    });
});

modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            const modalId = overlay.dataset.modalOverlay;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
            }
        }
    });
});