import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  //  router: any;
  constructor(private router:Router )
  
  { }

  logout() {
    sessionStorage.removeItem('loggedInUserId');
    this.router.navigate(['/login']);


  }
  
}