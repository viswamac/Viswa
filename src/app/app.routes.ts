import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contact', component: ContactComponent }
];
