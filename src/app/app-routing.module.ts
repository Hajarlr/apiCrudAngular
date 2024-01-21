import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"project", loadChildren :()=> import("./projects/projects.module").then(m => m.ProjectsModule)},
  {path:"sprint", loadChildren :()=> import("./sprints/sprints.module").then(s=> s.SprintsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
