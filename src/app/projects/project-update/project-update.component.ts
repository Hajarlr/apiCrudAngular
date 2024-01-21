import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../Services/projects.service';
import { Projet } from '../Models/projet';
import { map } from 'rxjs';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
constructor(private ActivatedRoutes:ActivatedRoute, private projetService:ProjectsService ,private router:Router)
{
  this.projet =new Projet();
}
projet:Projet;
ngOnInit(): void {
  let id =this.ActivatedRoutes.snapshot.params["id"];
  this.projetService.getById(id)
  .pipe(
    map(p => {
      p.DateDebut = p.DateDebut.toString().split("T")[0];
      p.DateFin = p.DateFin.toString().split("T")[0];
      return p;
    })
  )
  .subscribe({
next :(data) => {
this.projet =data;
},
error :() => {},
complete :() => {},
  });
}
update()
{
  this.projetService.update(this.projet).subscribe({
    next : () => {
this.router.navigateByUrl("/project/list");
    }
  });

}
}
