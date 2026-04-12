# PostgreSQL Setup

## Decision actual

Vamos a integrar PostgreSQL usando Prisma.

## Flujo de trabajo

1. definir `DATABASE_URL` en `.env`
2. modelar entidades en `apps/api/prisma/schema.prisma`
3. generar cliente Prisma
4. crear migraciones
5. usar el cliente desde `src/database/`

## Opciones para correr PostgreSQL

### Opcion 1: local

Instalar PostgreSQL localmente y usar una URL como:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio_db
```

### Opcion 2: nube

Usar Neon, Supabase o Railway para una base gestionada.

## Recomendacion

Para desarrollo local, empezar con PostgreSQL local es totalmente valido.
Si luego quieres demo publica o despliegue rapido, Neon tambien es una muy buena opcion.

