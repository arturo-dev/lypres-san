import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LangModule } from 'projects/ngx-core/src/lib/lang/lang.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LangModule,

    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
