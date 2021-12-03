import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  /**
   * Create a new City Document
   * @param createCityDto create city document type object
   * @returns
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  /**
   * Retrieve all City Documents saved
   * @returns List of City Documents
   */
  @Get()
  async findAll() {
    return this.citiesService.findAll();
  }

  /**
   * Retrieve City Document with given name
   * @param name name of city
   * @returns city document
   */
  @UseGuards(JwtAuthGuard)
  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.citiesService.findOne(name);
  }

  /**
   * Update City Document
   * @param name name of the city
   * @param updateCityDto update city document type object
   * @returns
   */
  @UseGuards(JwtAuthGuard)
  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updateCityDto: UpdateCityDto,
  ) {
    return this.citiesService.update(name, updateCityDto);
  }

  /**
   * Delete City Document
   * @param name name of city
   * @returns
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.citiesService.remove(name);
  }
}
