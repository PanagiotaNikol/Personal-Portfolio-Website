# Personal Portfolio Website

## Table of Contents

* [Overview](#overview)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Live Demo](#live-demo)
* [Installation & Usage](#installation--usage)
* [Note on index.html](#note-on-indexhtml)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Overview

**Personal Portfolio Website** is a fully responsive portfolio website built with HTML, CSS, and JavaScript.

**Purpose:**

* Showcase your projects and programming skills.
* Provide a professional personal website for potential employers or collaborators.
* Demonstrate practical skills in HTML5, CSS3, JavaScript, responsive design, and GitHub API integration.

The project dynamically fetches your GitHub repositories and programming languages to populate the projects and skills sections.

---

## Technologies Used

* HTML5
* CSS3 (Flexbox, Grid, Media Queries)
* JavaScript (ES6)
* GitHub API for dynamic content
* Fully responsive design for mobile and desktop

---

## Features

* Fully responsive layout for all devices
* Dynamic projects section fetching your GitHub repositories
* Dynamic skills section displaying programming languages used in your repos
* Smooth scrolling navigation
* Contact form with proper labels and styling
* Social links for GitHub and LinkedIn
* Auto-updating footer year

---

## Live Demo

https://panagiotanikol.github.io/Personal-Portfolio-Website/MyPortfolioWebsite.html

---

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/yourusername/personal-portfolio.git
```

2. Navigate to the project folder:

```bash
cd personal-portfolio
```

3. Open `index.html` in your browser:

```bash
open index.html  # macOS
start index.html # Windows
```

4. To fetch your GitHub projects dynamically, update the `username` variable in `script.js` with your GitHub username.

---

## Note on index.html

> The file `index.html` is included only for GitHub Pages deployment and serves as the default landing page for the live demo.
> It does not contain the main application logic or functionality, which is handled by `script.js` and `MyPortfolioWebsite.css`.

---

## Folder Structure

```
personal-portfolio/
│
├── index.html              # Default landing page for GitHub Pages
├── MyPortfolioWebsite.css  # CSS styling
├── script.js               # Dynamic projects and skills logic
└── README.md               # Project documentation
```

---

## Contributing

* Open issues for bug reports or feature requests
* Pull requests are welcome — please follow the existing code style

---

## License

This project uses the MIT License, allowing free use, modification, and distribution while keeping credit to the original author.
