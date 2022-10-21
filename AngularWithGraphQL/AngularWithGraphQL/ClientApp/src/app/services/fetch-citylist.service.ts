import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { GET_CITIES } from '../GraphQL/query';
import { CityType } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class FetchCitylistService extends Query<CityType> {
  document = GET_CITIES;
}
