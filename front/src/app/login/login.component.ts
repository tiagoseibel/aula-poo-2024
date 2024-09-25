import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputText, InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  public fazerLogin() {
    this.router.navigate(['/tela-inicial']);
  }
}
