import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserId: string;
  isLoggedInFlag = false;
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    console.log(username, password);
    

    if (username === 'Mahananda' && password === "123") {
      
      this.isLoggedInFlag = true;
      this.loggedInUserId = '1';
      sessionStorage.setItem('loggedInUserId', this.loggedInUserId);

      localStorage.setItem('my-key', 'my-value');
      return of(true);
      
    } else {
      return of(false); // Simulate failed login
    }
  }

  logout(): void {
    this.isLoggedInFlag = false;
    sessionStorage.removeItem('loggedInUserId');
  }

  isLoggedIn(): boolean {
    // Check if user is logged in
    return !!sessionStorage.getItem('loggedInUserId');
  }

  getLoggedInUserId(): string {
    // Get logged in user ID
    return sessionStorage.getItem('loggedInUserId')!;
  }
}
