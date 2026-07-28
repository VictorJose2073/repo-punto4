# 3. Proceso de Despliegue en la Nube

La aplicacion esta preparada para ejecutarse con el script de inicio definido en package.json, requisito base para una plataforma PaaS.

## 3.1 Script de inicio requerido (package.json)

{
   "scripts": {
      "start": "node src/server.js",
      "dev": "nodemon src/server.js",
      "test": "jest"
   }
}

## 3.2 Pasos recomendados para despliegue

### Paso 1 - Subir el repositorio a GitHub

git add .
git commit -m "feat: mashup api ready"
git push origin main

### Paso 2 - Crear un servicio en Render, Vercel o AWS

- Conectar la cuenta de GitHub.
- Seleccionar el repositorio repo-punto4.

Opciones recomendadas:
- Render: crear Web Service.
- Vercel: crear Project (Other) y usar comandos de package.json.
- AWS: crear servicio en App Runner con source desde GitHub.

### Paso 3 - Configurar el comando de inicio

- Build Command: npm install
- Start Command: npm start

### Paso 4 - Definir variables de entorno

- Agregar PORT y otras variables en el dashboard del PaaS.

### Paso 5 - Verificar el endpoint

- Acceder a: https://tu-app.onrender.com/api/dashboard
- Verificar respuesta JSON con datos combinados.

Rutas equivalentes por plataforma:
- Render: https://tu-app.onrender.com/api/dashboard
- Vercel: https://tu-app.vercel.app/api/dashboard
- AWS App Runner: https://tu-app.awsapprunner.com/api/dashboard
