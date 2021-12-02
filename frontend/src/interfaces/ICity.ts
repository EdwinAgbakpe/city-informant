/* eslint-disable camelcase */
export interface ICity{
  _id?: string;
  name: string,
  name_native: string,
  country: string,
  continent: string,
  latitude: number,
  longitude: number,
  population: number,
  founded: number,
  landmarks: string[],
}
