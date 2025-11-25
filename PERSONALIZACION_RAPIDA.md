# ⚡ GUÍA DE PERSONALIZACIÓN RÁPIDA - 5 MINUTOS

## 🎯 PASO 1: Cambiar Número de WhatsApp (CRÍTICO)

### Archivos a editar:

#### 1. `src/components/SmartChatWidget.jsx`
**Línea 22:**
```jsx
const phoneNumber = '52XXXXXXXXXX'; // ← CAMBIA AQUÍ
```
Ejemplo: `'5215551234567'` (sin espacios, sin + ni guiones)

---

#### 2. `src/components/HeroSection.jsx`
**Línea 35:**
```jsx
onClick={() => window.open('https://wa.me/52XXXXXXXXXX?text=Hola, quiero agendar una cita', '_blank')}
```
Cambia `52XXXXXXXXXX` por tu número.

---

#### 3. `src/components/CTASection.jsx`
**Líneas 8 y 47:**
```jsx
// Línea 8
const phoneNumber = '52XXXXXXXXXX'; // ← WhatsApp

// Línea 47
href="tel:+52XXXXXXXXXX" // ← Teléfono para llamadas
```

---

## 🎨 PASO 2: Personalizar Textos (OPCIONAL)

### Hero Section
**Archivo:** `src/components/HeroSection.jsx`

**Líneas 23-28:**
```jsx
<h1 className="...">
  Recupera tu sonrisa hoy {/* ← Cambia tu título */}
</h1>
<p className="...">
  Atención dental profesional... {/* ← Cambia tu subtítulo */}
</p>
```

**Línea 34:**
```jsx
<motion.button>
  Agenda tu Cita Ahora {/* ← Cambia texto del botón */}
</motion.button>
```

---

### Services Grid
**Archivo:** `src/components/ServicesGrid.jsx`

**Líneas 9-27:**
```jsx
const services = [
  {
    icon: MdOutlineCleaningServices,
    title: 'Limpieza Dental', // ← Cambia nombre del servicio
    description: 'Limpieza profunda...', // ← Cambia descripción
    color: 'from-blue-500 to-blue-600' // ← Cambia color
  },
  // Agrega más servicios copiando este bloque
];
```

**Para agregar más servicios:**
1. Importa el icono al inicio del archivo
2. Copia un objeto del array
3. Modifica título, descripción y gradiente

---

### Chat Widget
**Archivo:** `src/components/SmartChatWidget.jsx`

**Línea 90:**
```jsx
<p className="text-gray-800">
  Hola 👋, soy el asistente virtual... {/* ← Cambia saludo */}
</p>
```

**Líneas 25-37:** Mensajes que se envían a WhatsApp
```jsx
switch (option) {
  case 'cita':
    message = 'Hola, quiero agendar una cita'; // ← Personaliza
    break;
  case 'ubicacion':
    message = 'Hola, quisiera conocer su ubicación'; // ← Personaliza
    break;
  case 'precios':
    message = 'Hola, me gustaría información sobre precios'; // ← Personaliza
    break;
}
```

---

## 🖼️ PASO 3: Cambiar Imagen del Hero (OPCIONAL)

**Archivo:** `src/components/HeroSection.jsx`

**Línea 9:**
```jsx
<img
  src="https://images.unsplash.com/photo-..." // ← URL de tu imagen
  alt="Hero background"
  className="w-full h-full object-cover"
/>
```

**Opciones para obtener imágenes:**
1. **Unsplash.com** - Gratis, alta calidad
2. **Pexels.com** - Gratis, sin atribución
3. **Tu propia imagen** - Guárdala en `/public/hero.jpg` y usa `src="/hero.jpg"`

---

## 📧 PASO 4: Actualizar Información de Contacto

**Archivo:** `src/components/CTASection.jsx`

**Líneas 71-79:** Ubicación
```jsx
<p className="text-blue-100 text-sm">
  Av. Principal #123<br /> {/* ← Tu dirección */}
  Col. Centro, Ciudad
</p>
```

**Líneas 85-91:** Teléfono y horarios
```jsx
<p className="text-blue-100 text-sm">
  +52 XXX XXX XXXX<br /> {/* ← Tu teléfono */}
  Lun - Sáb: 9am - 7pm {/* ← Tu horario */}
</p>
```

**Líneas 97-103:** Email
```jsx
<p className="text-blue-100 text-sm">
  contacto@tuempresa.com<br /> {/* ← Tu email */}
  Respuesta en 24hrs
</p>
```

---

## 🌐 PASO 5: Redes Sociales (OPCIONAL)

**Archivo:** `src/components/CTASection.jsx`

**Líneas 112-126:**
```jsx
<motion.a
  href="https://facebook.com" // ← Tu página de Facebook
  target="_blank"
>
  <FaFacebook className="text-2xl text-white" />
</motion.a>

<motion.a
  href="https://instagram.com" // ← Tu Instagram
  target="_blank"
>
  <FaInstagram className="text-2xl text-white" />
</motion.a>
```

---

## 🎨 PASO 6: Cambiar Colores (AVANZADO)

Si quieres usar otros colores además del azul:

### Opción 1: Buscar y Reemplazar
En tu editor (VS Code):
- Buscar: `blue-600` → Reemplazar: `green-600` (o cualquier color)
- Buscar: `blue-700` → Reemplazar: `green-700`

### Opción 2: Colores Disponibles en Tailwind
- `red-600`, `orange-600`, `yellow-600`
- `green-600`, `teal-600`, `cyan-600`
- `blue-600`, `indigo-600`, `purple-600`
- `pink-600`, `rose-600`

---

## 📝 PASO 7: Testimonios (OPCIONAL)

**Archivo:** `src/components/TestimonialsSection.jsx`

**Líneas 5-25:**
```jsx
const testimonials = [
  {
    name: 'María González', // ← Nombre del cliente
    role: 'Paciente desde 2023', // ← Subtítulo
    comment: 'Excelente servicio...', // ← Testimonio
    rating: 5, // ← Número de estrellas (1-5)
    image: 'https://i.pravatar.cc/150?img=1' // ← Avatar
  },
  // Agrega más testimonios...
];
```

**Para usar fotos reales:**
1. Guarda fotos en `/public/testimonios/cliente1.jpg`
2. Cambia `image: '/testimonios/cliente1.jpg'`

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

Antes de hacer deploy, verifica:

- [ ] Número de WhatsApp cambiado en 3 archivos
- [ ] Título y subtítulo del Hero personalizados
- [ ] Servicios actualizados con tu información
- [ ] Email de contacto actualizado
- [ ] Dirección física correcta
- [ ] Teléfono de llamadas directo actualizado
- [ ] Horarios de atención correctos
- [ ] Links de redes sociales actualizados
- [ ] Imagen del Hero cambiada (opcional)
- [ ] Testimonios con datos reales (opcional)

---

## 🚀 PASO 8: Probar Localmente

```bash
# 1. Inicia el servidor de desarrollo
npm run dev

# 2. Abre en tu navegador
http://localhost:5173

# 3. Prueba:
# - Click en "Agenda tu Cita Ahora" (Hero)
# - Click en el chat widget flotante
# - Click en "Agendar Cita" del chat
# - Verifica que se abra WhatsApp con tu número
```

---

## 📦 PASO 9: Build para Producción

```bash
# Construir versión optimizada
npm run build

# Probar el build localmente
npm run preview
```

Si no hay errores, ¡estás listo para deploy!

---

## 🌍 PASO 10: Deploy

### Opción A: Vercel (Recomendado - 2 minutos)
```bash
npm install -g vercel
vercel
```
Sigue las instrucciones en pantalla.

### Opción B: Netlify (Drag & Drop)
1. Ve a netlify.com
2. Arrastra la carpeta `dist` al área de deploy
3. ¡Listo!

### Opción C: GitHub Pages
1. Sube tu código a GitHub
2. En Settings → Pages → selecciona la rama
3. Configura para usar la carpeta `dist`

---

## 💡 TIPS FINALES

### Si algo no funciona:
```bash
# 1. Detén el servidor (Ctrl + C)
# 2. Limpia caché
rm -rf node_modules dist
npm install
npm run dev
```

### Para cambiar iconos:
1. Visita: https://react-icons.github.io/react-icons/
2. Busca el icono que quieres
3. Copia el import: `import { FaIcono } from 'react-icons/fa'`
4. Úsalo en tu componente

### Para agregar más secciones:
1. Crea archivo en `src/components/TuSeccion.jsx`
2. Copia la estructura de cualquier componente existente
3. Impórtalo en `App.jsx`

---

## 🎯 Adaptación Rápida para Otros Negocios

### Taller Mecánico
1. Cambiar servicios a: "Mantenimiento", "Reparación Motor", "Urgencias 24/7"
2. Cambiar todos los `blue` por `orange`
3. Cambiar imagen del Hero a un auto/taller
4. Listo!

### Salón de Belleza
1. Servicios: "Corte y Peinado", "Coloración", "Tratamientos"
2. Cambiar `blue` por `pink`
3. Imagen del Hero: salón de belleza
4. Listo!

---

## ⏱️ Tiempo Estimado por Paso

- PASO 1 (WhatsApp): 2 minutos ⏰
- PASO 2 (Textos): 3 minutos ⏰
- PASO 3 (Imagen): 1 minuto ⏰
- PASO 4 (Contacto): 2 minutos ⏰
- PASO 5 (Redes): 1 minuto ⏰
- PASO 8 (Probar): 2 minutos ⏰
- PASO 9 (Build): 1 minuto ⏰
- PASO 10 (Deploy): 3 minutos ⏰

**TOTAL: ~15 minutos de personalización básica** ⚡

---

**¿Necesitas ayuda?** Revisa:
- `README.md` - Guía general
- `COMPONENTS_GUIDE.md` - Documentación completa
- `RESUMEN_PROYECTO.md` - Resumen ejecutivo

---

**¡Éxito con tu negocio!** 🚀💰
