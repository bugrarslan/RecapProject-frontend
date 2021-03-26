import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44327/api/customers/getall';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<CustomerDetailDto>> {
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl);
  }
}
