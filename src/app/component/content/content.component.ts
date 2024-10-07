import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TestimonialsComponent,RouterLink,RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
