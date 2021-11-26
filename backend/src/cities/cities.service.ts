import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import _ from 'lodash';

@Injectable()
export class CitiesService {
  private readonly cities: City[] = [];

  create(createCityDto: CreateCityDto) {
    createCityDto.name = _.lowerCase(createCityDto.name);
    return this.cities.push(createCityDto);
  }

  findAll(): City[] {
    return this.cities;
  }

  findOne(name: string) {
    name = _.lowerCase(name);
    return `This action returns #${name}`;
  }

  update(name: string, updateCityDto: UpdateCityDto) {
    console.log(updateCityDto);
    name = _.lowerCase(name);
    return `This action updates #${name}`;
  }

  remove(name: string) {
    name = _.lowerCase(name);
    return `This action removes #${name}`;
  }
}
