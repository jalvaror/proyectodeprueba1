# Plan de Proyecto

## Vision

Este repositorio va a ser la base de un proyecto serio para portafolio y CV.
La idea no es solo "hacer una app", sino construirla con una estructura que se vea profesional, mantenible y escalable.

## Mi opinion general

Tu enfoque me parece muy bueno.
Elegir PostgreSQL, Node.js para backend y React Native Expo con TypeScript para frontend es una combinacion fuerte para:

- mostrar criterio de arquitectura
- demostrar buenas practicas reales
- construir algo que pueda crecer
- tener un proyecto presentable en GitHub

La clave es empezar con una arquitectura que sea ordenada pero no demasiado pesada.
Mi recomendacion es arrancar con un **monolito modular** bien disenado.
Eso da mejor velocidad al inicio y deja una ruta clara para escalar despues a microservicios si algun dia realmente hace falta.

## Recomendacion principal

### Backend

- Runtime: Node.js
- Lenguaje recomendado: TypeScript
- Framework HTTP: Express
- Base de datos: PostgreSQL
- Auth: JWT
- Password hashing: bcrypt
- Seguridad HTTP: cors, helmet, rate limiting, validacion de entrada
- Acceso a datos: Prisma o Drizzle
- Testing: Vitest o Jest + Supertest

### Frontend

- React Native
- Expo
- TypeScript
- Navegacion: Expo Router o React Navigation
- Estado: Zustand o Redux Toolkit si el proyecto lo necesita
- Cliente HTTP: fetch o axios
- Almacenamiento seguro: expo-secure-store para tokens

## Decision de arquitectura

### Mejor opcion para empezar

La mejor opcion para rendimiento, seguridad, mantenimiento y escalabilidad futura es:

**Monorepo con backend modular + frontend mobile separado por apps + reglas claras de capas**

Eso significa:

- un solo repositorio en GitHub
- una carpeta para backend
- una carpeta para frontend mobile
- posibilidad de agregar luego un panel web o librerias compartidas

## Estructura sugerida

```text
/
|-- apps/
|   |-- api/
|   |   |-- src/
|   |   |   |-- config/
|   |   |   |-- modules/
|   |   |   |   |-- auth/
|   |   |   |   |-- users/
|   |   |   |   |-- security/
|   |   |   |   |-- health/
|   |   |   |-- middlewares/
|   |   |   |-- database/
|   |   |   |-- shared/
|   |   |   |-- app.ts
|   |   |   |-- server.ts
|   |   |-- tests/
|   |   |-- package.json
|   |
|   |-- mobile/
|       |-- app/
|       |-- src/
|       |   |-- components/
|       |   |-- screens/
|       |   |-- services/
|       |   |-- hooks/
|       |   |-- store/
|       |   |-- types/
|       |-- package.json
|
|-- packages/
|   |-- shared-types/
|   |-- eslint-config/
|
|-- docs/
|-- .env.example
|-- package.json
```

## Backend: como lo trabajaremos

### Enfoque recomendado

No quiero que el backend quede como una carpeta con rutas mezcladas, controladores largos y SQL repartido por todos lados.
Para un proyecto de CV, eso resta mucho valor.

Propongo trabajar por **modulos de negocio**.
Cada modulo tendra su propia responsabilidad.

Ejemplo:

- `auth`: login, registro, refresh token, JWT
- `users`: perfil, roles, datos de usuario
- `security`: cifrado, auditoria, permisos
- `health`: estado del servicio

### Estructura interna de un modulo

```text
modules/
|-- auth/
|   |-- auth.routes.ts
|   |-- auth.controller.ts
|   |-- auth.service.ts
|   |-- auth.repository.ts
|   |-- auth.schema.ts
|   |-- auth.types.ts
```

### Capas recomendadas

- `routes`: define endpoints y middlewares por ruta
- `controller`: recibe request/response y delega
- `service`: contiene reglas de negocio
- `repository`: habla con PostgreSQL
- `schema`: validacion de entrada y salida
- `middlewares`: auth, errores, permisos, logging

Este modelo es simple, entendible y profesional.

## Seguridad

Este va a ser uno de los puntos mas fuertes de tu perfil, asi que conviene tratarlo en serio.

### Lo que si recomiendo

- `bcrypt` solo para hashing de passwords
- `JWT` para autenticacion
- `cors` configurado por origen permitido
- `helmet` para headers de seguridad
- rate limiting para login y endpoints sensibles
- validacion de payloads con Zod o Joi
- logs sin exponer datos sensibles
- variables de entorno separadas por ambiente

### Sobre cifrado en base de datos

Aqui hay una distincion muy importante:

- **hashing** no es lo mismo que **encriptacion**
- passwords se hashean, no se encriptan
- datos sensibles como documentos, llaves o informacion privada si pueden encriptarse

### Mi recomendacion sobre cifrado

Para un proyecto de CV, la mejor historia tecnica seria:

1. `bcrypt` para passwords
2. cifrado de campos sensibles a nivel aplicacion
3. PostgreSQL como almacenamiento
4. opcion de usar `pgcrypto` solo cuando tenga sentido

#### Por que prefiero cifrado a nivel aplicacion

- mayor control de llaves
- menor dependencia de funciones especificas del motor
- mejor portabilidad
- mejor narrativa de arquitectura para entrevistas tecnicas

### Estrategia sugerida

- passwords: `bcrypt`
- tokens: JWT con expiracion corta
- refresh tokens: almacenar version hash o estrategia revocable
- campos sensibles: cifrado simetrico con `crypto` de Node.js
- secretos: siempre en `.env`, nunca hardcodeados

## Rendimiento

Para rendimiento real, no basta con "usar Express".
Hay que tomar decisiones correctas desde el inicio.

### Buenas practicas recomendadas

- consultas SQL bien indexadas
- evitar N+1 queries
- paginacion desde el inicio
- pool de conexiones a PostgreSQL
- compresion si aplica
- cache solo cuando exista necesidad real
- separacion entre logica y acceso a datos

### Opinion honesta

Para un primer proyecto serio, el cuello de botella rara vez sera Express.
Normalmente sera:

- mala estructura
- consultas pobres
- falta de validacion
- mala gestion de errores

Por eso primero construiremos bien, luego optimizamos donde haga falta.

## Mantenimiento

Si quieres que este proyecto se vea profesional en tu CV, necesitamos que cualquiera pueda abrir el repo y entenderlo rapido.

Por eso recomiendo:

- TypeScript tambien en backend
- nombres consistentes
- modulos pequenos
- reglas de lint y format
- README claro
- documentacion tecnica en `docs/`
- tests basicos desde el inicio

## Escalabilidad futura

La arquitectura propuesta te deja crecer asi:

### Fase 1

- monolito modular
- una sola base de datos
- auth simple y segura

### Fase 2

- colas o jobs en background
- observabilidad
- roles y permisos mas finos
- cache selectiva

### Fase 3

- separar servicios si el dominio lo justifica
- CI/CD mas completo
- despliegue con Docker
- monitoreo y trazabilidad

No recomiendo empezar con microservicios.
Para este punto de tu carrera, te suma mas demostrar criterio que complejidad innecesaria.

## Frontend mobile

Me gusta mucho que quieras usar React Native Expo con TypeScript.
Es una muy buena decision para un proyecto visible y util.

### Como lo trabajaremos

- Expo para velocidad de desarrollo
- TypeScript para mantenibilidad
- capas simples: `screens`, `components`, `services`, `store`
- cliente API centralizado
- manejo de sesion con storage seguro
- validacion de formularios

### Mi opinion

Expo es excelente para arrancar y para un portfolio moderno.
Solo saldria de Expo si el proyecto necesita una integracion nativa muy especifica.
Si no, Expo nos da velocidad y una experiencia mucho mas limpia.

## Forma de trabajo recomendada

Propongo que trabajemos asi:

1. Definimos la arquitectura primero
2. Creamos la estructura del repo
3. Montamos backend base
4. Conectamos PostgreSQL
5. Construimos auth y seguridad
6. Montamos frontend mobile
7. Documentamos todo y lo mantenemos en GitHub

## Flujo con GitHub

Para mantener el proyecto ordenado:

- rama principal: `main`
- ramas por feature: `feature/auth`, `feature/users`, `feature/mobile-login`
- commits pequenos y claros
- documentar decisiones importantes en markdown
- push frecuente a GitHub

## Lo que yo haria en tu lugar

Si este fuera mi proyecto para CV, arrancaria con esta base:

- monorepo
- backend Node.js + Express + TypeScript + PostgreSQL
- auth con JWT + bcrypt
- cifrado de campos sensibles
- frontend Expo + React Native + TypeScript
- documentacion tecnica desde el primer dia

Eso te da un proyecto que no solo "funciona", sino que ademas comunica madurez tecnica.

## Como trabajaremos tu y yo

Mi propuesta es esta:

- tu defines la vision del producto y tus preferencias
- yo te ayudo a aterrizar arquitectura, estructura, codigo y documentacion
- cada paso lo dejamos listo en el repo y subido a GitHub
- cada decision importante la dejamos documentada en markdown

Yo puedo ayudarte a trabajar de dos formas:

### Modo estrategico

- definimos arquitectura
- elegimos stack
- revisamos seguridad
- documentamos decisiones

### Modo constructor

- creo carpetas y archivos
- configuro backend
- creo rutas, middlewares, auth y conexion a DB
- organizo commits y push a GitHub

## Siguiente paso recomendado

El siguiente mejor paso es crear la estructura inicial del monorepo y un `README.md` principal con:

- objetivo del proyecto
- stack
- arquitectura
- roadmap

Despues de eso armamos el backend base con Express y PostgreSQL.
