const request = require('supertest');
const app = require('../src/server');

describe('GET /api/dashboard', () => {
  it('responde 200 y estructura JSON esperada', async () => {
    const response = await request(app).get('/api/dashboard');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('ok', true);
    expect(response.body).toHaveProperty('data');
  });
});
