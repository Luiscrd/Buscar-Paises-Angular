import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PorPaisComponent } from './por-pais/por-pais.component';


@NgModule({
  declarations: [
    PorPaisComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AntModule { }
