import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <p>This is the about page of your application.</p>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      text-align: center;
    }
  `]
})
export class AboutComponent {} 