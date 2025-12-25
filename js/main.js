// --- 1. CONFIGURACIÓN DEL OBSERVER ---
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// --- 2. DATOS ACTUALIZADOS (Perfil: Admin & Comms) ---

const skills = [
    {
        name: "Planificación y Org.",
        icon: "fas fa-calendar-check",
        color: "text-secondary",
        details: [
            "Gestión eficiente de tiempos y recursos.",
            "Organización de eventos y agendas.",
            "Priorización de tareas clave."
        ]
    },
    {
        name: "Comunicación Asertiva",
        icon: "fas fa-comments",
        color: "text-secondary",
        details: [
            "Expresión clara de ideas y objetivos.",
            "Escucha activa y feedback constructivo.",
            "Manejo adecuado del lenguaje verbal y no verbal."
        ]
    },
    {
        name: "Trabajo en Equipo",
        icon: "fas fa-users",
        color: "text-secondary",
        details: [
            "Colaboración en entornos dinámicos.",
            "Apoyo mutuo para el cumplimiento de metas.",
            "Integración y buen clima laboral."
        ]
    },
    {
        name: "Ética y Objetividad",
        icon: "fas fa-balance-scale",
        color: "text-secondary",
        details: [
            "Actuación con integridad y transparencia.",
            "Toma de decisiones imparciales.",
            "Compromiso con valores profesionales."
        ]
    },
    {
        name: "Producción Multimedia",
        icon: "fas fa-video",
        color: "text-secondary",
        details: [
            "Manejo de cámaras y equipos de grabación.",
            "Asistencia de producción en piso.",
            "Transmisión y proyección en vivo."
        ]
    },
    {
        name: "Edición Audiovisual",
        icon: "fas fa-film",
        color: "text-secondary",
        details: [
            "Post-producción de video y audio.",
            "Elaboración de guiones y continuidades.",
            "Narrativa visual coherente."
        ]
    },
    {
        name: "Pensamiento Crítico",
        icon: "fas fa-brain",
        color: "text-secondary",
        details: [
            "Evaluación objetiva de situaciones.",
            "Resolución de problemas complejos.",
            "Propuesta de soluciones innovadoras."
        ]
    },
    {
        name: "Análisis y Síntesis",
        icon: "fas fa-search-plus",
        color: "text-secondary",
        details: [
            "Interpretación de datos e información.",
            "Resumen ejecutivo de contenidos.",
            "Identificación de puntos clave."
        ]
    },
    {
        name: "Creatividad",
        icon: "fas fa-lightbulb",
        color: "text-secondary",
        details: [
            "Generación de ideas originales.",
            "Enfoque innovador en proyectos.",
            "Diseño de contenidos atractivos."
        ]
    },
    {
        name: "Trabajo bajo Presión",
        icon: "fas fa-stopwatch",
        color: "text-secondary",
        details: [
            "Mantenimiento de la calma en crisis.",
            "Cumplimiento de plazos ajustados.",
            "Adaptabilidad a cambios repentinos."
        ]
    }
];

const projects = [
    {
        title: "Producción Telepacífico",
        category: "contenido",
        description: "Creación de guiones, continuidades y asistencia de producción de piso. Programación de invitados.",
        image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["TV", "Producción", "Guiones"],
        link: "#"
    },
    {
        title: "Estrategia Digital Variedades Marta GB",
        category: "social",
        description: "Creación de contenido y gestión de comunidad. Crecimiento sostenido de la marca.",
        image: "https://images.unsplash.com/photo-1557838402-282f877f2cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Social Media", "Community Management"],
        link: "#"
    },
    {
        title: "Gestión Documental y Archivo",
        category: "admin",
        description: "Organización y digitalización de documentos administrativos, optimizando el flujo de trabajo.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Administración", "Organización"],
        link: "#"
    },
    {
        title: "Vocal Comunicaciones IPUC",
        category: "contenido",
        description: "Camarógrafo, realizador y moderador digital. Aporte creativo en puesta en escena.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Cámaras", "Streaming", "Liderazgo"],
        link: "#"
    },
    {
        title: "Coordinación de Proyectos Internos",
        category: "admin",
        description: "Liderazgo en pequeños proyectos de mejora interna y logística de eventos corporativos.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Liderazgo", "Logística"],
        link: "#"
    }
];

// --- 3. FUNCIONES DE RENDERIZADO Y FILTRADO ---
const projectsContainer = document.getElementById('projects-container');

function renderProjects(filter = 'all') {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const tagsHtml = project.tags.map(tag =>
            `<span class="px-2 py-1 text-xs font-bold font-sans bg-gray-100 text-secondary uppercase border border-black dark:bg-slate-800 dark:text-gray-300 dark:border-gray-600">${tag}</span>`
        ).join('');

        const delay = index * 100;

        // Newspaper Style Card with Dark Mode support
        const projectHtml = `
            <div class="reveal bg-white border-2 border-black p-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 group animate-in dark:bg-slate-900 dark:border-white dark:shadow-[8px_8px_0px_rgba(255,255,255,0.5)]" style="transition-delay: ${delay}ms">
                <div class="relative overflow-hidden h-48 border border-black mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 dark:border-white">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-bold text-primary uppercase tracking-widest">${project.category}</span>
                    <h3 class="text-xl font-black text-secondary font-serif leading-tight group-hover:underline underline-offset-2 dark:text-white">${project.title}</h3>
                    <p class="text-gray-600 text-sm font-serif line-clamp-3 mb-2 dark:text-gray-400">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHtml;
    });

    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

function filterProjects(category, btn) {
    if (!projectsContainer) return;
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
        b.classList.add('text-gray-500', 'dark:text-gray-400');
    });
    btn.classList.add('active', 'bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
    btn.classList.remove('text-gray-500', 'dark:text-gray-400');
    renderProjects(category);
}

// --- 4. RENDERIZADO DE SKILLS INTERACTIVAS (Clasificados Style) ---

const skillsContainer = document.getElementById('skills-container');

function renderSkills() {
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';
    skills.forEach((skill, index) => {
        const delay = index * 50;
        // Simple Grid Item with borders and Dark Mode support
        const skillHtml = `
            <div onclick="openSkillModal(${index})" class="reveal p-6 bg-white border-r border-b border-black flex flex-col items-center justify-center hover:bg-gray-100 transition-all duration-200 cursor-pointer group dark:bg-slate-900 dark:border-white dark:hover:bg-slate-800" style="transition-delay: ${delay}ms">
                <i class="${skill.icon} text-3xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-primary"></i>
                <span class="font-bold font-serif text-sm text-center uppercase tracking-wider dark:text-white">${skill.name}</span>
                <span class="mt-2 text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors dark:group-hover:text-white">Ver Info +</span>
            </div>
        `;
        skillsContainer.innerHTML += skillHtml;
    });
}


// --- 5. LÓGICA DEL MODAL ---
const modal = document.getElementById('skill-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalDetails = document.getElementById('modal-details');

function openSkillModal(index) {
    if (!modal) return;
    const skill = skills[index];

    // Poblar datos
    modalTitle.textContent = skill.name;
    modalIcon.className = `${skill.icon}`; // Icon class logic simplified

    modalDetails.innerHTML = '';
    skill.details.forEach(detail => {
        const li = document.createElement('li');
        li.className = "flex items-start text-gray-800 dark:text-gray-300";
        li.innerHTML = `<i class="fas fa-caret-right text-primary mt-1 mr-2"></i> <span>${detail}</span>`;
        modalDetails.appendChild(li);
    });

    // Mostrar modal
    modal.classList.remove('hidden');

    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
        modalPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeSkillModal() {
    if (!modal) return;
    // Animacion de salida
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
    modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Cerrar al hacer clic fuera del panel
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modal.querySelector('.flex')) {
            closeSkillModal();
        }
    });
}

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (modal && e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeSkillModal();
    }
});


// --- 6. DARK MODE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeText) themeText.textContent = "Leer Edición Diurna";
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (themeText) themeText.textContent = "Leer Edición Nocturna";
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle Event
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(!isDark);
    });
}


// --- 7. INICIALIZACION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial renders
    renderProjects();
    renderSkills();

    // Intersection Observer loop
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // Set Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle logic
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu'); // Note: Ensure this exists in HTML if used, otherwise it's just the button scrolling or similar. In this design, we used a top bar, but let's keep the logic safe.

    // In the "Masthead" design, we converted the menu to a simple list. 
    // If mobile menu logic is needed for a specific dropdown, we can add it. 
    // For now, the "btn-mobile-menu" scrolls to top or toggles a hidden menu if implemented.

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
