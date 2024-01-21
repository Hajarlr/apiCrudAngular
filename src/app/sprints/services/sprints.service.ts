import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '../Models/sprint';

@Injectable({
  providedIn: 'any'
})
export class SprintsService {
url:string="https://mani-api.ma/api/Sprints";
  constructor(private http:HttpClient) { }

  getAll(){
  return this.http.get(this.url);
  }
  add(sprint:Sprint){
    return this.http.post(this.url, sprint);
    }
}
