import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let controller: CitiesController;

  const mockService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return [];
    }),
    // findOne: jest.fn((name) => {
    //   return {
    //   }
    // }),
    update: jest.fn((name, dto) => {
      return {
        name: name,
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    })
      .overrideProvider(CitiesService)
      .useValue(mockService)
      .compile();

    controller = module.get<CitiesController>(CitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a city', () => {
    const dto = {
      name: 'test',
      name_native: 'test',
      country: 'test',
      continent: 'test',
      latitude: 0.0,
      longitude: 0.0,
      population: 0,
      founded: 0,
      landmarks: ['test1', 'test2'],
    };
    expect(controller.create(dto)).resolves.toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });

  it('return all cities', () => {
    expect(controller.findAll()).resolves.toEqual([]);
  });
  it('it should update one city', () => {
    const dto = { name_native: 'retest' };
    expect(controller.update('test', dto)).resolves.toEqual({
      name: 'test',
      ...dto,
    });
  });
});
