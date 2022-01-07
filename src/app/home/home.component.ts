import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { ApiService } from '../api.service';

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
  data: any = [];
  loading: Boolean = false;

  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  async startGame() {
    this.loading = true;
    await this.apiService.getQuizs(this.url).subscribe((response) => {
      let newData = JSON.parse(JSON.stringify(response)).results.map(
        (question: any) => {
          question.answers = [
            question.correct_answer,
            ...question.incorrect_answers,
          ];
          for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [
              question.answers[j],
              question.answers[i],
            ];
          }
          return question;
        }
      );
      this.data = newData;
      this.route.navigateByUrl('/quiz', {
        state: { url: this.url, data: this.data },
      });
    });
  }

  onChange(newValue: any) {
    console.log(newValue);
    this.selectedValue = newValue;
    this.url =
      'https://opentdb.com/api.php?amount=10&category=' + this.selectedValue;
  }
}
