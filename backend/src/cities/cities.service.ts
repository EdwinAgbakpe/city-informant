import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City, CityDocument } from './schemas/city.schema';
import { startCase } from 'lodash';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

  create(createCityDto: CreateCityDto) {
    createCityDto.name = startCase(createCityDto.name);
    const createdCity = new this.cityModel(createCityDto);
    return createdCity.save();
  }

  findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  findOne(name: string) {
    name = startCase(name);
    return this.cityModel.findOne({ name });
  }

  update(name: string, updateCityDto: UpdateCityDto) {
    name = startCase(name);
    return this.cityModel.findOneAndUpdate(
      { name },
      { ...updateCityDto },
      { new: true },
    );
  }

  remove(name: string) {
    name = startCase(name);
    return this.cityModel.deleteOne({ name });
  }
}
