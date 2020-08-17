import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bodyguards} from './Bodyguards';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  bodyguards: Object;

  constructor(private http: HttpClient) { }


  getBodyguards(){
    const res = this.http.get<Bodyguards[]>('https://my-json-server.typicode.com/Wilopez95/bodyguards_json/companies')
    return res
  }
}
