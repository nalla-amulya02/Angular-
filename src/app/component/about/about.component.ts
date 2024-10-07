import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { ServicesComponent } from '../services/services.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
