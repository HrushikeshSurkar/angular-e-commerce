// app.routes.ts
import { Routes } from '@angular/router';
import { RegistrationComponent } from './user/registration/registration.component';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
];
