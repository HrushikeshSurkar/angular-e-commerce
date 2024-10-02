import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    const newUser = {
      email: this.email,
      password: this.password,
    };
    console.log("New User:", newUser);
    this.router.navigate(["/home"]);
  }
}
