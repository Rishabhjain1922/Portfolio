document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const backToTopButton = document.getElementById('back-to-top');
    const projectsContainer = document.getElementById('projects-container');
    const themeToggle = document.getElementById('theme-toggle');
    let darkMode = false;

    // Smooth Scrolling
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Load Projects Dynamically
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a personal portfolio website to showcase my projects and skills.'
        },
        {
            title: 'N-Queen Visualizer',
            description: 'Built a visualizer for the N-Queen problem, with step-by-step visual representation of the solution.'
        },
        {
            title: 'Property Rental Portal',
            description: 'Created a web application to facilitate the renting of properties, including features for listing properties and managing bookings.'
        },
        {
            title: 'Banking System',
            description: 'Constructed a user-friendly web application for online banking, providing customers with account oversight and transaction execution.'
        }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('col-md-6', 'project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectDiv);
    });

    // Back to Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark Mode Toggle
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        themeToggle.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
    });
});
