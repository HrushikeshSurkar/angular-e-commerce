import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-registration",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  isMobile: boolean = window.innerWidth < 768;

  onSubmit() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    console.log("New User:", newUser);
  }
}
