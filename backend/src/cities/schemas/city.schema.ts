import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  /**
   * Name of the city
   */
  @Prop()
  name: string;

  /**
   * Name of the city in its native language
   */
  @Prop()
  name_native: string;

  /**
   * Country in which the city is located
   */
  @Prop()
  country: string;

  /***
   * Continent in which the city@apos;s country is located
   */
  @Prop()
  continent: string;

  /**
   * Latitude
   */
  @Prop()
  latitude: number;

  /**
   * Longitude
   */
  @Prop()
  longitude: number;

  /**
   * Population of the city
   */
  @Prop()
  population: number;

  /**
   * Year the city was founded
   */
  @Prop()
  founded: number;

  /**
   * List of landmarks found in the city
   */
  @Prop()
  landmarks?: string[] = [];
}

export const CitySchema = SchemaFactory.createForClass(City);
