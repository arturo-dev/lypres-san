import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lypres-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prescriptor: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.prescriptor = 'Banco Santander';
  }

  navLeasing() {
    this.router.navigate(['leasing']);
  }

}
