const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    it('test the env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
})

describe('GET /', () => {
    it('returns 200 ok', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200)
    });
    it('should be json', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json')
    });
    it('return right object', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({api: 'peek a boo i see you'})
    });
});



