import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProgramComponent } from './menu-program.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputComponent } from './input/input.component';
import { CalcComponent } from './calc/calc.component';
import { DrawComponent } from './draw/draw.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MenuProgramComponent,
    InputComponent,
    CalcComponent,
    DrawComponent,
    MainComponent
  ],
  exports: [MenuProgramComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ]
})
export class MenuProgramModule {
}
