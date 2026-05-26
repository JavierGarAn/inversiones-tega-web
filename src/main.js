import './style.css';

/* ========================================================
   1. DATABASE: PRODUCTS & GALLERY
   ======================================================== */
const PRODUCTS_DATA = [
  {
    id: 'epp-1',
    name: 'Casco de Seguridad de Alta Resistencia (Clase E)',
    category: 'epp',
    categoryName: 'EPPs y Seguridad',
    desc: 'Casco dieléctrico de policarbonato con suspensión de 6 puntos, resistente a impactos de hasta 20,000 voltios. Normativa ANSI Z89.1.',
    price: 'Cotizar x Mayor',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'epp-2',
    name: 'Guantes de Nitrilo Industrial Nitri-Tega',
    category: 'epp',
    categoryName: 'EPPs y Seguridad',
    desc: 'Guantes de protección química y abrasiva de alto calibre, antideslizantes para manipulación de fierros y agregados. Bolsa x 12 pares.',
    price: 'Cotizar por Docena',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'cemento-1',
    name: 'Cemento Portland Tipo I - Alta Resistencia',
    category: 'cemento',
    categoryName: 'Cemento y Tarrajeo',
    desc: 'Cemento ultra-resistente ideal para estructuras, columnas, cimientos y vaciados de losa de alto tránsito. Bolsa de 42.5 kg.',
    price: 'Precio por Pallet',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'tuberias-1',
    name: 'Tubería de PVC Clase 10 Pesada 4" x 5m',
    category: 'tuberias',
    categoryName: 'Tuberías y PVC',
    desc: 'Tubo de PVC pesado para canalización de desagüe sanitario y pluvial. Resistencia superior al aplastamiento y corrosión.',
    price: 'Cotizar lote',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e5742383?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'agregados-1',
    name: 'Arena Gruesa de Cantera Fina',
    category: 'agregados',
    categoryName: 'Agregados',
    desc: 'Agregado seleccionado libre de impurezas orgánicas, ideal para mezclas de concreto y asentados de muros. Despacho por M3 o Volquete.',
    price: 'Venta por Metro Cúbico',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'agregados-2',
    name: 'Piedra Chancada de 1/2"',
    category: 'agregados',
    categoryName: 'Agregados',
    desc: 'Agregado grueso triturado de alta dureza, óptimo para la elaboración de concreto armado estructural de alta resistencia.',
    price: 'Despacho x Volquete',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'senales-1',
    name: 'Malla de Señalización de Obra (Naranja)',
    category: 'senales',
    categoryName: 'Señalización',
    desc: 'Malla plástica de seguridad vial de polietileno de alta densidad con protección UV. Rollo de 1m x 50m.',
    price: 'Cotizar por Rollo',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'herramientas-1',
    name: 'Lampa Tipo Cuchara de Acero Templado',
    category: 'herramientas',
    categoryName: 'Herramientas',
    desc: 'Lampa de construcción con mango de madera reforzado y hoja de acero templado, especial para movimiento de agregados pesados.',
    price: 'Precio Mayorista',
    image: 'https://images.unsplash.com/photo-1530124560072-aae98229d49c?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'ferreteria-1',
    name: 'Alambre Negro Recocido N° 16',
    category: 'ferreteria',
    categoryName: 'Ferretería General',
    desc: 'Alambre recocido de acero de excelente ductilidad, utilizado para amarres de fierro estructural en vigas y columnas. Rollo de 50kg.',
    price: 'Cotizar x Tonelada',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'plasticos-1',
    name: 'Plástico Doble Ancho Negro (Calibre 8)',
    category: 'plasticos',
    categoryName: 'Plásticos y Mallas',
    desc: 'Plástico industrial aislante de humedad, ideal para cimentaciones, falsos pisos y protección temporal de materiales ante lluvias.',
    price: 'Cotizar x Rollo',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=400&auto=format&fit=crop'
  }
];

const GALLERY_DATA = [
  {
    image: '/assets/hero_construction.png',
    category: 'Obras Civiles',
    title: 'Edificaciones de alta densidad en San Isidro'
  },
  {
    image: '/assets/tega_warehouse.png',
    category: 'Almacenes',
    title: 'Stock permanente de tuberías y agregados en El Agustino'
  },
  {
    image: '/assets/tega_logistics.png',
    category: 'Logística',
    title: 'Despacho matutino de mallas y cementos'
  },
  {
    image: '/assets/credit_concept.png',
    category: 'Financiamiento',
    title: 'Planificación de crédito con constructoras aliadas'
  },
  {
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=600&auto=format&fit=crop',
    category: 'Seguridad',
    title: 'Inspección técnica de EPPs en ingreso a obra'
  },
  {
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop',
    category: 'Suministros',
    title: 'Entrega masiva de cemento para vaciado estructural'
  }
];

/* ========================================================
   2. APP STATE: QUOTATION BASKET
   ======================================================== */
let cart = [];

// Initialize local storage cart
const initCart = () => {
  const savedCart = localStorage.getItem('inv_tega_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }
};

const saveCart = () => {
  localStorage.setItem('inv_tega_cart', JSON.stringify(cart));
};

/* ========================================================
   3. DOM ELEMENTS
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Navigation & Themes
  const header = document.getElementById('header');
  const burger = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  
  // Cart Drawers
  const cartToggle = document.getElementById('cart-toggle');
  const cartDrawer = document.getElementById('cart-drawer-element');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartClose = document.getElementById('cart-drawer-close-btn');
  const cartBadge = document.getElementById('cart-badge-count');
  const cartItemsTarget = document.getElementById('cart-items-list-target');
  const cartDrawerCountLabel = document.getElementById('cart-drawer-count-label');
  const cartDrawerCheckoutBtn = document.getElementById('cart-drawer-checkout-btn');
  
  // Products & Gallery Injections
  const productsTarget = document.getElementById('products-list-target');
  const galleryTarget = document.getElementById('gallery-grid-target');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Lightbox Modal
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img-element');
  const lightboxCaption = document.getElementById('lightbox-caption-element');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxPrev = document.getElementById('lightbox-prev-btn');
  const lightboxNext = document.getElementById('lightbox-next-btn');

  // Credit Line Estimator & Form
  const estimatorSlider = document.getElementById('estimator-slider-input');
  const estimatorValLabel = document.getElementById('estimator-val-label');
  const estimatorPlazoVal = document.getElementById('estimator-plazo-val');
  const creditFormHiddenMonto = document.getElementById('c-monto-solicitado');
  const creditForm = document.getElementById('credit-form-element');

  // General Contact / Quote Form
  const contactForm = document.getElementById('contact-form-element');
  const formQuoteSummary = document.getElementById('form-quote-items-summary');
  const formQuoteList = document.getElementById('form-quote-list');
  const formMessageTextarea = document.getElementById('n-mensaje');

  // Scroll widgets
  const scrollTopBtn = document.getElementById('floating-scrolltop-btn');
  const scrollDownBtn = document.getElementById('scroll-to-about');

  /* ========================================================
     4. COMPONENT RENDERING
     ======================================================== */
  
  // Render B2B Catalog Products
  const renderProducts = (categoryFilter = 'all') => {
    productsTarget.innerHTML = '';
    const filtered = categoryFilter === 'all' 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.category === categoryFilter);

    if (filtered.length === 0) {
      productsTarget.innerHTML = `<p class="cart-empty-message">No se encontraron productos en esta categoría.</p>`;
      return;
    }

    filtered.forEach(prod => {
      const isAdded = cart.some(item => item.id === prod.id);
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      card.innerHTML = `
        <div class="product-img-wrapper">
          <span class="product-badge">${prod.categoryName}</span>
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="product-category">${prod.categoryName}</span>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-desc">${prod.desc}</p>
          <div class="product-actions">
            <span class="product-price">${prod.price}</span>
            <button class="btn-add-quote ${isAdded ? 'added' : ''}" data-id="${prod.id}" title="${isAdded ? 'Quitar de la cotización' : 'Agregar a cotización'}" aria-label="Agregar ${prod.name} al cotizador">
              <svg viewBox="0 0 24 24">
                ${isAdded 
                  ? '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' 
                  : '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>'}
              </svg>
            </button>
          </div>
        </div>
      `;
      productsTarget.appendChild(card);
    });

    // Re-attach event listeners to "Add to Quote" buttons
    document.querySelectorAll('.btn-add-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = btn.getAttribute('data-id');
        toggleCartItem(pId);
      });
    });

    // Trigger reveal classes
    triggerScrollReveals();
  };

  // Render Operations Masonry Gallery
  const renderGallery = () => {
    galleryTarget.innerHTML = '';
    GALLERY_DATA.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-item reveal';
      div.setAttribute('data-index', index);
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <div class="gallery-icon-zoom">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <span class="gallery-category">${item.category}</span>
          <h3 class="gallery-title">${item.title}</h3>
        </div>
      `;
      galleryTarget.appendChild(div);
    });

    // Attach click events for Lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'), 10);
        openLightbox(index);
      });
    });
  };

  /* ========================================================
     5. CART SYSTEM LOGIC (COTIZADOR)
     ======================================================== */
  
  const toggleCartItem = (id) => {
    const itemIndex = cart.findIndex(p => p.id === id);
    const product = PRODUCTS_DATA.find(p => p.id === id);

    if (itemIndex > -1) {
      // Remove item
      cart.splice(itemIndex, 1);
      showToast(`Quitado de la cotización: ${product.name.substring(0, 25)}...`);
    } else {
      // Add item
      cart.push(product);
      showToast(`Añadido a la cotización: ${product.name.substring(0, 25)}...`, 'success');
      // Auto open quote drawer to give direct response to action
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
    }

    saveCart();
    updateCartUI();
    renderProducts(getActiveCategory());
  };

  const removeCartItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (product) {
      showToast(`Quitado de la cotización: ${product.name.substring(0, 25)}...`);
    }
    saveCart();
    updateCartUI();
    renderProducts(getActiveCategory());
  };

  const getActiveCategory = () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-category') : 'all';
  };

  const updateCartUI = () => {
    const cartCount = cart.length;
    
    // Update Badge
    cartBadge.textContent = cartCount;
    if (cartCount > 0) {
      cartBadge.classList.add('active');
      formQuoteSummary.style.display = 'block';
    } else {
      cartBadge.classList.remove('active');
      formQuoteSummary.style.display = 'none';
    }

    // Update count labels
    cartDrawerCountLabel.textContent = cartCount;

    // Render Drawer List
    cartItemsTarget.innerHTML = '';
    if (cartCount === 0) {
      cartItemsTarget.innerHTML = `
        <div class="cart-empty-message">
          <svg viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <p>Tu lista de cotización está vacía.<br>Agrega materiales desde nuestro catálogo superior.</p>
        </div>
      `;
      cartDrawerCheckoutBtn.classList.add('btn-outline');
      cartDrawerCheckoutBtn.style.pointerEvents = 'none';
      cartDrawerCheckoutBtn.style.opacity = '0.5';
    } else {
      cartDrawerCheckoutBtn.classList.remove('btn-outline');
      cartDrawerCheckoutBtn.style.pointerEvents = 'auto';
      cartDrawerCheckoutBtn.style.opacity = '1';

      cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <span class="cart-item-category">${item.categoryName}</span>
            <h4 class="cart-item-name">${item.name}</h4>
          </div>
          <div class="cart-item-remove" data-id="${item.id}" title="Quitar item">
            <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </div>
        `;
        cartItemsTarget.appendChild(itemDiv);
      });

      // Attach delete item events in drawer
      document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          removeCartItem(id);
        });
      });
    }

    // Synchronize Cotización Summary into general contact form
    syncQuoteToContactForm();
  };

  const syncQuoteToContactForm = () => {
    formQuoteList.innerHTML = '';
    if (cart.length === 0) {
      formQuoteSummary.style.display = 'none';
      return;
    }

    formQuoteSummary.style.display = 'block';
    
    // Inyectar ítems formateados en la vista del formulario
    cart.forEach(item => {
      const itemRow = document.createElement('div');
      itemRow.style.display = 'flex';
      itemRow.style.justifyContent = 'space-between';
      itemRow.style.padding = '5px 0';
      itemRow.style.borderBottom = '1px solid var(--border-color)';
      itemRow.innerHTML = `
        <span style="font-weight: 600; color: var(--text-primary);">${item.name}</span>
        <span style="color: var(--primary-medium); font-size: 0.8rem; text-transform: uppercase;">[ ${item.categoryName} ]</span>
      `;
      formQuoteList.appendChild(itemRow);
    });

    // Autocomplete standard message field
    const itemsText = cart.map((item, idx) => `${idx + 1}. ${item.name} (${item.categoryName})`).join('\n');
    formMessageTextarea.value = `Estimado equipo de Ventas de Inversiones Tega,\n\nSolicito una cotización formal para el siguiente lote de materiales de construcción:\n\n${itemsText}\n\nQuedo a la espera del presupuesto. Saludos cordiales.`;
  };

  /* ========================================================
     6. CREDIT SIMULATOR LOGIC
     ======================================================== */
  
  const updateCreditSimulator = () => {
    const value = parseInt(estimatorSlider.value, 10);
    
    // Formatter S/. Soles
    const formatted = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 }).format(value);
    estimatorValLabel.textContent = formatted;
    creditFormHiddenMonto.value = value;

    // Plazo algorithm based on slider value
    if (value <= 80000) {
      estimatorPlazoVal.textContent = '30 días';
    } else if (value <= 220000) {
      estimatorPlazoVal.textContent = '45 días';
    } else {
      estimatorPlazoVal.textContent = '60 días';
    }
  };

  estimatorSlider.addEventListener('input', updateCreditSimulator);
  updateCreditSimulator(); // Initial run

  /* ========================================================
     7. VISOR LIGHTBOX (GALLERY VISUALIZER)
     ======================================================== */
  let currentLightboxIndex = 0;

  const openLightbox = (index) => {
    currentLightboxIndex = index;
    const item = GALLERY_DATA[index];
    
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = `${item.category} — ${item.title}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    currentLightboxIndex = (currentLightboxIndex + direction + GALLERY_DATA.length) % GALLERY_DATA.length;
    const item = GALLERY_DATA[currentLightboxIndex];
    
    // Smooth opacity flash transition
    lightboxImg.style.opacity = '0.3';
    setTimeout(() => {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
      lightboxCaption.textContent = `${item.category} — ${item.title}`;
      lightboxImg.style.opacity = '1';
    }, 150);
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  lightboxNext.addEventListener('click', () => navigateLightbox(1));
  
  // Close on overlay click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });

  /* ========================================================
     8. THEMES & DARK MODE CONFIGURATION
     ======================================================= */
  
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('inv_tega_theme', newTheme);
    updateThemeIcons(newTheme);
    
    showToast(`Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, 'success');
  };

  const updateThemeIcons = (theme) => {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  };

  // Check saved theme
  const savedTheme = localStorage.getItem('inv_tega_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
  themeToggle.addEventListener('click', toggleTheme);

  /* ========================================================
     9. MENU NAVIGATION & EVENT LISTENERS
     ======================================================== */
  
  // Mobile Header burger toggle
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Header scroll effects
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      scrollTopBtn.classList.add('active');
    } else {
      header.classList.remove('scrolled');
      scrollTopBtn.classList.remove('active');
    }
  });

  // Scroll active links (Scrollspy)
  const spySections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100;
    
    spySections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Close mobile menu when clicking links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Open/Close Quote Drawer
  cartToggle.addEventListener('click', () => {
    cartDrawer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
  });

  cartClose.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  cartOverlay.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  cartDrawerCheckoutBtn.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  // Scroll to Top action button
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  scrollDownBtn.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    window.scrollTo({ top: aboutSection.offsetTop - 70, behavior: 'smooth' });
  });

  // Catalog Category Filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderProducts(category);
    });
  });

  /* ========================================================
     10. FORM VALIDATION & SUCCESS POPUPS (LEAD B2B)
     ======================================================== */
  
  // Custom Toast helper
  const showToast = (message, type = 'info') => {
    const container = document.getElementById('toast-container-target');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24">
        ${type === 'success' 
          ? '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>' 
          : '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>'}
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    
    // Trigger slide active
    setTimeout(() => toast.classList.add('active'), 50);
    
    // Remove after 4s
    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // Helper validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateRuc = (ruc) => {
    // Peruvian RUC format rules (11 numerical digits, starts with 10, 15, 17, 20)
    const re = /^(10|15|17|20)\d{9}$/;
    return re.test(ruc);
  };

  const validatePhone = (phone) => {
    const re = /^9\d{8}$/; // Cell phone in Peru starts with 9 and has 9 digits
    return re.test(phone);
  };

  // Validate and display error states
  const checkField = (input, errorEl, validatorFn) => {
    const isValid = validatorFn ? validatorFn(input.value.trim()) : input.value.trim() !== '';
    if (isValid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
      errorEl.style.display = 'none';
      return true;
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      errorEl.style.display = 'block';
      return false;
    }
  };

  // Credit Line Form submission
  creditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const empresa = document.getElementById('c-empresa');
    const ruc = document.getElementById('c-ruc');
    const contacto = document.getElementById('c-contacto');
    const telefono = document.getElementById('c-telefono');
    const email = document.getElementById('c-email');
    const proyecto = document.getElementById('c-proyecto');
    const monto = creditFormHiddenMonto.value;
    const plazo = estimatorPlazoVal.textContent;

    const isEmpresaValid = checkField(empresa, document.getElementById('error-c-empresa'));
    const isRucValid = checkField(ruc, document.getElementById('error-c-ruc'), validateRuc);
    const isContactoValid = checkField(contacto, document.getElementById('error-c-contacto'));
    const isTelefonoValid = checkField(telefono, document.getElementById('error-c-telefono'), validatePhone);
    const isEmailValid = checkField(email, document.getElementById('error-c-email'), validateEmail);
    const isProyectoValid = checkField(proyecto, document.getElementById('error-c-proyecto'));

    if (isEmpresaValid && isRucValid && isContactoValid && isTelefonoValid && isEmailValid && isProyectoValid) {
      // Simulate API submit request
      const formattedMonto = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 }).format(monto);
      showToast('Enviando solicitud de crédito...', 'info');

      setTimeout(() => {
        // Trigger immersive successful modal overlay or Alert
        alert(`🎉 ¡EVALUACIÓN DE CRÉDITO REGISTRADA EXITOSAMENTE! 🎉\n\nEstimado(a) ${contacto.value},\n\nHemos pre-aprobado una solicitud preliminar de financiamiento para ${empresa.value} (RUC: ${ruc.value}) por un monto de ${formattedMonto} con un plazo de pago sugerido de ${plazo}.\n\nNos pondremos en contacto contigo en el correo ${email.value} y teléfono ${telefono.value} en menos de 48 horas para formalizar la línea de crédito.\n\n¡Gracias por elegir a INVERSIONES TEGA!`);
        
        creditForm.reset();
        creditForm.querySelectorAll('.form-input').forEach(input => {
          input.classList.remove('valid', 'invalid');
        });
        updateCreditSimulator();
        showToast('¡Línea de crédito pre-evaluada!', 'success');
      }, 1200);
    } else {
      showToast('Por favor, corrige los campos erróneos en el formulario de crédito.', 'info');
    }
  });

  // Contact / Quote Request Form Submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('n-nombre');
    const empresa = document.getElementById('n-empresa');
    const telefono = document.getElementById('n-telefono');
    const email = document.getElementById('n-email');
    const mensaje = document.getElementById('n-mensaje');

    const isNombreValid = checkField(nombre, document.getElementById('error-n-nombre'));
    const isEmpresaValid = checkField(empresa, document.getElementById('error-n-empresa'));
    const isTelefonoValid = checkField(telefono, document.getElementById('error-n-telefono'));
    const isEmailValid = checkField(email, document.getElementById('error-n-email'), validateEmail);
    const isMensajeValid = checkField(mensaje, document.getElementById('error-n-mensaje'));

    if (isNombreValid && isEmpresaValid && isTelefonoValid && isEmailValid && isMensajeValid) {
      showToast('Enviando solicitud de cotización...', 'info');

      setTimeout(() => {
        const count = cart.length;
        if (count > 0) {
          alert(`✅ ¡SOLICITUD DE COTIZACIÓN ENVIADA! ✅\n\nEstimado(a) ${nombre.value} de ${empresa.value},\n\nHemos recibido tu requerimiento con un total de ${count} tipos de materiales añadidos de nuestro catálogo.\n\nEn un plazo máximo de 15 minutos enviaremos la proforma detallada en PDF a tu dirección de correo: ${email.value}.\n\n¡Gracias por tu confianza!`);
          // Clear cart
          cart = [];
          saveCart();
          updateCartUI();
          renderProducts(getActiveCategory());
        } else {
          alert(`✉️ ¡MENSAJE DE CONTACTO ENVIADO! ✉️\n\nGracias ${nombre.value} de ${empresa.value}.\n\nHemos recibido tu consulta general. Un asesor comercial te llamará en breve al ${telefono.value} o responderá a tu correo ${email.value}.`);
        }

        contactForm.reset();
        contactForm.querySelectorAll('.form-input').forEach(input => {
          input.classList.remove('valid', 'invalid');
        });
        showToast('¡Solicitud comercial enviada!', 'success');
      }, 1200);
    } else {
      showToast('Por favor, completa los campos requeridos del formulario de contacto.', 'info');
    }
  });

  /* ========================================================
     11. SCROLL REVEAL INTERSECTION OBSERVER
     ======================================================== */
  
  const triggerScrollReveals = () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;
      
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', triggerScrollReveals);

  // IntersectionObserver for modular fade-ins
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing after active
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe items
  const setupObservers = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  };

  /* ========================================================
     12. APPLICATION INITIALIZATION
     ======================================================== */
  const init = () => {
    initCart();
    renderProducts('all');
    renderGallery();
    setupObservers();
    triggerScrollReveals();
  };

  init();
});
