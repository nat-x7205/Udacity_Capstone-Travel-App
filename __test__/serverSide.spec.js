import 'regenerator-runtime/runtime';

const app = require('../src/server/app');
const request = require('supertest');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});


