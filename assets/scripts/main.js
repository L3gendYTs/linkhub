document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('[id$="-modal"]');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-modal-target');
            openModal(targetId);
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('div[id$="-modal"]');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.remove('hidden');
            cookieBanner.classList.add('flex', 'animate-bounce-in');
        }, 1000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
        setTimeout(() => {
            cookieBanner.classList.add('hidden');
        }, 500);
    });
});
