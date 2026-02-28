// manual.js - Handles spoiler button toggles

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.spoiler-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const details = btn.nextElementSibling; // .details div
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            if (!expanded) {
                // expand
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                // collapse
                details.style.maxHeight = '0';
            }
        });
    });
});
