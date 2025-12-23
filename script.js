/* Main Logic */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    initGeneral();
    initSocials();
    initResumes();
    initEducation();    // New
    initPortfolio();
    initExperience();   // New
    initCertifications();
    initLeadership();   // New
    initSkills();       // New
    initAnimations();
    initScrollToTop();
    initScrollVisuals(); // New
    updateFooter();
});

/* ... (Previous functions) ... */

/* New Functions Added Below */

/* X. Education */
function initEducation() {
    const container = document.getElementById('education-grid');
    const data = portfolioData.education;
    if (!data) return;

    data.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in';

        const detailsHtml = edu.details.map(d => `<li>${d}</li>`).join('');

        item.innerHTML = `
            <div class="edu-logo-wrapper">
                <img src="${edu.logo}" alt="Logo" class="edu-logo">
            </div>
            <div class="edu-content">
                <div class="edu-header">
                    <h3 class="edu-degree">${edu.degree}</h3>
                    <span class="edu-date">${edu.date}</span>
                </div>
                <h4 class="edu-school">${edu.institution}</h4>
                <ul class="edu-details">
                    ${detailsHtml}
                </ul>
            </div>
        `;
        container.appendChild(item);
    });
}

/* Y. Work Experience (New) */
function initExperience() {
    const container = document.getElementById('experience-grid');
    const data = portfolioData.experience;
    if (!data) return;

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'timeline-item fade-in'; // Using same class as Education for consistent look

        const descHtml = Array.isArray(item.description)
            ? `<ul class="edu-details">${item.description.map(d => `<li>${d}</li>`).join('')}</ul>`
            : `<p class="bio-text">${item.description}</p>`;

        // Logo handling (optional)
        const logoHtml = item.logo
            ? `<div class="edu-logo-wrapper"><img src="${item.logo}" alt="Company Logo" class="edu-logo"></div>`
            : `<div class="edu-logo-wrapper" style="background:var(--accent-color);"><i class="fa-solid fa-briefcase" style="color:white; font-size:1.5rem;"></i></div>`;

        card.innerHTML = `
            ${logoHtml}
            <div class="edu-content">
                <div class="edu-header">
                    <h3 class="edu-degree">${item.role}</h3>
                    <span class="edu-date">${item.date}</span>
                </div>
                <h4 class="edu-school" style="color:var(--accent-color)">${item.company}</h4>
                ${descHtml}
            </div>
        `;
        container.appendChild(card);
    });
}

/* Y. Leadership */
function initLeadership() {
    const container = document.getElementById('leadership-grid');
    const data = portfolioData.leadership;
    if (!data) return;

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'leadership-card fade-in';

        card.innerHTML = `
            <h3 class="lead-title">${item.title}</h3>
            <div class="lead-role">${item.role} <span class="lead-date">| ${item.date}</span></div>
            <div style="margin-top:1rem;">
                ${Array.isArray(item.description)
                ? `<ul class="edu-details" style="margin-top:0;">${item.description.map(d => `<li>${d}</li>`).join('')}</ul>`
                : `<p class="bio-text" style="font-size:0.95rem;">${item.description}</p>`
            }
            </div>
        `;
        container.appendChild(card);
    });
}

/* Z. Skills */
function initSkills() {
    const container = document.getElementById('skills-grid');
    const data = portfolioData.skills;
    if (!data) return;

    data.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag fade-in';
        tag.textContent = skill;
        container.appendChild(tag);
    });
}

/* 1. General Info */
function initGeneral() {
    const data = portfolioData.general;
    if (!data) return;

    // Texts
    // Texts
    const navNameEl = document.getElementById('nav-text');
    if (navNameEl) navNameEl.textContent = data.name;
    document.getElementById('hero-name').textContent = data.name;
    document.getElementById('hero-role').textContent = data.role;
    document.getElementById('footer-name').textContent = data.name;

    // Photo
    const heroImg = document.getElementById('hero-img');
    if (data.photoUrl) {
        heroImg.src = data.photoUrl;
        // Add Pulse Effect
        heroImg.parentElement.classList.add('profile-pulse');
        // Remove old spin (optional, valid since CSS override is there but cleaner to remove)
        heroImg.parentElement.style.animation = 'none';
    } else {
        heroImg.style.display = 'none';
    }

    // Role (Static)
    const roleEl = document.getElementById('hero-role');
    roleEl.textContent = data.role;

    // About Text - Convert newlines to breaks or paragraphs
    const aboutEl = document.getElementById('about-text');
    aboutEl.innerHTML = data.aboutText; // Allow HTML in about text

    // Intro Video
    if (data.introVideoUrl) {
        const container = document.getElementById('intro-video-btn-container');
        const btn = document.createElement('a');
        btn.href = data.introVideoUrl;
        btn.target = "_blank";
        btn.className = "btn-primary";
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Watch Intro';
        btn.style.marginTop = "1.5rem";
        container.appendChild(btn);
    }
}


/* 2. Socials */
function initSocials() {
    const container = document.getElementById('social-grid');
    const iconsMap = {
        'linkedin': 'fa-brands fa-linkedin',
        'github': 'fa-brands fa-github',
        'email': 'fa-solid fa-envelope',
        'gmail': 'fa-brands fa-google',
        'outlook': 'fa-brands fa-microsoft',
        'calendar': 'fa-solid fa-calendar-check',
        'blog': 'fa-solid fa-pen-nib',
        'globe': 'fa-solid fa-globe',
        'instagram': 'fa-brands fa-instagram',
        'twitter': 'fa-brands fa-twitter',
        'phone': 'fa-solid fa-phone'
    };

    portfolioData.socials.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = "_blank";
        link.className = "social-icon";
        link.title = item.name;

        const iconClass = iconsMap[item.iconName.toLowerCase()] || 'fa-solid fa-link';
        link.innerHTML = `<i class="${iconClass}"></i>`;

        container.appendChild(link);
    });
}

/* 3. Resumes */
function initResumes() {
    const container = document.getElementById('resume-section');

    portfolioData.resumes.forEach(resume => {
        const btn = document.createElement('a');
        btn.href = resume.url;
        btn.target = "_blank"; // Always open in new tab
        btn.className = "btn-primary";

        let icon = resume.isExternal ? '<i class="fa-solid fa-arrow-up-right-from-square"></i>' : '<i class="fa-solid fa-file-pdf"></i>';

        btn.innerHTML = `${icon} ${resume.title}`;
        container.appendChild(btn);
    });
}

/* 4. Certifications */
function initCertifications() {
    const container = document.getElementById('cert-grid');

    portfolioData.certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = "cert-card fade-in";

        let imgHtml = '';
        if (cert.images && cert.images.length > 0) {
            // Multiple images
            const imgs = cert.images.map(src => `<img src="${src}" class="cert-img cert-multi" alt="${cert.title}">`).join('');
            imgHtml = `<div class="cert-img-row">${imgs}</div>`;
        } else if (cert.image) {
            // Single image
            imgHtml = `<img src="${cert.image}" class="cert-img" alt="${cert.title}">`;
        }

        card.innerHTML = `
            ${imgHtml}
            <div class="cert-info">
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer} | ${cert.date}</div>
                <p class="bio-text" style="font-size:0.9rem">${cert.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

/* 5. Projects */
function initPortfolio() {
    const projects = portfolioData.projects;
    const grid = document.getElementById('project-grid');
    const filtersContainer = document.getElementById('project-filters');

    // 1. Extract Unique Classifications
    const allTags = new Set();
    projects.forEach(p => {
        p.classifications.forEach(tag => allTags.add(tag));
    });

    // 2. Create Filter Buttons
    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = tag;
        btn.dataset.filter = tag;
        filtersContainer.appendChild(btn);
    });

    // 3. Render Projects
    function renderProjects(filter) {
        grid.innerHTML = ''; // Clear
        projects.forEach(project => {
            // Check filter
            if (filter !== 'all' && !project.classifications.includes(filter)) return;

            const card = document.createElement('div');
            card.className = 'project-card fade-in';
            card.onclick = () => openModal(project); // Click to open modal
            card.style.cursor = "pointer";

            // Tags HTML (This variable is no longer needed with the new structure)
            // const tagsHtml = project.classifications.map(t => `<span class="tag">${t}</span>`).join('');

            card.innerHTML = `
                ${project.image ? `<img src="${project.image}" class="project-img" alt="${project.title}">` : ''}
                <div class="project-info">
                    <h3>${project.title}</h3>
                    ${project.date ? `<span class="project-date"><i class="fa-regular fa-calendar"></i> ${project.date}</span>` : ''}
                    <div class="project-tags">
                        ${project.classifications.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <p class="project-desc-short">${project.shortDesc}</p>
                    <div style="color:var(--accent-color); font-size:0.9rem; font-weight:600;">
                        Click to view details <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>`;
            grid.appendChild(card);
        });

        // Re-trigger animations for new elements
        initAnimations();
    }

    // Initial Render
    renderProjects('all');

    // Filter Logic
    filtersContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-btn')) return;

        // Active class
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        renderProjects(filter);
    });
}

// Modal Logic
const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');

closeModal.onclick = () => {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; // Enable scroll
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
};

function openModal(project) {
    const modal = document.getElementById('project-modal');

    // Title & Date
    const titleEl = document.getElementById('modal-title');
    titleEl.innerHTML = `
        ${project.title}
        ${project.date ? `<span style="display:block; font-size:0.9rem; color:var(--text-secondary); margin-top:0.3rem; font-weight:normal;"><i class="fa-regular fa-calendar"></i> ${project.date}</span>` : ''}
    `;

    // Description (Array for bullets, or String)
    const descContent = project.description || project.starDesc; // Fallback for safety
    if (Array.isArray(descContent)) {
        document.getElementById('modal-desc').innerHTML = `<ul class="edu-details" style="color:var(--text-primary); margin-top:0;">${descContent.map(d => `<li>${d}</li>`).join('')}</ul>`;
    } else {
        document.getElementById('modal-desc').innerHTML = descContent;
    }

    // Image
    const img = document.getElementById('modal-img');
    if (project.image) {
        img.src = project.image;
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    // Tags
    document.getElementById('modal-tags').innerHTML =
        project.classifications.map(t => `<span class="tag">${t}</span>`).join('');

    // Files
    const filesContainer = document.getElementById('modal-files');
    filesContainer.innerHTML = '';

    if (project.files && project.files.length > 0) {
        project.files.forEach(f => {
            const link = document.createElement('a');
            link.href = f.url;
            link.className = 'file-item';
            link.target = "_blank"; // Prepare to open in new tab

            // Icon based on type
            let iconClass = 'fa-solid fa-file';
            if (f.type === 'pdf') iconClass = 'fa-solid fa-file-pdf';
            if (f.type === 'image') iconClass = 'fa-solid fa-file-image';
            if (f.type === 'link') iconClass = 'fa-solid fa-link';
            if (f.type === 'excel') iconClass = 'fa-solid fa-file-excel';
            if (f.type === 'ppt') iconClass = 'fa-solid fa-file-powerpoint';
            if (f.type === 'word') iconClass = 'fa-solid fa-file-word';
            if (f.type === 'code') iconClass = 'fa-solid fa-file-code';
            if (f.type === 'google') iconClass = 'fa-brands fa-google-drive';
            if (f.type === 'lock') iconClass = 'fa-solid fa-lock'; // Support for NDA files

            link.innerHTML = `
                <i class="${iconClass} file-icon"></i>
                <span>${f.name}</span>
            `;
            filesContainer.appendChild(link);
        });
    } else {
        filesContainer.innerHTML = '<p style="color:#64748b; font-size:0.9rem;">No files attached.</p>';
    }

    // Links
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    if (project.links && project.links.length > 0) {
        project.links.forEach(l => {
            const a = document.createElement('a');
            a.href = l.url;
            a.target = "_blank";
            a.className = 'btn-primary';
            a.innerHTML = `<i class="fa-solid fa-globe"></i> ${l.text}`;
            linksContainer.appendChild(a);

        });
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Disable scroll
}

/* 6. Animations (Intersection Observer) */
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* 7. Scroll To Top */
function initScrollToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

function updateFooter() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

/* 8. Visual Enhancements (Scroll & Nav) */
function initScrollVisuals() {
    window.addEventListener('scroll', () => {
        // 1. Scroll Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById("scrollProgress");
        if (progressBar) progressBar.style.width = scrolled + "%";

        // 2. Active Navigation Spy
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) { // Offset for navbar
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-section');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active-section');
            }
        });
    });
}
