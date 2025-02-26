import { Component, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-project',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatAccordion,
    MatExpansionModule,
    MatButtonModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  accordion = viewChild.required(MatAccordion);
}
