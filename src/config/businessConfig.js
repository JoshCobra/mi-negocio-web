// ============================================
// 🎯 CONFIGURACIÓN DE LA LANDING PAGE
// ============================================
// Edita este archivo para personalizar tu landing page
// sin tocar el código de los componentes

export const businessConfig = {
  // ==================== DATOS DEL NEGOCIO ====================
  businessName: 'Piombo Café',
  businessType: 'Cafetería', 
  
  // ==================== CONTACTO ====================
  contact: {
    phone: '5255528215870',           // Formato: código país + número (sin + ni espacios)
    phoneDisplay: '+52 55 2821 5870', // Formato para mostrar
    email: 'contacto@piombocafe.com',
    address: 'Sebastián del Piombo 50, Nonoalco, Benito Juárez, 03700 Ciudad de México, CDMX',
    addressShort: 'Del Piombo 50, Nonoalco, Benito Juárez',
    googleMaps: '9RJ6+W4 Ciudad de México, Cd. de México',
    
    // Redes sociales
    social: {
      facebook: '',
      instagram: 'https://www.instagram.com/piombocafe/',
    }
  },

  // ==================== HERO SECTION ====================
  hero: {
    title: 'PIOMBO CAFE',
    subtitle: 'Desayunos artesanales y café de especialidad en el corazón de Benito Juárez. Un espacio acogedor donde cada momento es especial.',
    ctaText: 'Hacer Pedido Ahora',
    // Imagen de fondo - Usa Unsplash o tu propia imagen
    backgroundImage: '/img/imagen-piombo-cafe.png',
  },

  // ==================== MENÚ ====================
  menu: {
    sectionTitle: 'Nuestro Menú',
    sectionSubtitle: 'Descubre nuestra deliciosa variedad de platillos y bebidas preparados con amor',
    
    images: [
      {
        url: '/img/menu-burger.png',
        title: 'Burgers & Especialidades'
      },
      {
        url: '/img/menu-hotcackes.png',
        title: 'Desayunos & Hotcakes'
      },
      {
        url: '/img/menu-tizana-otonial.png',
        title: 'Tizana otoñal'
      }
    ]
  },

  // ==================== SERVICIOS ====================
  services: {
    sectionTitle: 'Nuestros Servicios',
    sectionSubtitle: 'Experiencia completa de cafetería con opciones para todos',
    
    items: [
      {
        title: 'Café Especialidad',
        description: 'Granos selectos preparados por baristas expertos. Espresso, americano, capuchino y más.',
        icon: 'FaCoffee',
        gradient: 'from-amber-600 to-amber-700'
      },
      {
        title: 'Desayunos',
        description: 'Desayunos frescos y deliciosos preparados al momento. El mejor inicio para tu día.',
        icon: 'MdOutlineFoodBank',
        gradient: 'from-amber-700 to-amber-800'
      },
      {
        title: 'Para Llevar',
        description: 'Servicio rápido para llevar. Haz tu pedido por teléfono o WhatsApp y recógelo listo.',
        icon: 'MdDeliveryDining',
        gradient: 'from-amber-800 to-amber-900'
      }
    ]
  },

  // ==================== TESTIMONIOS ====================
  testimonials: {
    sectionTitle: 'Lo que dicen nuestros clientes',
    sectionSubtitle: 'Calificación de 4.4 estrellas con más de 61 reseñas verificadas',
    
    items: [
      {
        name: 'Ana Rodríguez',
        role: 'Cliente frecuente',
        comment: 'El mejor café de la zona. El ambiente es acogedor y los desayunos son deliciosos. ¡Totalmente recomendado!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=1'
      },
      {
        name: 'Miguel Torres',
        role: 'Cliente desde 2023',
        comment: 'Excelente atención y productos de calidad. Mi lugar favorito para trabajar con un buen café.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=3'
      },
      {
        name: 'Laura Méndez',
        role: 'Cliente frecuente',
        comment: 'Los desayunos son increíbles y el servicio a domicilio siempre llega a tiempo. ¡Me encanta!',
        rating: 4,
        image: 'https://i.pravatar.cc/150?img=5'
      }
    ],
    
    // Trust badge
    rating: '4.4',
    totalReviews: '61 reseñas verificadas'
  },

  // ==================== CTA SECTION ====================
  cta: {
    title: '¿Listo para disfrutar?',
    subtitle: 'Haz tu pedido ahora por WhatsApp o llámanos. Entrega a domicilio disponible.',
    primaryButton: 'Pedir por WhatsApp',
    secondaryButton: 'Llamar Ahora',
    
    // Horarios
    schedule: 'Lun - Sáb: 9am - 8pm',
    scheduleDetail: 'Domingos cerrado',
    responseTime: 'Entrega rápida'
  },

  // ==================== CHAT WIDGET ====================
  chatWidget: {
    greeting: 'Hola 👋, soy el asistente virtual de Piombo Café. ¿En qué puedo ayudarte hoy?',
    
    options: [
      {
        id: 'pedido',
        emoji: '☕',
        text: 'Hacer Pedido',
        message: 'Hola, quiero hacer un pedido a domicilio',
        gradient: 'from-amber-600 to-amber-700'
      },
      {
        id: 'ubicacion',
        emoji: '📍',
        text: 'Ver Ubicación',
        message: 'Hola, quisiera conocer su ubicación',
        gradient: 'from-amber-700 to-amber-800'
      },
      {
        id: 'menu',
        emoji: '📋',
        text: 'Ver Menú',
        message: 'Hola, me gustaría ver el menú y precios',
        gradient: 'from-amber-800 to-amber-900'
      }
    ]
  },

  // ==================== COLORES (OPCIONAL) ====================
  // Si quieres usar otros colores, modifica tu tailwind.config.js
  theme: {
    primary: 'amber-700',
    primaryHover: 'amber-800',
    secondary: 'amber-600',
  }
};

// ============================================
// EJEMPLOS PARA OTROS NEGOCIOS
// ============================================

// TALLER MECÁNICO
export const tallerMecanicoConfig = {
  businessName: 'AutoFix Pro',
  businessType: 'Taller Mecánico',
  
  hero: {
    title: 'Tu auto en manos expertas',
    subtitle: 'Reparaciones, mantenimiento y diagnóstico con tecnología avanzada',
    ctaText: 'Solicitar Diagnóstico Gratis',
    backgroundImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920',
  },
  
  services: {
    items: [
      {
        title: 'Mantenimiento Preventivo',
        description: 'Servicio completo para mantener tu auto en óptimas condiciones.',
        icon: 'FaTools',
        gradient: 'from-orange-500 to-orange-600'
      },
      {
        title: 'Reparación de Motor',
        description: 'Expertos en diagnóstico y reparación de todo tipo de motores.',
        icon: 'FaCog',
        gradient: 'from-orange-600 to-orange-700'
      },
      {
        title: 'Urgencias 24/7',
        description: 'Servicio de grúa y asistencia vial las 24 horas del día.',
        icon: 'FaCarCrash',
        gradient: 'from-orange-700 to-orange-800'
      }
    ]
  }
};

// SALÓN DE BELLEZA
export const salonBellezaConfig = {
  businessName: 'Beauty Studio',
  businessType: 'Salón de Belleza',
  
  hero: {
    title: 'Resalta tu belleza natural',
    subtitle: 'Tratamientos de belleza personalizados con productos premium',
    ctaText: 'Reserva tu Cita',
    backgroundImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920',
  },
  
  services: {
    items: [
      {
        title: 'Corte y Peinado',
        description: 'Estilistas expertos para el look perfecto que buscas.',
        icon: 'GiComb',
        gradient: 'from-pink-500 to-pink-600'
      },
      {
        title: 'Coloración',
        description: 'Técnicas modernas de color con productos de alta calidad.',
        icon: 'GiBeautifulPalm',
        gradient: 'from-pink-600 to-pink-700'
      },
      {
        title: 'Tratamientos',
        description: 'Tratamientos capilares para revitalizar y nutrir tu cabello.',
        icon: 'FaSpa',
        gradient: 'from-pink-700 to-pink-800'
      }
    ]
  }
};

export default businessConfig;
