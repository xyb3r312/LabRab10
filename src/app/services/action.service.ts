import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../interfaces/data.interfate';

@Injectable({
  providedIn: 'root'
})

export class ActionService {
  public menuBehavior = new BehaviorSubject<boolean>(undefined);
  public changeWindow = new BehaviorSubject<number>(0);
  public collectingData = new BehaviorSubject<Data>(undefined);
}
