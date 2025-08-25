import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
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
