# Arquitectura

## Decision principal

El proyecto inicia como un monolito modular dentro de un monorepo.

## Motivos

- mejor velocidad de desarrollo
- menor complejidad operativa
- estructura facil de mantener
- camino limpio para escalar

## Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- validacion de entrada
- middlewares de seguridad

## Base de datos

El acceso a PostgreSQL se manejara con Prisma en esta primera fase.
La razon es simple:

- buen equilibrio entre productividad y claridad
- migraciones versionadas
- tipado fuerte
- buena historia tecnica para portfolio

## Frontend

- React Native
- Expo
- TypeScript

## Principios

- separacion por modulos de negocio
- reglas claras por capas
- seguridad desde el inicio
- documentacion continua
