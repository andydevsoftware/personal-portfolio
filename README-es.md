# 💻 Portafolio Personal – Andy Avendaño

Portafolio web moderno y minimalista construido con Next.js, React, TypeScript y Tailwind CSS.
Este proyecto muestra mis habilidades frontend con un enfoque en diseño limpio, diseño responsivo y componentes reutilizables.

---

## ✨ Demo en Vivo

🔗 Demo en Vivo: https://andydevsoftware.vercel.app/

![Escritorio](image.png)
![Móvil](image-1.png)

---

## 🚀 Características

### 🎨 Diseño y UX

Diseño minimalista con enfoque en el contenido
Tema claro/oscuro con persistencia en localStorage
Animaciones suaves y micro-interacciones
Efectos de degradado al pasar el cursor sobre tarjetas de proyectos
Completamente responsivo (mobile-first)
Tipografía Geist Sans y Geist Mono

### 📱 Encabezado Interactivo

Encabezado fijo con desenfoque de fondo
Transición suave al desplazarse
Enlaces a redes sociales (LinkedIn, Twitter, GitHub)
Cambio de tema con iconos animados
Diseño adaptativo para dispositivos móviles

### 💼 Sección de Proyectos

Cuadrícula responsiva de proyectos destacados
Efecto de foco que sigue el cursor
Insignias de estado (actualizado, en desarrollo)
Enlaces directos a demo y repositorio
Etiquetas de tecnología con iconos
Desplazamiento horizontal en móvil para las etiquetas

### 👨‍💻 Experiencia Laboral

Línea de tiempo visual con línea de conexión
Períodos de trabajo claramente definidos
Enlaces a empresas
Descripciones detalladas de responsabilidades
Diseño limpio y fácil de leer

### 🛠 Tecnologías

Cuadrícula de tecnologías con categorías
Iconos de tecnologías
Efectos al pasar el cursor sobre tarjetas
Organizadas por Frontend, Lenguaje, Estilos, Base de Datos, Herramientas
Inversión de color en modo claro para mejor contraste

### 📄 Pie de Página

Diseño adaptativo escritorio/móvil
Información de construcción del sitio
Copyright dinámico con año actual
Diseño centrado en móvil

---

## 🧠 Estructura del Proyecto

```
src/
├── app/
│ ├── globals.css         # Estilos globales y tema
│ ├── layout.tsx         # Layout raíz y metadatos
│ └── page.tsx           # Página principal
│
└── components/
├── Header.tsx               # Encabezado fijo con cambio de tema
├── Intro.tsx                # Sección de introducción
├── Projects.tsx             # Cuadrícula de proyectos con efectos
├── Experience.tsx           # Línea de tiempo de experiencia laboral
├── Technologies.tsx         # Cuadrícula de tecnologías
├── Footer.tsx               # Pie de página responsivo
└── ThemeProvider.tsx        # Contexto global de tema
```

---

## ⚙️ Stack Tecnológico

- Next.js 15 - Framework de React
- React 19 - Librería de UI
- TypeScript - Tipado estático
- Tailwind CSS v4 - Estilos utility-first
- Geist Font - Tipografía moderna
- localStorage API - Persistencia de tema

## 🧩 Detalles Clave de Implementación

### Gestión de Tema

- Context API de React para estado global del tema
- Persistencia con localStorage
- Transiciones suaves entre temas
- Variables CSS personalizadas para cada tema

### Efectos Visuales

- Efecto de foco usando variables CSS (--x, --y)
- Degradados radiales que siguen el cursor
- Animaciones de transición CSS
- Desenfoque de fondo en encabezado fijo

### Diseño Responsivo

- Puntos de interrupción optimizados para móvil, tablet y escritorio
- Desplazamiento horizontal en etiquetas de proyectos (móvil)
- Pie de página apilado verticalmente en móvil
- Ajustes de padding y espaciado por viewport

### Optimización de Rendimiento

- Componentes Image de Next.js optimizados
- CSS crítico en línea
- Lazy loading de imágenes
- Fuentes optimizadas con Geist

---

## 🛠 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo

npm run dev

# Compilar para producción

npm run build

# Iniciar servidor de producción

npm start
```

---

## 📱 Comportamiento Responsivo

### Escritorio: Diseño de 2 columnas para proyectos

### Tablet: Cuadrícula adaptativa con padding ajustado

### Móvil:

- Diseño de una sola columna
- Encabezado compacto con iconos reducidos
- Etiquetas con desplazamiento horizontal
- Pie de página apilado verticalmente
- Espaciado optimizado

---

## 🎯 Propósito del Proyecto

Este proyecto fue construido para:

```
✅ Demostrar sólidas habilidades en React, TypeScript y Next.js
✅ Mostrar capacidades modernas de diseño UI/UX
✅ Implementar arquitectura de componentes escalable
✅ Crear una experiencia de usuario pulida y profesional
✅ Gestionar estado y persistencia de tema
✅ Servir como proyecto insignia en mi portafolio
```

---

## 🔮 Mejoras Futuras

- Sección de contacto con formulario

---

## 📦 Proyectos Destacados Incluidos

- To Do List - Aplicación de gestión de tareas

- Personal Finance Dashboard - Panel de finanzas personales

- Movie Finder - Búsqueda de películas con API

- E-Commerce Store - Tienda en línea con carrito de compras

- Music Playlist Manager - Gestor de listas de reproducción (En desarrollo)

- Invoice Manager - Sistema de facturación (En desarrollo)

---

## 👤 Autor

Andy Sebastian Avendaño Ramirez
Desarrollador Web

```
💼 LinkedIn: https://www.linkedin.com/in/andy-sebastian-avenda%C3%B1o-ramirez-3a5993337/
🐱 GitHub: https://github.com/andydevsoftware
🌐 Portafolio: https://andydevsoftware.vercel.app/
```
