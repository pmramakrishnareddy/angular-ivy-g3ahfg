import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './ngrx/create.actions';
import { Ilogin } from './interfaces/loginInterface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  count: number;
  constructor(private _store: Store<any>) {}
  ngOnInit() {
    this._store.select('count').subscribe((c) => {
      this.count = c;
    });
  }

  increment = () => {
    const data: Ilogin = {username: 'Rama', password: 'Krishna'};
    this._store.dispatch(increment(data));
  };

  decrement = () => {
    const data: Ilogin = {username: 'Reddy', password: 'PM'};
    this._store.dispatch(decrement(data));
  };

  reset = () => {
    this._store.dispatch(reset());
  };
}
