import { NgModule } from '@angular/core';
import { NgxPresnComponent } from './ngx-presn.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
  ],
  declarations: [NgxPresnComponent, InputComponent],
  exports: [NgxPresnComponent]
})
export class NgxPresnModule { }
