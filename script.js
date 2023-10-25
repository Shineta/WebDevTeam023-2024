document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
    });
});
