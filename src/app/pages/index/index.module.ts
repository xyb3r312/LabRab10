import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuProgramModule } from '../../components/menu-program/menu-program.module';


@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MenuProgramModule,
  ]
})
export class IndexModule {
}
