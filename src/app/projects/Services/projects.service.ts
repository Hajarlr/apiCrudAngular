import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../Models/projet';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'any'
})
export class ProjectsService {
url:string ="https://mani-api.ma/api/Projets";
  constructor(private http:HttpClient) { }
    getAll():Observable<Projet[]>
    {
      return this.http.get<Projet[]>(this.url);
    }
    getById(id:number):Observable<Projet>
    {
      return this.http.get<Projet>(this.url + "/" + id);
    }
    add(projet:Projet)
    {
      return this.http.post(this.url, projet);
    }
    update(project:Projet)
    {
      return this.http.put(this.url + "/" +project.Id, project);
    }
    remove(id:number)
    {
      return this.http.delete(this.url + "/" +id);
    }
 
}
