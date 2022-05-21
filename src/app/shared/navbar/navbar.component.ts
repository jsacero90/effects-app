import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscar(input: string) {
    if (!input) {
      return;
    }
    console.log(input);

    this.router.navigate(['usuario', input]);
  }
}
