# Proyecto de Portafolio

Base de trabajo para construir un proyecto serio de software orientado a portafolio y CV.

## Objetivo

Construir una aplicacion con:

- backend en Node.js + Express + TypeScript
- base de datos PostgreSQL
- autenticacion segura con JWT y bcrypt
- frontend mobile en React Native Expo + TypeScript
- documentacion y evolucion constante en GitHub

## Arquitectura

La decision inicial es trabajar con un **monorepo** y un **monolito modular**.
Eso nos permite avanzar rapido, mantener orden y escalar con criterio.

## Estructura inicial

```text
/
|-- apps/
|   |-- api/
|   |-- mobile/
|-- packages/
|   |-- shared-types/
|-- docs/
|-- PLAN_PROYECTO.md
```

## Roadmap inicial

1. Definir arquitectura y stack
2. Crear estructura base del monorepo
3. Montar backend base
4. Conectar PostgreSQL
5. Construir auth y seguridad
6. Montar frontend mobile
7. Mantener documentacion y GitHub al dia

## Estado actual

- Documento de arquitectura inicial creado
- Base del monorepo creada
- Esqueleto inicial del backend preparado
- Integracion inicial con PostgreSQL planificada con Prisma
