import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  onSubmit() {
    const newUser = {
      email: this.email,
      password: this.password,
    };
    console.log("New User:", newUser);
  }
}
