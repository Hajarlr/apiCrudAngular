import { Component, OnInit } from '@angular/core';
import { Projet } from '../Models/projet';
import { ProjectsService } from '../Services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})

export class ProjectsListComponent implements OnInit{
projects:Projet[]=[];
constructor(private ProjetService:ProjectsService){

}
ngOnInit():void{
this.ProjetService.getAll().subscribe({
  next : (data) => {
    this.projects = data;
  },
  error : () => {},
  complete : () => {}
});
}
remove(id:number)
{
  if(confirm("Etes vous sur de vouloir supprimer le projet"))
  {
    this.ProjetService.remove(id).subscribe({
      next : () => {
        this.projects = this.projects.filter(p => p.Id != id);
      },
      error : () => {},
      complete : () => {}
    });
  }
 
}
}
