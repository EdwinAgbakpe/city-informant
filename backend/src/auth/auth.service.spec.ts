import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
// import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';
// import { getModelToken } from '@nestjs/mongoose';

describe('AuthService', () => {
  let service: AuthService;
  // const mockModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: {
            registerUserAsync: jest.fn(), // <--here
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
