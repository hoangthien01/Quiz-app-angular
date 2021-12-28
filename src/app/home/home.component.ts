import { Component, OnInit } from '@angular/core';
import { getQuizs } from '../core/store/actions'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  startGame() {
    this.store.dispatch(getQuizs())
  }
}
