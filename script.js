// ===================== Footer Year =====================
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== Dynamic Projects =====================
const username = 'PanagiotaNikol';
const projectContainer = document.getElementById('project-list');

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach((repo, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            // Only show description if it exists
            const descriptionHTML = repo.description ? `<p>${repo.description}</p>` : '';

            card.innerHTML = `
                <h3>${repo.name}</h3>
                ${descriptionHTML}
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            projectContainer.appendChild(card);

            // Fade-in animation
            setTimeout(() => { card.classList.add('show'); }, index * 100);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));

// ===================== Dynamic Skills =====================
const skillsList = document.getElementById('skills-list');

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(response => response.json())
    .then(repos => {
        const languageSet = new Set();

        repos.forEach(repo => {
            if (repo.language) {
                languageSet.add(repo.language);
            }
        });

        languageSet.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = lang;
            skillsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching GitHub repos for skills:', error));


