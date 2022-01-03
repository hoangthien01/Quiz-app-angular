import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  public getQuizs(url: string) {
    return this.httpClient.get(url);
  }
}
