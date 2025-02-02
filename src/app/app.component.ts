import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { TestimonialsComponent } from "./component/testimonials/testimonials.component";
import { ContentComponent } from "./component/content/content.component";
import { FooterComponent } from "./component/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavBarComponent, TestimonialsComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProject';
}
