import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    console.log("AuthGuard canActivate called");
    if (this.authService.isLoggedIn()) {
      console.log("User is logged in");
      if (sessionStorage.getItem('loggedInUserId') === '1') {
        console.log("Session exists in sessionStorage");
        return true; // User is logged in and session exists
      } else {
        console.log("Session does not exist in sessionStorage");
        // Redirect to login page or handle unauthorized access
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      console.log("User is not logged in, redirecting to login page");
      // User is not logged in, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}  