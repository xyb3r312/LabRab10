import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActionService } from '../../../services/action.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../../interfaces/data.interfate';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
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
export class InputComponent implements OnInit {
  public input: FormGroup;
  public success = false;

  constructor(
    private action: ActionService
  ) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.input = new FormGroup({
      radius: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$') ]),
      square: new FormControl(''),
      length: new FormControl('')
    });
  }

  public change(link: number): void {
    this.action.changeWindow.next(link);
  }

  public submit(): void {
    this.success = false;
    this.input.markAllAsTouched();
    if (this.input.valid) {
      const data: Data = {...this.input.value};
      this.action.collectingData.next(data);
      this.success = true;
    }
  }
}
