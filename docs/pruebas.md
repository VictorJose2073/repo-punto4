# Evidencia de Pruebas

## Objetivo
Validar que el endpoint mashup responde correctamente y que la prueba automatizada de integracion pasa.

## Prueba manual de consumo
Comando:

curl http://localhost:3000/api/dashboard

Resultado esperado:
- Codigo HTTP 200
- Campo ok en true
- Objeto data con localData y externalData

## Prueba automatizada
Comando:

npm test

Salida esperada (resumen):
- tests: 1
- pass: 1
- fail: 0

## Criterio de aceptacion
La entrega se considera valida cuando ambas pruebas (manual y automatizada) cumplen el resultado esperado.

## Evidencia visual y logs
- Captura 1: docs/img/endpoint-home.png
- Captura 2: docs/img/endpoint-health.png
- Captura 3: docs/img/endpoint-dashboard.png
- Log sugerido: salida de despliegue exitoso en Render, Vercel o AWS.
