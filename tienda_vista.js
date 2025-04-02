window.productosData = [
    // Lista de productos estática para #productosContainer
    {
        id: 1,
        nombre: "Netflix STANDARD",
        precio: "18.00",
        precio_renovacion: "18.00",
        imagen: "productos/NETFLIX_ESTANDAR.PNG", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 2,
        nombre: "Netflix PERFIL",
        precio: "10.00",
        precio_renovacion: "10.00",
        imagen: "productos/NETFLIX_PERFIL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 3,
        nombre: "Disney Plus",
        precio: "9.00",
        precio_renovacion: "10.00",
        imagen: "productos/DISNEY_PERFIL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 4,
        nombre: "Prime Video",
        precio: "8.50",
        precio_renovacion: "8.50",
        imagen: "productos/PRIME_VIDEO_PERFIL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 5,
        nombre: "HBO Max",
        precio: "8.50",
        precio_renovacion: "8.50",
        imagen: "productos/MAX_PERFIL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 6,
        nombre: "CRUNCHYROLL",
        precio: "7.00",
        precio_renovacion: "8.00",
        imagen: "productos/CRUNCHYROLL_PERFIL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 7,
        nombre: "Paramount Plus",
        precio: "8.50",
        precio_renovacion: "8.50",
        imagen: "productos/paramount.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 8,
        nombre: "Apple TV",
        precio: "38.00",
        precio_renovacion: "No Renovable",
        imagen: "productos/appletv.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 9,
        nombre: "Youtube Premium",
        precio: "10.00",
        precio_renovacion: "10.00",
        imagen: "productos/YOUTUBE_PREMIUM_INDIVIDUAL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 10,
        nombre: "Spotify",
        precio: "13.00",
        precio_renovacion: "13.00",
        imagen: "productos/SPOTIFY_INDIVIDUAL.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 11,
        nombre: "Apple Music",
        precio: "15.00",
        precio_renovacion: "15.00",
        imagen: "productos/applemusic.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 12,
        nombre: "Directiv Go",
        precio: "20.00",
        precio_renovacion: "22.00",
        imagen: "productos/directv.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 13,
        nombre: "Movistar Play",
        precio: "20.00",
        precio_renovacion: "20.00",
        imagen: "productos/movistarplay.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 14,
        nombre: "Chat Gpt Plus",
        precio: "18.00",
        precio_renovacion: "20.00",
        imagen: "productos/chatgpt.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 15,
        nombre: "Camva Pro",
        precio: "10.00",
        precio_renovacion: "10.00",
        imagen: "productos/camva.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 16,
        nombre: "Duolingo",
        precio: "10.00",
        precio_renovacion: "10.00",
        imagen: "productos/duolingo.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 18,
        nombre: "Redes Sociales",
        precio: "20.00",
        precio_renovacion: "No Renovable",
        imagen: "productos/seguidores.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 19,
        nombre: "Busqueda de Personas",
        precio: "20.00",
        precio_renovacion: "No Renovable",
        imagen: "productos/busqueda.png", // Asegúrate de que esta ruta sea correcta
    },
    {
        id: 20,
        nombre: "IpTV",
        precio: "10.00",
        precio_renovacion: "10",
        imagen: "productos/iptv.png", // Asegúrate de que esta ruta sea correcta
    },
    // Agrega más productos aquí si lo deseas
];

let currentPage = 0;
const productsPerPage = 8;
window.mostrarSoloStock = false;

// Función para ordenar productos (eliminamos la lógica de promoción ya que no se usará)
function sortProducts(products) {
    return [...products]; // No necesitamos ordenar por promoción
}

// Crear partículas de fondo
function createParticles(count) {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
        particle.style.animationDuration = `${15 + Math.random() * 30}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Configurar el toggle del filtro (eliminamos el filtro ya que no se usará stock)
function setupFilterToggle() {
    // No necesitamos el toggle, pero lo dejamos por si quieres usarlo en el futuro
    const toggle = document.getElementById('stockToggle');
    const textos = document.querySelectorAll('.filter-text');
    
    if (toggle) {
        toggle.checked = window.mostrarSoloStock;
        updateFilterTexts(window.mostrarSoloStock);
        
        toggle.addEventListener('change', () => {
            window.mostrarSoloStock = toggle.checked;
            updateFilterTexts(window.mostrarSoloStock);
            renderFilteredProducts();
            requestAnimationFrame(() => createRippleEffect(toggle));
        });
    } else {
        console.error("No se encontró el elemento #stockToggle");
    }
}

// Actualizar textos del filtro
function updateFilterTexts(checked) {
    const textos = document.querySelectorAll('.filter-text');
    textos.forEach((texto, index) => {
        if ((index === 0 && !checked) || (index === 1 && checked)) {
            texto.classList.add('active');
        } else {
            texto.classList.remove('active');
        }
    });
}

// Generar HTML de los productos (sin stock ni promoción, con renovación reubicada)
function generateProductsHTML(products) {
    return products.map(producto => {
        return `
            <div class="producto-item" data-id="${producto.id}">
                <div class="producto-front">
                    <div class="producto-banner">
                        <img loading="lazy" src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="producto-content">
                        <h3 class="producto-titulo" data-producto="${producto.nombre}">${producto.nombre}</h3>
                        <div class="precio-renovacion">
                            <span class="precio-label-renovacion">Renovación</span>
                            <span class="precio-valor-renovacion">S/ ${producto.precio_renovacion}</span>
                        </div>
                        <div class="precio-compra">
                            <span class="precio-valor-principal">S/ ${producto.precio}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar productos filtrados
function renderFilteredProducts() {
    const container = document.getElementById('productosContainer');
    if (!container) {
        console.error("No se encontró el elemento #productosContainer");
        return;
    }
    
    container.classList.add('filtering');
    
    requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        currentPage = 0;
        
        let productosRender = window.productosData; // No necesitamos filtrar por stock
        productosRender = sortProducts(productosRender);
        const pageProducts = productosRender.slice(0, productsPerPage);
        
        setTimeout(() => {
            container.innerHTML = '';
            const newHTML = generateProductsHTML(pageProducts);
            container.insertAdjacentHTML('beforeend', newHTML);
            container.style.display = 'grid';
            window.scrollTo(0, 0);
            container.classList.remove('filtering');
            container.addEventListener('click', handleProductClick);
        }, 50);
    });
}

// Efecto ripple para el filtro
function createRippleEffect(element) {
    if (window.innerWidth < 480 && !window.matchMedia('(min-device-pixel-ratio: 2)').matches) return;
    
    const container = element.closest('.epic-filter-container');
    if (!container) return;
    
    requestAnimationFrame(() => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
            position: absolute;
            background: rgba(229, 9, 20, 0.2);
            border-radius: 50%;
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            will-change: transform, opacity;
            animation: ripple 0.6s ease-out forwards;
            pointer-events: none;
        `;
        container.appendChild(ripple);
        setTimeout(() => {
            if (ripple.parentNode === container) container.removeChild(ripple);
        }, 600);
    });
}

// Manejar clics en productos
function handleProductClick(e) {
    const productItem = e.target.closest('.producto-item');
    if (!productItem) return;
    // Obtener la información del producto desde el atributo data-id
    const productId = productItem.getAttribute('data-id');
    const product = window.productosData.find(p => p.id == productId);

    if (product) {
        // Construir el mensaje para WhatsApp
        const phoneNumber = "51950441700";
        const message = `Estoy interesado en "${product.nombre}", precio S/ ${product.precio}. Necesito que me brinde el método de pago.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
    }
}



// Cargar más productos al hacer scroll
function checkForNewPage() {
    const lastProductRow = document.querySelector('#productosContainer .producto-item:last-child');
    if (!lastProductRow) return;
    
    const rect = lastProductRow.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight + 500;
    
    if (isVisible) {
        const nextPage = currentPage + 1;
        const startIdx = nextPage * productsPerPage;
        
        if (startIdx < window.productosData.length) {
            renderProductsPage(nextPage);
        }
    }
}

// Renderizar página de productos
function renderProductsPage(page) {
    const container = document.getElementById('productosContainer');
    if (!container) {
        console.error("No se encontró el elemento #productosContainer");
        return;
    }
    
    let productosRender = window.productosData;
    productosRender = sortProducts(productosRender);
    const startIdx = page * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    const pageProducts = productosRender.slice(startIdx, endIdx);
    
    if (pageProducts.length === 0) return;
    
    const newHTML = generateProductsHTML(pageProducts);
    container.insertAdjacentHTML('beforeend', newHTML);
    currentPage = page;
}

// Buscar imágenes disponibles para el carrusel
async function findAvailableImages() {
    const possibleImages = [
        'publicidad/slide1.png',
        'publicidad/slide2.png',
        'publicidad/slide3.png',
        'publicidad/slide4.png',
        'publicidad/slide5.png',
        'publicidad/slide6.png',
        'publicidad/slide7.png',
        'publicidad/slide8.png',
        'publicidad/slide9.PNG',
        
    ];
    
    const availableImages = [];
    
    function imageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }
    
    const checkPromises = possibleImages.map(async (url) => {
        const exists = await imageExists(url);
        if (exists) availableImages.push(url);
    });
    
    await Promise.all(checkPromises);
    console.log('Imágenes encontradas para el carrusel:', availableImages);
    return availableImages;
}

// Configurar carrusel
function setupCarousel() {
    const slidesContainer = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    
    if (!slidesContainer || !prevButton || !nextButton) {
        console.error("No se encontraron los elementos del carrusel");
        return;
    }
    
    findAvailableImages().then(availableImages => {
        if (availableImages.length === 0) {
            console.warn("No se encontraron imágenes para el carrusel. Ocultando el carrusel.");
            document.querySelector('.carousel-container').style.display = 'none';
            return;
        }
        
        slidesContainer.innerHTML = '';
        
        availableImages.forEach((url, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `<img src="${url}" alt="Publicidad">`;
            slidesContainer.appendChild(slide);
        });
        
        if (availableImages.length <= 1) return;
        
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
        
        const slides = slidesContainer.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        let slideInterval;
        
        function goToSlide(index) {
            const oldSlide = slides[currentSlide];
            const newSlide = slides[index];
            const container = slidesContainer.closest('.carousel-wrapper');
            container.parentNode.classList.add('carousel-transitioning');
            slides.forEach(slide => slide.classList.remove('active', 'previous'));
            oldSlide.classList.add('previous');
            newSlide.classList.add('active');
            currentSlide = index;
            setTimeout(() => {
                container.parentNode.classList.remove('carousel-transitioning');
            }, 1200);
        }
        
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(currentSlide);
            resetInterval();
        });
        
        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
            resetInterval();
        });
        
        function startInterval() {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                goToSlide(currentSlide);
            }, 5000);
        }
        
        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }
        
        startInterval();
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) clearInterval(slideInterval);
            else startInterval();
        });
    }).catch(error => {
        console.error("Error al configurar el carrusel:", error);
        document.querySelector('.carousel-container').style.display = 'none';
    });
}

// Evento principal
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado. Iniciando configuración...");
    
    setupCarousel();
    setupFilterToggle();
    renderFilteredProducts();
    
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 5 : 20;
    createParticles(particleCount);
    
    const scrollThrottle = isMobile ? 500 : 200;
    window.addEventListener('scroll', throttle(checkForNewPage, scrollThrottle));
});

// Función throttle
function throttle(func, delay) {
    let lastCall = 0;
    let timeoutId = null;
    
    return function(...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        
        if (remaining <= 0 || remaining > delay) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastCall = now;
            func.apply(this, args);
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                lastCall = Date.now();
                timeoutId = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}