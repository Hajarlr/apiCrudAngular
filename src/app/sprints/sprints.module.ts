import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsRoutingModule } from './sprints-routing.module';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { UpdateSprintComponent } from './update-sprint/update-sprint.component';
import { ListSprintComponent } from './list-sprint/list-sprint.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSprintComponent,
    UpdateSprintComponent,
    ListSprintComponent
  ],
  imports: [
    CommonModule,
    SprintsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SprintsModule { }
