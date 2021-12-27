import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(public httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get('https://opentdb.com/api.php?amount=10');
  }
}
