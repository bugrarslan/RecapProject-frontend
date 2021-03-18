import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44327/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
