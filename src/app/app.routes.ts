import { Routes } from "@angular/router";
import { RegistrationComponent } from "./user/registration/registration.component";
import { LoginComponent } from "./user/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
];
