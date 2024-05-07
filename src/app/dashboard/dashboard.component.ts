import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    sessionStorage.removeItem('loggedInUserId');
    this.router.navigate(['/login']);


  }
  
  navigateToProductList(): void {
    this.router.navigate(['/products']);
  }
}
