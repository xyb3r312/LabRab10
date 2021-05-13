import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from '../../../services/action.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Buttons } from '../../../interfaces/ux.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
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
export class MainComponent implements OnInit {
  public buttons: Buttons[] = [
    { name: 'Ввод данных', action: 1, label: ''},
    { name: 'Рассчитать данные', action: 2, label: 'Сначала введите необхимые значения, чтобы рассчитать данные'},
    { name: 'Вывести фигуру', action: 3, label: 'Сначала введите необхимые значения, чтобы вывести фигуру'},
  ];
  public receivedData = false;
  @Input() delay = 0;

  constructor(
    private action: ActionService
  ) { }

  ngOnInit(): void {
    this.action.collectingData.subscribe((data) => {
      if (data !== undefined) {
        this.receivedData = true;
      }
    });
  }

  public closeMenu(): void {
    this.action.menuBehavior.next(false);
  }

  public changeWindow(num: number): void {
    this.action.changeWindow.next(num);
  }
}
