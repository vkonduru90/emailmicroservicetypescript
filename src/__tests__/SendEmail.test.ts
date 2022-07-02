import request from 'supertest';
import { app } from '../../app';

describe('Send Email', () => {
  beforeAll(async () => {});

  afterAll(async () => {});

  it('Should send general response on root', async () => {
    const response = await request(app).get('/').send();

    expect(response.status).toBe(200);
    expect(response.text).toContain('Express');
  });

  it('Should be send email for given email address', async () => {
    const response = await request(app).post('/send-email').send({
      name: 'Konduru Venkatesh',
      title: 'Mr.',
      description: 'Welcome To Test Email',
      email: 'vkonduru90@gmail.com',
      subject: 'Welcome To Test Email',
    });

    expect(response.status).toBe(200);
    expect(response.text).toContain('messageId');
  });

  it('Should send error if any values are missing in body', async () => {
    const response = await request(app).post('/send-email').send({
      name: 'Konduru Venkatesh',
      description: 'Welcome To Test Email',
      email: 'vkonduru90@gmail.com',
      subject: 'Welcome To Test Email',
    });

    expect(response.status).toBe(400);
  });
});
