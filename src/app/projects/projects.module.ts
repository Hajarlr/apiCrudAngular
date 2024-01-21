import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectsListComponent,
    ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProjectsModule { }
