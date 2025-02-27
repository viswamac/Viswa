import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-about',
  imports: [RouterModule,MatToolbarModule,MatSidenavModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data: string = '';
  constructor(private apiService : ApiService){}

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });

  }
}
