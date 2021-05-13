import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderModule } from '../../components/header/header.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../components/footer/footer.module';



@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    FooterModule
  ]
})
export class MainLayoutModule { }
