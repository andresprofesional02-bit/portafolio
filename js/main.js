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
        name: "Gestión Documental",
        icon: "fas fa-folder-open",
        color: "text-blue-400",
        details: [
            "Digitalización de más de 1000 expedientes administrativos.",
            "Implementación de sistema de etiquetado por códigos QR.",
            "Reducción del tiempo de búsqueda de documentos en un 40%."
        ]
    },
    {
        name: "Redes Sociales",
        icon: "fab fa-instagram",
        color: "text-pink-500",
        details: [
            "Gestión integral de Instagram y Facebook para Variedades Marta GB.",
            "Crecimiento de la comunidad en un 200% en el último año.",
            "Diseño de campañas de interacción y fidelización."
        ]
    },
    {
        name: "Trabajo en Equipo",
        icon: "fas fa-users",
        color: "text-green-500",
        details: [
            "Coordinación diaria con el equipo de ventas y logística.",
            "Facilitador en reuniones de planificación semanal.",
            "Resolución de conflictos y mediación interna."
        ]
    },
    {
        name: "Gestión de Proyectos",
        icon: "fas fa-tasks",
        color: "text-rose-500",
        details: [
            "Liderazgo en la renovación de la imagen corporativa.",
            "Seguimiento de tiempos y entregables con herramientas ágiles.",
            "Organización de eventos de lanzamiento de productos."
        ]
    },
    {
        name: "Organización",
        icon: "fas fa-clipboard-check",
        color: "text-yellow-400",
        details: [
            "Mantenimiento de inventarios actualizados en tiempo real.",
            "Planificación de agenda ejecutiva y comercial.",
            "Metodología 5S aplicada al espacio de trabajo."
        ]
    },
    {
        name: "Proactividad",
        icon: "fas fa-lightbulb",
        color: "text-accent",
        details: [
            "Propuesta e implementación de nuevos canales de venta digital.",
            "Anticipación a problemas logísticos en temporadas altas.",
            "Aprendizaje continuo de nuevas herramientas de diseño."
        ]
    },
    {
        name: "Adaptabilidad",
        icon: "fas fa-sync-alt",
        color: "text-cyan-400",
        details: [
            "Rápida transición a trabajo remoto durante contingencias.",
            "Adaptación a nuevos softwares de gestión interna.",
            "Versatilidad para cubrir diferentes roles según necesidad."
        ]
    },
    {
        name: "Office Suite",
        icon: "fas fa-file-excel",
        color: "text-green-600",
        details: [
            "Dominio avanzado de Excel para reportes de ventas.",
            "Creación de presentaciones impactantes en PowerPoint.",
            "Automatización de correos y tareas administrativas."
        ]
    },
];

const projects = [
    {
        title: "Estrategia Digital Variedades Marta GB",
        category: "social",
        description: "Creación de contenido y gestión de comunidad durante 5 años. Crecimiento sostenido de la marca.",
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
        title: "Planificación de Contenidos",
        category: "contenido",
        description: "Diseño de parrillas de contenido mensual y redacción de copys creativos.",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Planeación", "Creatividad"],
        link: "#"
    },
    {
        title: "Coordinación de Proyectos Internos",
        category: "admin",
        description: "Liderazgo en pequeños proyectos de mejora interna y logística de eventos corporativos.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Liderazgo", "Logística"],
        link: "#"
    },
    {
        title: "Fotografía de Producto",
        category: "contenido",
        description: "Captura y edición de fotos para catálogo digital de productos.",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Fotografía", "Catálogo"],
        link: "#"
    }
];

// --- 3. FUNCIONES DE RENDERIZADO Y FILTRADO ---
const projectsContainer = document.getElementById('projects-container');

function renderProjects(filter = 'all') {
    if (!projectsContainer) return; // Guard clause

    projectsContainer.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const tagsHtml = project.tags.map(tag =>
            `<span class="px-2 py-1 text-xs font-semibold bg-slate-700 text-rose-300 rounded-md border border-slate-600">${tag}</span>`
        ).join('');

        const delay = index * 100;

        const projectHtml = `
            <div class="reveal bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group animate-in" style="transition-delay: ${delay}ms">
                <div class="relative overflow-hidden h-52 img-hover-container">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover z-0">
                    <div class="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                        <a href="${project.link}" class="px-4 py-2 bg-primary text-white rounded-full font-bold hover:bg-rose-600 transition-colors transform hover:scale-105 shadow-lg">
                            Ver Detalle
                        </a>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-serif">${project.title}</h3>
                    <p class="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-2">
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
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(category);
}

// --- 4. RENDERIZADO DE SKILLS INTERACTIVAS ---

const skillsContainer = document.getElementById('skills-container');

function renderSkills() {
    if (!skillsContainer) return; // Guard clause

    skillsContainer.innerHTML = '';
    skills.forEach((skill, index) => {
        const delay = index * 50;
        // Se añade onclick para abrir el modal
        const skillHtml = `
            <div onclick="openSkillModal(${index})" class="reveal p-6 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center justify-center hover:bg-slate-750 hover:border-primary transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1" style="transition-delay: ${delay}ms">
                <i class="${skill.icon} text-4xl mb-4 ${skill.color} transform group-hover:scale-110 transition-transform duration-300"></i>
                <span class="font-medium text-slate-300 text-center group-hover:text-white transition-colors">${skill.name}</span>
                <span class="mt-2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">Ver detalles</span>
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
    modalIcon.className = `${skill.icon} text-2xl ${skill.color}`;

    modalDetails.innerHTML = '';
    skill.details.forEach(detail => {
        const li = document.createElement('li');
        li.className = "flex items-start";
        li.innerHTML = `<i class="fas fa-check-circle text-primary mt-1 mr-2 text-xs"></i> <span>${detail}</span>`;
        modalDetails.appendChild(li);
    });

    // Mostrar modal
    modal.classList.remove('hidden');
    // Animacion de entrada (pequeño delay para permitir que el navegador renderice el 'block')
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
        modalPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }, 10);

    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function closeSkillModal() {
    if (!modal) return;
    // Animacion de salida
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
    modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restaurar scroll
    }, 300); // Esperar a que termine la transición (duration-300 por defecto en tailwind si no se especifica, aqui asumimos 300ms por seguridad o ajustamos clases css)
}

// Cerrar al hacer clic fuera del panel
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modal.querySelector('.flex')) { // Ajuste para detectar clic en el overlay contenedor
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


// --- 6. EJECUCIÓN INICIAL Y UTILIDADES ---

if (projectsContainer) renderProjects('all');
if (skillsContainer) renderSkills();

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// URL del Script de Google Apps (REEMPLAZA ESTO CON TU URL GENERADA)
const GOOGLE_SCRIPT_URL = 'INGRESA_TU_URL_AQUI';

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (GOOGLE_SCRIPT_URL === 'INGRESA_TU_URL_AQUI' || GOOGLE_SCRIPT_URL === '') {
            alert("Por favor configura la URL del Google Script en js/main.js primero.");
            return;
        }

        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        const form = this;

        // Feedback visual
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        btn.disabled = true;

        // Recopilar datos
        const formData = new FormData(form);

        // Enviar a Google Sheets usa fetch no-cors o cors si el script lo permite (usualmente no-cors para scripts simples)
        // Pero la mejor forma para estos scripts es un POST simple.
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                // En aplicaciones web de Apps Script, el modo no-cors no da acceso al estado de respuesta real, 
                // pero asumimos exito si no da error de red.
                console.log('Success!', response);
                const successMsg = document.getElementById('success-message');
                if (successMsg) {
                    successMsg.classList.remove('hidden');
                    setTimeout(() => {
                        successMsg.classList.add('hidden');
                    }, 5000);
                }
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
            })
            .finally(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            });
    });
}

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    }
});

// --- 7. CUSTOM CURSOR LOGIC ---
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

// Solo activar si los elementos existen (para evitar errores en movil donde tal vez se oculten)
if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot sigue al mouse instantaneamente
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline sigue con una pequeña animación (usando animate para suavidad extra)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Detectar elementos interactivos para efecto hover
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
}
