# Coffee Project - Documentación de Inicio y Dependencias

## Tecnologías principales
- **Frontend Web**: React 19 + Vite
- **Frontend Mobile**: React Native
- **Backend**: Node.js + Fastify (TypeScript)
- **Base de datos**: PostgreSQL
- **BFF**: Node.js (TypeScript)

---

## Estructura de carpetas sugerida

```
/coffee-backend-nodejs
/coffee-bff
/coffee-web
/coffee-mobile
/documentation
```

---

## Dependencias a instalar

### 1. Backend (Node.js + Fastify + TS + PostgreSQL)

**Ya instaladas:**
- fastify
- @fastify/cors

**Recomendadas:**
- @fastify/jwt (autenticación JWT)
- @fastify/swagger (documentación OpenAPI)
- @fastify/helmet (seguridad)
- @fastify/rate-limit (rate limiting)
- @fastify/multipart (uploads)
- pg (driver PostgreSQL)
- prisma o typeorm (ORM)
- bcrypt o argon2 (hash de contraseñas)
- zod o joi (validación de esquemas)
- qrcode (generación de QR)
- dotenv (variables de entorno)
- nodemailer (emails, opcional)
- dayjs o date-fns (fechas)
- ws o socket.io (stock en tiempo real)
- cross-env (entornos)
- tsx o ts-node-dev (dev)
- typescript, @types/* (tipados)
- eslint, prettier (linter/formatter)
- vitest o jest (tests)

### 2. BFF (Node.js + TS)
- fastify o express
- axios o node-fetch (llamadas al backend)
- zod o joi (validación)
- @fastify/jwt (si gestiona tokens)
- dotenv
- typescript, @types/*
- eslint, prettier
- vitest o jest

### 3. Web (React 19 + Vite)
- react
- react-dom
- vite
- typescript
- @tanstack/react-query (data fetching)
- axios
- react-router-dom
- zod o yup (validación)
- tailwindcss o styled-components (estilos)
- @heroicons/react (iconos)
- @headlessui/react (UI accesible)
- react-hook-form
- zustand o recoil (estado global)
- eslint, prettier
- vitest o jest
- testing-library/react

### 4. Mobile (React Native)
- react-native
- expo (opcional, recomendado)
- react-navigation
- axios
- react-query
- zod o yup
- react-native-svg (QR)
- react-native-camera o expo-barcode-scanner (escaneo QR)
- react-native-paper o native-base (UI)
- react-hook-form
- zustand o recoil
- eslint, prettier
- jest
- testing-library/react-native

---

## Pasos iniciales para cada stack

### Backend
1. Configurar variables de entorno (.env)
2. Inicializar ORM (prisma/typeorm) y definir modelos
3. Crear migraciones y sincronizar DB
4. Implementar endpoints base (auth, productos, pedidos, etc)
5. Configurar Swagger
6. Implementar tests

### BFF
1. Configurar variables de entorno
2. Implementar orquestación de endpoints
3. Validar y adaptar respuestas
4. Proteger rutas
5. Implementar tests

### Web
1. Crear proyecto con Vite + React + TS
2. Configurar rutas y layout base
3. Implementar autenticación y consumo de BFF
4. Crear componentes y páginas según documentación
5. Implementar tests

### Mobile
1. Crear proyecto con React Native (o Expo)
2. Configurar navegación
3. Implementar autenticación y consumo de BFF
4. Crear componentes y pantallas según documentación
5. Implementar tests

---

## Documentación y recursos
- Ver archivos en `/documentation` para:
  - Requerimientos y funcionalidades
  - Propuesta de tareas backend y BFF
  - Listado de componentes/pages y flujos
  - Diagramas de entidades y flujos de pantallas

---

## Recomendaciones
- Usar monorepo (ej: Turborepo) para facilitar la gestión de dependencias y scripts.
- Mantener la documentación actualizada en `/documentation`.
- Usar control de versiones (git) y ramas para features.
- Configurar CI/CD desde el inicio.

---

¿Listo para comenzar? Revisa la documentación y estructura, instala las dependencias y ¡a programar!
