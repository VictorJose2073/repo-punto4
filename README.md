# API Mashup - Repositorio de la Actividad

## 1. Arquitectura Mashup
Esta aplicación expone un endpoint simple que combina datos propios del sistema con una fuente externa pública para demostrar una arquitectura mashup en una sola API.

### Flujo de trabajo
- El servidor Express recibe solicitudes en `/api/dashboard`.
- El controlador obtiene un dato local simulado.
- También consume una API externa pública.
- Ambos resultados se integran en una sola respuesta JSON.

### Estructura del proyecto
```text
repo-punto4/
├── src/
│   ├── controllers/
│   │   └── dashboardController.js
│   ├── routes/
│   │   └── dashboardRoutes.js
│   └── server.js
├── tests/
│   └── app.test.js
├── docs/
│   ├── seguridad.md
│   ├── despliegue.md
│   └── pruebas.md
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 2. Seguridad y Entorno (.env)
Las credenciales y configuraciones sensibles deben manejarse con variables de entorno.

### Recomendación
- Crear un archivo `.env` localmente.
- No subir claves ni secretos al repositorio.
- Usar `.env.example` como plantilla pública.

### Ejemplo
```env
PORT=3000
```

## 3. Proceso de Despliegue en Nube
La aplicación está preparada para ejecutarse con el script de inicio definido en `package.json`.

### Pasos recomendados
1. Subir el repositorio a GitHub.
2. Crear un servicio en Render, Vercel o Railway.
3. Configurar el comando de inicio como:
   ```bash
   npm start
   ```
4. Definir la variable `PORT` en la plataforma.
5. Ejecutar la aplicación y verificar el endpoint `/api/dashboard`.

## 4. Repositorio y Pruebas
Este repositorio está pensado para presentarse como una solución organizada, con documentación y evidencia de pruebas.

### Instalación
```bash
npm install
```

### Ejecución local
```bash
npm start
```

### Endpoints disponibles
- `/`
- `/health`
- `/api/dashboard`

### Pruebas
```bash
npm test
```

### Resultado esperado
- Código HTTP: 200
- Respuesta JSON con `ok: true`
- Datos combinados de origen local y externo

## Evidencia para entregar
- Captura del endpoint en Postman, curl o navegador.
- Captura del resultado de `npm test`.
- Archivos de documentación en la carpeta `docs/`.
