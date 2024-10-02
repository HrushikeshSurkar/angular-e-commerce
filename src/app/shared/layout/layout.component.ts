import { Component } from "@angular/core";
import { NavBarComponent } from "../componets/nav-bar/nav-bar.component";
import { FooterComponent } from "../componets/footer/footer.component";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
