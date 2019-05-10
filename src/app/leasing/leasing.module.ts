import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeasingComponent } from './leasing.component';
import { LeasingRoutingModule } from './leasing-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    LeasingRoutingModule,

    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCardModule
  ],
  declarations: [LeasingComponent]
})
export class LeasingModule { }
