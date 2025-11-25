// ============================================
// 🎯 CONFIGURACIÓN DE LA LANDING PAGE
// ============================================
// Edita este archivo para personalizar tu landing page
// sin tocar el código de los componentes

export const businessConfig = {
  // ==================== DATOS DEL NEGOCIO ====================
  businessName: 'Mi Negocio',
  businessType: 'Dentista', // Dentista, Taller Mecánico, Salón de Belleza, etc.
  
  // ==================== CONTACTO ====================
  contact: {
    phone: '52XXXXXXXXXX',           // Formato: código país + número (sin + ni espacios)
    phoneDisplay: '+52 XXX XXX XXXX', // Formato para mostrar
    email: 'contacto@tunegocio.com',
    address: 'Av. Principal #123, Col. Centro, Ciudad',
    
    // Redes sociales
    social: {
      facebook: 'https://facebook.com/tunegocio',
      instagram: 'https://instagram.com/tunegocio',
    }
  },

  // ==================== HERO SECTION ====================
  hero: {
    title: 'Recupera tu sonrisa hoy',
    subtitle: 'Atención dental profesional con tecnología de vanguardia. Tu salud bucal es nuestra prioridad.',
    ctaText: 'Agenda tu Cita Ahora',
    // Imagen de fondo - Usa Unsplash o tu propia imagen
    backgroundImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop',
  },

  // ==================== SERVICIOS ====================
  services: {
    sectionTitle: 'Nuestros Servicios',
    sectionSubtitle: 'Ofrecemos una amplia gama de tratamientos dentales con la mejor tecnología',
    
    items: [
      {
        title: 'Limpieza Dental',
        description: 'Limpieza profunda y pulido dental para mantener tu sonrisa radiante y saludable.',
        icon: 'MdOutlineCleaningServices', // Nombre del icono de react-icons
        gradient: 'from-blue-500 to-blue-600'
      },
      {
        title: 'Ortodoncia',
        description: 'Brackets y alineadores invisibles para corregir la posición de tus dientes.',
        icon: 'FaTeeth',
        gradient: 'from-blue-600 to-blue-700'
      },
      {
        title: 'Urgencias Dentales',
        description: 'Atención inmediata para emergencias. Estamos aquí cuando más nos necesitas.',
        icon: 'BiSolidFirstAid',
        gradient: 'from-blue-700 to-blue-800'
      }
    ]
  },

  // ==================== TESTIMONIOS ====================
  testimonials: {
    sectionTitle: 'Lo que dicen nuestros pacientes',
    sectionSubtitle: 'Miles de sonrisas transformadas y pacientes satisfechos',
    
    items: [
      {
        name: 'María González',
        role: 'Paciente desde 2023',
        comment: 'Excelente servicio, muy profesionales. Mi sonrisa nunca había lucido mejor. ¡100% recomendado!',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=1'
      },
      {
        name: 'Carlos Ramírez',
        role: 'Paciente desde 2022',
        comment: 'El mejor dentista de la ciudad. Atención personalizada y resultados increíbles.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=3'
      },
      {
        name: 'Ana Martínez',
        role: 'Paciente desde 2024',
        comment: 'Me encantó el trato y la tecnología que utilizan. Sin dolor y con excelentes resultados.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?img=5'
      }
    ],
    
    // Trust badge
    rating: '4.9',
    totalReviews: '+500 reseñas verificadas'
  },

  // ==================== CTA SECTION ====================
  cta: {
    title: '¿Listo para tu mejor sonrisa?',
    subtitle: 'Agenda tu cita ahora y recibe una evaluación completamente gratis',
    primaryButton: 'Agendar por WhatsApp',
    secondaryButton: 'Llamar Ahora',
    
    // Horarios
    schedule: 'Lun - Sáb: 9am - 7pm',
    responseTime: 'Respuesta en 24hrs'
  },

  // ==================== CHAT WIDGET ====================
  chatWidget: {
    greeting: 'Hola 👋, soy el asistente virtual. ¿En qué puedo ayudarte hoy?',
    
    options: [
      {
        id: 'cita',
        emoji: '📅',
        text: 'Agendar Cita',
        message: 'Hola, quiero agendar una cita',
        gradient: 'from-blue-500 to-blue-600'
      },
      {
        id: 'ubicacion',
        emoji: '📍',
        text: 'Ver Ubicación',
        message: 'Hola, quisiera conocer su ubicación',
        gradient: 'from-blue-600 to-blue-700'
      },
      {
        id: 'precios',
        emoji: '💰',
        text: 'Precios',
        message: 'Hola, me gustaría información sobre precios',
        gradient: 'from-blue-700 to-blue-800'
      }
    ]
  },

  // ==================== COLORES (OPCIONAL) ====================
  // Si quieres usar otros colores, modifica tu tailwind.config.js
  theme: {
    primary: 'blue-600',
    primaryHover: 'blue-700',
    secondary: 'blue-500',
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
