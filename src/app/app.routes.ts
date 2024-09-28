// app.routes.ts
import { Routes } from "@angular/router";
import { RegistrationComponent } from "./user/registration/registration.component";
import { LoginComponent } from "./user/login/login.component";

export const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
];
