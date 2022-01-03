import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
=======
import { getQuizs } from '../core/store/actions'
import { Store } from '@ngrx/store'
>>>>>>> 3fc5be9d38c570946e1e466497578c62f9ba13d3

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url: string = 'https://opentdb.com/api.php?amount=10&category=21';
  selectedValue: string = '21';
  categories = [
    {
      value: '21',
      label: 'Sports',
    },
    {
      value: '25',
      label: 'Art',
    },
    {
      value: '23',
      label: 'History',
    },
    {
      value: '27',
      label: 'Animals',
    },
    {
      value: '26',
      label: 'Celebrities',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}

  startGame() {
    // this.route.navigate(['quiz']);
    this.route.navigateByUrl('/quiz', { state: { url: this.url } });
  }

  onChange(newValue: any) {
    console.log(newValue);
    this.selectedValue = newValue;
    this.url =
      'https://opentdb.com/api.php?amount=10&category=' + this.selectedValue;
  }
}
