import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SprintsService } from '../services/sprints.service';
import { Router } from '@angular/router';
import { Sprint } from '../Models/sprint';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})
export class AddSprintComponent implements OnInit{
constructor(private SprintService:SprintsService, private router:Router)
{
  this.sprint=new Sprint();
}
sprint:Sprint;
ngOnInit(): void {

}
add()
{
  this.SprintService.add(this.sprint).subscribe({
   
      next : () => {
        this.router.navigateByUrl("/sprint/list");
      },
      error: () => {},
      complete: () => {}
   
  });
  
}
}
