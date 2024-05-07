import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    if (!username || !password) {
      alert("Please enter both username and password."); // Display alert message if fields are empty
      return;
    }
    this.authService.login(username, password)
    
      .subscribe((result: any) => {
        if (result) {
          // Redirect to dashboard
          console.log("Login successful");
          this.router.navigate(['/dashboard']); // Navigate to dashboard
        } else {
          // Handle login error
          console.error("Invalid username or password");
          location.reload(); // Reloading the page for invalid credentials
        }
      }, (error) => {
        console.error("Error occurred during login:", error);
        alert("An error occurred during login. Please try again later."); // Display alert message for errors
      });
  }
}
