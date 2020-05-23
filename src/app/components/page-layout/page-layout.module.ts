import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PageLayoutComponent } from './page-layout.component';



@NgModule({
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class PageLayoutModule { }
