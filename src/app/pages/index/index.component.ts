import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  animations: [
    trigger('appearing', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class IndexComponent implements OnInit {
  public isOpen = false;

  constructor(
    private action: ActionService
  ) { }

  ngOnInit(): void {
    this.action.menuBehavior
      .subscribe((val) => {
        this.isOpen = val;
      });
  }

}
