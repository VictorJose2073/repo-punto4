const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../src/server');

test('GET /api/dashboard responde correctamente', async () => {
  const server = http.createServer(app);

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));

  try {
    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/api/dashboard`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.ok(body.data);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }
});
