import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formSubmit() {
    // Handle form submission
    console.log('Form submitted');
    // Add your form submission logic here
  }
}
