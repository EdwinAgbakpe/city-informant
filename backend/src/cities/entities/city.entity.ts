// import { ApiProperty } from '@nestjs/swagger';

export class City {
  /**
   * Name of the city
   */
  name: string;

  /**
   * Name of the city in its native language
   */
  name_native: string;

  /**
   * Country in which the city is located
   */
  country: string;

  /***
   * Continent in which the city@apos;s country is located
   */
  continent: string;

  /**
   * Latitude
   */
  latitude: number;

  /**
   * Longitude
   */
  longitude: number;

  /**
   * Population of the city
   */
  population: number;

  /**
   * Year the city was founded
   */
  founded: number;

  /**
   * List of landmarks found in the city
   */
  landmarks?: string[] = [];
}
