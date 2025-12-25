// --- 1. OBSERVER CONFIGURATION ---
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

// --- 2. DATA (Dual Language) ---

// --- SKILLS DATA ---
const skillsData = {
    es: [
        {
            name: "Planificación y Org.",
            icon: "fas fa-calendar-check",
            details: ["Gestión eficiente de tiempos y recursos.", "Organización de eventos y agendas.", "Priorización de tareas clave."]
        },
        {
            name: "Comunicación Asertiva",
            icon: "fas fa-comments",
            details: ["Expresión clara de ideas y objetivos.", "Escucha activa y feedback constructivo.", "Manejo adecuado del lenguaje verbal y no verbal."]
        },
        {
            name: "Trabajo en Equipo",
            icon: "fas fa-users",
            details: ["Colaboración en entornos dinámicos.", "Apoyo mutuo para el cumplimiento de metas.", "Integración y buen clima laboral."]
        },
        {
            name: "Ética y Objetividad",
            icon: "fas fa-balance-scale",
            details: ["Actuación con integridad y transparencia.", "Toma de decisiones imparciales.", "Compromiso con valores profesionales."]
        },
        {
            name: "Producción Multimedia",
            icon: "fas fa-video",
            details: ["Manejo de cámaras y equipos de grabación.", "Asistencia de producción en piso.", "Transmisión y proyección en vivo."]
        },
        {
            name: "Edición Audiovisual",
            icon: "fas fa-film",
            details: ["Post-producción de video y audio.", "Elaboración de guiones y continuidades.", "Narrativa visual coherente."]
        },
        {
            name: "Pensamiento Crítico",
            icon: "fas fa-brain",
            details: ["Evaluación objetiva de situaciones.", "Resolución de problemas complejos.", "Propuesta de soluciones innovadoras."]
        },
        {
            name: "Análisis y Síntesis",
            icon: "fas fa-search-plus",
            details: ["Interpretación de datos e información.", "Resumen ejecutivo de contenidos.", "Identificación de puntos clave."]
        }
    ],
    en: [
        {
            name: "Planning & Org.",
            icon: "fas fa-calendar-check",
            details: ["Efficient time and resource management.", "Event and agenda organization.", "Prioritization of key tasks."]
        },
        {
            name: "Assertive Comm.",
            icon: "fas fa-comments",
            details: ["Clear expression of ideas and goals.", "Active listening and constructive feedback.", "Proper handling of verbal and non-verbal language."]
        },
        {
            name: "Teamwork",
            icon: "fas fa-users",
            details: ["Collaboration in dynamic environments.", "Mutual support to meet goals.", "Integration and good work climate."]
        },
        {
            name: "Ethics & Objectivity",
            icon: "fas fa-balance-scale",
            details: ["Acting with integrity and transparency.", "Impartial decision making.", "Commitment to professional values."]
        },
        {
            name: "Multimedia Prod.",
            icon: "fas fa-video",
            details: ["Camera and recording equipment handling.", "Floor production assistance.", "Live streaming and projection."]
        },
        {
            name: "Audiovisual Editing",
            icon: "fas fa-film",
            details: ["Video and audio post-production.", "Script writing and continuity.", "Coherent visual narrative."]
        },
        {
            name: "Critical Thinking",
            icon: "fas fa-brain",
            details: ["Objective situation evaluation.", "Complex problem resolution.", "Proposal of innovative solutions."]
        },
        {
            name: "Analysis & Synthesis",
            icon: "fas fa-search-plus",
            details: ["Data and information interpretation.", "Executive content summary.", "Identification of key points."]
        }
    ]
};

// --- PROJECTS DATA ---
const projectsData = {
    es: [
        {
            title: "Producción Telepacífico",
            category: "contenido",
            description: "Creación de guiones, continuidades y asistencia de producción de piso. Programación de invitados.",
            image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["TV", "Producción", "Guiones"]
        },
        {
            title: "Estrategia Digital Variedades Marta GB",
            category: "social",
            description: "Creación de contenido y gestión de comunidad. Crecimiento sostenido de la marca.",
            image: "https://images.unsplash.com/photo-1557838402-282f877f2cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Social Media", "Community Management"]
        },
        {
            title: "Gestión Documental y Archivo",
            category: "admin",
            description: "Organización y digitalización de documentos administrativos, optimizando el flujo de trabajo.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Administración", "Organización"]
        },
        {
            title: "Vocal Comunicaciones IPUC",
            category: "contenido",
            description: "Camarógrafo, realizador y moderador digital. Aporte creativo en puesta en escena.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Cámaras", "Streaming", "Liderazgo"]
        },
        {
            title: "Coordinación de Proyectos Internos",
            category: "admin",
            description: "Liderazgo en pequeños proyectos de mejora interna y logística de eventos corporativos.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Liderazgo", "Logística"]
        }
    ],
    en: [
        {
            title: "Telepacífico Production",
            category: "contenido",
            description: "Creation of scripts, continuities, and floor production assistance. Guest scheduling.",
            image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["TV", "Production", "Scripts"]
        },
        {
            title: "Digital Strategy Variedades Marta GB",
            category: "social",
            description: "Content creation and community management. Sustained brand growth.",
            image: "https://images.unsplash.com/photo-1557838402-282f877f2cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Social Media", "Community Management"]
        },
        {
            title: "Document Management & Archiving",
            category: "admin",
            description: "Organization and digitization of administrative documents, optimizing workflow.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Administration", "Organization"]
        },
        {
            title: "Communications Vocal IPUC",
            category: "contenido",
            description: "Cameraman, producer, and digital moderator. Creative contribution to staging.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Cameras", "Streaming", "Leadership"]
        },
        {
            title: "Internal Project Coordination",
            category: "admin",
            description: "Leadership in small internal improvement projects and corporate event logistics.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Leadership", "Logistics"]
        }
    ]
};

// --- BLOG MODAL DATA ---
const blogData = {
    es: [
        {
            id: 1,
            title: "La Voz que Vende: El Poder del Tono",
            date: "20 Diciembre 2025",
            content: `<p class="mb-4"><strong>El tono de voz es una herramienta subestimada en el mundo de las ventas.</strong> A menudo nos centramos en el guion, olvidando que el "cómo" se dice puede ser más impactante.</p><p class="mb-4">Un tono cálido pero firme genera confianza inmediata. La modulación es clave para mantener la atención.</p><p><strong>Consejo:</strong> Grábate simulando una venta y escucha tu ritmo.</p>`
        },
        {
            id: 2,
            title: "Orden en el Caos Administrativo",
            date: "18 Diciembre 2025",
            content: `<p class="mb-4"><strong>La administración eficiente son sistemas claros.</strong> En Variedades Marta GB, un sistema de inventario simple redujo pérdidas en un 15%.</p><p class="mb-4">Cada documento debe tener su lugar. Cuando el flujo es predecible, la creatividad fluye.</p>`
        },
        {
            id: 3,
            title: "El Cliente Digital: Nueva Era",
            date: "15 Diciembre 2025",
            content: `<p class="mb-4">La inmediatez sin empatía se siente robótica. El usuario valora más una respuesta honesta que una solución automática.</p><p><strong>Clave:</strong> Humanizar cada punto de contacto digital.</p>`
        }
    ],
    en: [
        {
            id: 1,
            title: "The Voice that Sells: The Power of Tone",
            date: "December 20, 2025",
            content: `<p class="mb-4"><strong>Tone of voice is an underestimated tool in sales.</strong> We often focus on the script, forgetting that "how" you say it matters more.</p><p class="mb-4">A warm but firm tone builds immediate trust. Modulation is key to keeping attention.</p><p><strong>Tip:</strong> Record yourself simulating a sale and listen to your rhythm.</p>`
        },
        {
            id: 2,
            title: "Order in Administrative Chaos",
            date: "December 18, 2025",
            content: `<p class="mb-4"><strong>Efficient administration is about clear systems.</strong> At Variedades Marta GB, a simple inventory system reduced losses by 15%.</p><p class="mb-4">Every document must have a home. When flow is predictable, creativity flows.</p>`
        },
        {
            id: 3,
            title: "The Digital Client: New Era",
            date: "December 15, 2025",
            content: `<p class="mb-4">Immediacy without empathy feels robotic. Users value an honest response more than an automated one.</p><p class="mb-4"><strong>Key:</strong> Humanize every digital touchpoint.</p>`
        }
    ]
};

// --- HELPER: DETECT LANGUAGE ---
function getCurrentLang() {
    // Check URL 
    if (window.location.pathname.includes('index_en.html')) return 'en';
    if (document.documentElement.lang === 'en') return 'en'; // Backup check
    return 'es';
}

// --- LANGUAGE MENU TOGGLE ---
function toggleLanguageMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Close lang menu when clicking outside
window.addEventListener('click', function (e) {
    const menu = document.getElementById('lang-menu');
    const btn = document.getElementById('lang-btn');
    if (menu && btn && !menu.classList.contains('hidden')) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.add('hidden');
        }
    }
});


// --- 3. RENDER FUNCTIONS ---
const projectsContainer = document.getElementById('projects-container');
const skillsContainer = document.getElementById('skills-container');

function renderProjects(filter = 'all') {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';
    const lang = getCurrentLang();
    const projects = projectsData[lang]; // Use correct array

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const tagsHtml = project.tags.map(tag =>
            `<span class="px-2 py-1 text-xs font-bold font-sans bg-gray-100 text-secondary uppercase border border-black dark:bg-slate-800 dark:text-gray-300 dark:border-gray-600">${tag}</span>`
        ).join('');
        const delay = index * 100;

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

function renderSkills() {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = '';

    const lang = getCurrentLang();
    const skills = skillsData[lang];

    skills.forEach((skill, index) => {
        const delay = index * 50;
        const skillHtml = `
            <div onclick="openSkillModal(${index})" class="reveal p-6 bg-white border-r border-b border-black flex flex-col items-center justify-center hover:bg-gray-100 transition-all duration-200 cursor-pointer group dark:bg-slate-900 dark:border-white dark:hover:bg-slate-800" style="transition-delay: ${delay}ms">
                <i class="${skill.icon} text-3xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300 dark:text-white dark:group-hover:text-primary"></i>
                <span class="font-bold font-serif text-sm text-center uppercase tracking-wider dark:text-white">${skill.name}</span>
                <span class="mt-2 text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors dark:group-hover:text-white">${lang === 'es' ? 'Ver Info +' : 'View Info +'}</span>
            </div>
        `;
        skillsContainer.innerHTML += skillHtml;
    });
}


// --- 4. MODALS LOGIC ---

// Skills Modal
const modal = document.getElementById('skill-modal'); // Assuming HTML has this ID
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalDetails = document.getElementById('modal-details');

function openSkillModal(index) {
    if (!modal) return;
    const lang = getCurrentLang();
    const skill = skillsData[lang][index];

    modalTitle.textContent = skill.name;
    modalIcon.className = `${skill.icon}`;
    modalDetails.innerHTML = '';

    skill.details.forEach(detail => {
        const li = document.createElement('li');
        li.className = "flex items-start text-gray-800 dark:text-gray-300";
        li.innerHTML = `<i class="fas fa-caret-right text-primary mt-1 mr-2"></i> <span>${detail}</span>`;
        modalDetails.appendChild(li);
    });

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
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
    modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modal.querySelector('.flex')) closeSkillModal();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSkillModal();
        closeBlogModal();
    }
});


// Blog Modal
const blogModal = document.getElementById('blog-modal');
const blogModalBackdrop = document.getElementById('blog-modal-backdrop');
const blogModalContent = document.getElementById('blog-modal-content');

function openBlogModal(id) {
    if (!blogModal) return;
    const lang = getCurrentLang();
    const post = blogData[lang].find(p => p.id === id);
    if (!post) return;

    document.getElementById('blog-modal-date').textContent = post.date;
    document.getElementById('blog-modal-title').textContent = post.title;
    document.getElementById('blog-modal-body').innerHTML = post.content;

    blogModal.classList.remove('hidden');
    setTimeout(() => {
        blogModalBackdrop.classList.remove('opacity-0');
        blogModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    if (!blogModal) return;
    blogModalBackdrop.classList.add('opacity-0');
    blogModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        blogModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

if (blogModalBackdrop) {
    blogModalBackdrop.addEventListener('click', closeBlogModal);
}

// --- 5. INITIALIZATION ---

function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dark Mode Init
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Set Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}
// --- 7. CURRENT DATE LOGIC ---
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;

    const now = new Date();
    const isEnglish = document.documentElement.lang === 'en' || window.location.pathname.includes('index_en.html');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const lang = isEnglish ? 'en-US' : 'es-ES';

    // Format: "Sábado, 25 de Diciembre de 2025"
    let dateString = now.toLocaleDateString(lang, options);

    // Capitalize for style
    dateElement.textContent = dateString.toUpperCase();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // ... existing init code if any, or just run independent functions
    updateDate();
});
