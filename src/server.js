const express = require('express');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', dashboardRoutes);

app.get('/', (_req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Repositorio punto 4 listo',
    endpoint: '/api/dashboard'
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true, message: 'Health OK' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
