import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActionService } from '../../../services/action.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.sass'],
  animations: [
    trigger('toggle', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('circling', [
      state('in', style({ width: 0, height: 0 })),
      transition(':enter', [
        style({ width: 0, height: 0 }),
        animate('1000ms ease-in-out', style({ height: '{{rad}}', width: '{{rad}}' })),
      ]),
    ])
  ]
})
export class DrawComponent implements OnInit {
  public canDraw = false;
  public showCircle = false;
  public circle: string;

  constructor(
    private action: ActionService,
    private render: Renderer2,
    private element: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.initCircle();
  }

  public initCircle(): void {
    this.action.collectingData.subscribe( (circle) => {
      this.canDraw = Number(circle.radius) <= 150;
      this.circle = circle.radius + 'px';
    });
  }

  public change(link: number): void {
    this.action.changeWindow.next(link);
  }

  public toDraw(): void {
    this.showCircle = true;
    setTimeout(() => {
      const circleEl = this.element.nativeElement.querySelector('.sqr');
      this.render.setStyle(circleEl, 'width', this.circle);
      this.render.setStyle(circleEl, 'height', this.circle);
    }, 0);
  }
}
