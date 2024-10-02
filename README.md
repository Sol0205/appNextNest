
# Para Comenzar

Descripción del proyecto y lo que se quiere hacer

## Requisitos

- Node.js (22.7.0)
- npm (10.8.2)

## Dependencias

- next
- react
- react-dom
- react-hook-form

## Dev Dependencias

- eslint
- typescript
- tailwindcss

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Sol0205/appNextNest.git
2. Navega al directorio del proyecto:
   ```bash
   cd "repositorio"

3. Instala las dependencias:
   ```bash
   npm install
## Ejecución del Backend

## Crearse el archivo ".env" en la carpeta raiz de backend y pasarle estos datos:

DATABASE_URL="postgres://user:123@localhost:5499/nestdb?schema=public"

1. Navega al directorio del backend:
    ```bash
    cd backend
2. Correr el siguiente comando en el backend
   ```bash
   docker-compose up -d
3. Hacer la migracion a prisma
   ```bash
   npx prisma migrate dev --name init
3. Inicia el servidor:
   ```bash
   npm run start:dev
## Ejecución del Frontend

1. Navega al directorio del frontend:
   ```bash
   cd frontend
2. Inicia la aplicación:
   ```bash
   npm run dev