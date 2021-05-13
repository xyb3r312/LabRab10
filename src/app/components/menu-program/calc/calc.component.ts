import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActionService } from '../../../services/action.service';
import { Data } from '../../../interfaces/data.interfate';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.sass'],
  animations: [
    trigger('toggle', [
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
export class CalcComponent implements OnInit {
  public data: Data;
  public length = 0;
  public square = 0;

  constructor(
    private action: ActionService
  ) {
  }

  ngOnInit(): void {
    this.action.collectingData.subscribe((data) => {
      this.data = data;
      const r: number = Number(data.radius);
      this.length = data.length ? Math.PI * r ** 2 : 0;
      this.square = data.square ? 2 * Math.PI * r : 0;
    });
  }

  public change(link: number): void {
    this.action.changeWindow.next(link);
  }
}
