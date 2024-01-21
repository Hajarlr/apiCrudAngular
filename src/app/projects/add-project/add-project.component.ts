import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../Services/projects.service';
import { Projet } from '../Models/projet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
constructor(private ProjectService:ProjectsService,private router :Router)
{
  this.projet = new Projet();
}
projet:Projet;
ngOnInit(): void {

}
add()
{
  this.ProjectService.add(this.projet).subscribe({
    next : () => {
      this.router.navigateByUrl("/project/list");
    },
    error: () => {},
    complete: () => {}
  });
}
}
