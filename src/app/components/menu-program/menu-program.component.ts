import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-menu-program',
  templateUrl: './menu-program.component.html',
  styleUrls: ['./menu-program.component.sass']
})
export class MenuProgramComponent implements OnInit {
  public pages = [0, 0, 0, 0];
  constructor(
    private action: ActionService
  ) {
  }

  ngOnInit(): void {
    this.initPages();
  }

  public initPages(): void {
    this.action.changeWindow.subscribe((pos) => {
      this.pages.forEach( (element, i) => {
        this.pages[i] = i === pos ? setTimeout(() => 1, 300) : 0;
      });
    });
  }
}
