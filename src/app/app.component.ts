import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'lypres-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private adapter: DateAdapter<any>) {
    adapter.setLocale('es');
  }

}
