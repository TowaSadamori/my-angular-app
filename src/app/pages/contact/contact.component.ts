import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>This is the contact page of your application.</p>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 2rem;
      text-align: center;
    }
  `]
})
export class ContactComponent {} 