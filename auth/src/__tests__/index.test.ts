import request from 'supertest';
import { app } from '../app';

it('Respond with status code 200', async () => {
    await request(app)
        .get('/')
        .expect(200);
});

