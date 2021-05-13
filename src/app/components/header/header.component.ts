import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private action: ActionService
  ) { }

  ngOnInit(): void {
  }

  public openMenu(): void {
    this.action.menuBehavior.next(true);
  }
}
