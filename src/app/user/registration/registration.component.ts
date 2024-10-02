import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-registration",
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  isMobile: boolean = window.innerWidth < 768;
  constructor(private router: Router) {}

  onSubmit() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    console.log("New User:", newUser);
    this.router.navigate(["/login"]);
  }
}
