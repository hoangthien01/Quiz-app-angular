import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from '../core/models/quiz.model';
// import { VmFromLatest } from '../../app/core/utils/operators.utils'
interface QuizListVm {
  quizs: Quiz[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnDestroy {
  data: any[] = [];
  quizId: number = 1;
  correctNum: number = 0;
  inCorrectNum: number = 0;
  process: number = 0;
  finish: Boolean = false;
  resultMessage: string = '';
  completionTime: number = 0;
  url: string = '';
  myTime: any;
  answer: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.data = history.state.data;
    if (this.data == undefined) {
      this.route.navigate(['/']);
    }
    this.url = history.state.url;
    this.myTime = setInterval(() => {
      if (this.quizId < this.data.length) {
        this.completionTime = this.completionTime + 1;
      } else {
        clearInterval(this.myTime);
      }
    }, 1000);
  }

  chooseAnswer(answer: string) {
    this.answer = answer;
    if (answer === this.data[this.quizId - 1].correct_answer) {
      this.correctNum++;
    } else {
      this.inCorrectNum++;
    }
  }

  nextQuestion() {
    this.process += 100 / this.data.length;
    this.quizId += 1;
    this.answer = '';
    if (this.quizId > this.data.length) {
      if (this.correctNum >= this.inCorrectNum) {
        this.resultMessage = 'Congratulations! You passed the exam.';
      } else {
        this.resultMessage = "Failed! Don't worry, you can try it again.";
      }
      this.finish = true;
    }
  }

  htmlDecode(input: any) {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  }

  ngOnDestroy(): void {
    clearInterval(this.myTime);
  }
}
