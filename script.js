document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const pageShell = document.querySelector('.page-shell');
    const body = document.body;

    if (pageShell) {
        document.addEventListener('pointermove', (event) => {
            const offsetX = (event.clientX / window.innerWidth - 0.5) * 12;
            const offsetY = (event.clientY / window.innerHeight - 0.5) * 12;

            root.style.setProperty('--mouse-x', `${offsetX}px`);
            root.style.setProperty('--mouse-y', `${offsetY}px`);
        });
    }

    const spawnParticle = () => {
        const particle = document.createElement('span');
        const size = 6 + Math.random() * 10;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const dx = (Math.random() * 120 - 60).toFixed(1);
        const dy = (Math.random() * -100 - 20).toFixed(1);

        particle.className = 'pixel-particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        body.appendChild(particle);

        setTimeout(() => particle.remove(), 1800);
    };

    const flickerLoop = () => {
        body.classList.add('glitch');

        setTimeout(() => {
            body.classList.remove('glitch');
        }, 120);
    };

    setInterval(spawnParticle, 220);
    setInterval(flickerLoop, 1500);

    document.addEventListener('click', () => {
        body.classList.add('glitch');
        setTimeout(() => body.classList.remove('glitch'), 120);
    });

    const projectTitle = document.querySelector('.project-title');
    if (projectTitle) {
        const params = new URLSearchParams(window.location.search);
        const project = params.get('project');
        const projectNames = {
            'project-01': 'PROJECT 01',
            'project-02': 'PROJECT 02',
            'project-03': 'PROJECT 03'
        };

        if (project && projectNames[project]) {
            projectTitle.textContent = projectNames[project];
        }
    }
});
