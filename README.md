# 🚀 Landing Page CRO - Negocios Locales

Landing page de alta conversión para negocios locales (Dentistas, Talleres Mecánicos, Salones de Belleza, etc.) construida con **React**, **Tailwind CSS** y **Framer Motion**.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Glassmorphism, sombras suaves, animaciones fluidas
- 📱 **100% Responsive**: Mobile-first design optimizado
- ⚡ **Alto Rendimiento**: Optimizado para velocidad y SEO
- 🎯 **CRO Optimizado**: Diseñado para maximizar conversiones
- 🤖 **Smart Chat Widget**: Asistente virtual inteligente con WhatsApp
- 💎 **Componentes Reutilizables**: Fácil de personalizar y extender

## 🚀 Deploy en Netlify

### Opción 1: Deploy desde Git

1. Sube tu proyecto a GitHub/GitLab
2. Ve a [Netlify](https://app.netlify.com)
3. Click en "Add new site" → "Import an existing project"
4. Conecta tu repositorio
5. Netlify detectará automáticamente la configuración de Vite
6. Click en "Deploy site"

### Opción 2: Deploy Manual

```bash
# Construir para producción
npm run build

# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Configuración Incluida

- ✅ `netlify.toml` - Configuración de build y redirects
- ✅ `.nvmrc` - Versión de Node.js (18)
- ✅ Build optimizado con Vite

## 📦 Instalación Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Componentes Incluidos

### Componentes Principales (Solicitados)

1. **HeroSection** - Sección hero con imagen de fondo, overlay y CTA principal
2. **ServicesGrid** - Grid de servicios con animaciones scroll
3. **SmartChatWidget** ⭐ - Widget de chat flotante con "Fake AI"

### Componentes Bonus

4. **TestimonialsSection** - Testimonios con ratings y avatares
5. **CTASection** - Call-to-action final con información de contacto

## 🔧 Personalización Rápida

### Opción 1: Editar Directamente en los Componentes

#### 1. Cambiar Número de WhatsApp

En `src/components/SmartChatWidget.jsx`:
```jsx
const phoneNumber = '52XXXXXXXXXX'; // ← Cambia aquí
```

En `src/components/HeroSection.jsx` y `src/components/CTASection.jsx`:
```jsx
onClick={() => window.open('https://wa.me/52XXXXXXXXXX?text=...', '_blank')}
```

#### 2. Cambiar Servicios

En `src/components/ServicesGrid.jsx`:
```jsx
const services = [
  {
    icon: TuIcono,
    title: 'Tu Servicio',
    description: 'Descripción del servicio',
    color: 'from-blue-500 to-blue-600'
  },
  // Agrega más...
];
```

#### 3. Cambiar Textos del Hero

En `src/components/HeroSection.jsx`:
```jsx
<h1>Tu Título Aquí</h1>
<p>Tu subtítulo aquí</p>
```

### Opción 2: Usar Archivo de Configuración (Recomendado)

Revisa `src/config/businessConfig.js` para configuración centralizada.

## 📝 Estructura de Archivos

```
src/
├── components/
│   ├── HeroSection.jsx          ⭐ Hero principal
│   ├── ServicesGrid.jsx         ⭐ Grid de servicios
│   ├── SmartChatWidget.jsx      ⭐ Chat widget (LA JOYA)
│   ├── TestimonialsSection.jsx  💎 Testimonios
│   └── CTASection.jsx            💎 CTA final
├── config/
│   └── businessConfig.js        ⚙️ Configuración centralizada
├── App.jsx                      🏠 Componente principal
└── index.css                    🎨 Estilos globales
```

## 🎯 Smart Chat Widget - Características

El **SmartChatWidget** es la joya de esta landing page:

✅ **Estado Cerrado**: Botón flotante con animación bounce y efecto pulse  
✅ **Estado Abierto**: Modal tipo Messenger con animaciones suaves  
✅ **Saludo Automático**: Mensaje de bienvenida con delay  
✅ **3 Opciones Predefinidas**:
   - 📅 Agendar Cita
   - 📍 Ver Ubicación
   - 💰 Precios

✅ **Redirección a WhatsApp**: Con mensajes pre-llenados  
✅ **Animaciones Premium**: AnimatePresence, spring animations  
✅ **Badge de Notificación**: Número rojo animado  

## 🎨 Paleta de Colores

```
Primary: #2563eb (blue-600)
Hover: #1d4ed8 (blue-700)
Background: #ffffff (white)
Background Alt: #eff6ff (blue-50)
Text: #1f2937 (gray-800)
```

Para cambiar colores, edita las clases de Tailwind en los componentes.

## 📱 Breakpoints Responsive

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para usar la carpeta 'dist'
```

## 📚 Documentación Detallada

Lee `COMPONENTS_GUIDE.md` para documentación completa de cada componente.

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **Tailwind CSS 4** - Estilos utility-first
- **Framer Motion 12** - Animaciones
- **React Icons 5** - Iconografía
- **Vite 7** - Build tool

## 🎓 Casos de Uso

Este template es perfecto para:

- ✅ Clínicas dentales
- ✅ Talleres mecánicos
- ✅ Salones de belleza
- ✅ Gimnasios
- ✅ Restaurantes
- ✅ Cualquier negocio local que necesite generar leads

## 📄 Licencia

MIT License - Úsalo libremente para proyectos personales o comerciales.

## 💬 Soporte

¿Necesitas ayuda? Revisa la documentación completa en `COMPONENTS_GUIDE.md`

---

**Hecho con ❤️ para maximizar conversiones** 🚀
