import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let token;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach((done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'admin',
        password: 'admin1',
      })
      .end((err, res) => {
        token = res.body.access_token;
        done();
      });
  });

  it('/cities (GET) should return 200', () => {
    return request(app.getHttpServer()).get('/cities').expect(200);
  });

  it('/cities/Lagos (GET) should return unauthorized', () => {
    return request(app.getHttpServer()).get('/cities/Lagos').expect(401);
  });

  it('/cities/Lagos (GET) should return 200', () => {
    return request(app.getHttpServer())
      .get('/cities/Lagos')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
