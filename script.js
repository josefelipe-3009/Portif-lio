:root {
    --primary: #3b82f6;
    --primary-hover: #1d4ed8;
    --bg-body: linear-gradient(135deg, #0a192f, #1f2937);
    --bg-container: rgba(17, 24, 39, 0.95);
    --text-main: #e5e7eb;
    --text-muted: #9ca3af;
    --border-color: rgba(59, 130, 246, 0.2);
    --shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body.light-mode {
    --bg-body: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    --bg-container: rgba(255, 255, 255, 0.9);
    --text-main: #0f172a;
    --text-muted: #475569;
    --border-color: rgba(59, 130, 246, 0.15);
    --shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background: var(--bg-body);
    color: var(--text-main);
    line-height: 1.6;
    scroll-behavior: smooth;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2.5rem;
    background: var(--bg-container);
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}

.nav-brand {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-main);
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-menu a:hover {
    color: var(--primary);
    transform: translateY(-2px);
}

.theme-toggle {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 0.6rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: var(--transition);
}

.theme-toggle:hover {
    background: var(--primary);
    color: white;
    box-shadow: 0 0 15px var(--primary);
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: 2rem auto;
    background: var(--bg-container);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
}

.section {
    margin-top: 4rem;

}

.section h2 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 2rem;
    position: relative;
}

.section h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
}

.header-profile {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
}

.profile-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid var(--primary);
    object-fit: cover;
    transition: var(--transition);
}

.profile-img:hover {
    transform: scale(1.05) rotate(3deg);
}

.info h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--primary), #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.socials-top {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.socials-top a {
    color: var(--primary);
    font-size: 1.5rem;
    transition: var(--transition);
}

.socials-top a:hover {
    transform: scale(1.2);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    list-style: none;
}

.skill-item {
    background: rgba(59, 130, 246, 0.05);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: var(--transition);
}

.skill-item:hover {
    background: rgba(59, 130, 246, 0.15);
    transform: translateY(-5px);
}

.skill-item i {
    font-size: 2rem;
    color: var(--primary);
    display: block;
    margin-bottom: 0.5rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-container);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.project-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
}

.project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;
}

.project-links a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.contact-form {
    display: grid;
    gap: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-muted);
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-main);
}

.submit-btn {
    background: var(--primary);
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
}

.submit-btn:hover {
    background: var(--primary-hover);
}

.footer {
    text-align: center;
    padding: 3rem;
    color: var(--text-muted);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .header-profile { flex-direction: column; text-align: center; }
    .form-row { grid-template-columns: 1fr; }
    .nav-menu { display: none; }
}