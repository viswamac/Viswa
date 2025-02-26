import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [
    RouterModule,
    MatToolbarModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
