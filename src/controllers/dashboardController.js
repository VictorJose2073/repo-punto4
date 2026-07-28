const dashboardController = {
  getDashboard: async (_req, res) => {
    const localData = {
      service: 'local-service',
      status: 'ok',
      message: 'Datos propios del sistema'
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const payload = await response.json();

      res.status(200).json({
        ok: true,
        message: 'Integración de pruebas y repositorio lista',
        data: {
          localData,
          externalData: {
            service: 'jsonplaceholder',
            status: 'ok',
            title: payload.title || 'Sin título'
          }
        }
      });
    } catch (error) {
      res.status(200).json({
        ok: true,
        message: 'Integración de pruebas y repositorio lista',
        data: {
          localData,
          externalData: {
            service: 'jsonplaceholder',
            status: 'error',
            message: 'No se pudo consumir la API externa'
          }
        }
      });
    }
  }
};

module.exports = dashboardController;
