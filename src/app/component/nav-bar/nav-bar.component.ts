import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactComponent } from "../contact/contact.component";
import { ServicesComponent } from "../services/services.component";
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AboutComponent, CareersComponent, ContactComponent, ServicesComponent,RouterLink,RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
