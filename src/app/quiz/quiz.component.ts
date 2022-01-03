import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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

  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.url = history.state.url;
    this.apiService.getQuizs(this.url).subscribe((response) => {
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
    });
    this.myTime = setInterval(() => {
      if (this.quizId < this.data.length) {
        this.completionTime = this.completionTime + 1;
        console.log('time', this.completionTime);
      } else {
        clearInterval(this.myTime);
      }
    }, 1000);
  }

  nextQuestion(answer: string) {
    if (this.quizId === this.data.length) {
      if (this.correctNum >= this.inCorrectNum) {
        this.resultMessage = 'Congratulations! You passed the exam.';
      } else {
        this.resultMessage = "Failed! Don't worry, you can try it again.";
      }
      this.finish = true;
      console.log('time', this.completionTime);
    }
    if (answer === this.data[this.quizId - 1].correct_answer) {
      this.correctNum++;
    } else {
      this.inCorrectNum++;
    }
    this.process += 100 / this.data.length;
    this.quizId += 1;
  }

  htmlDecode(input: any) {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  }

  ngOnDestroy(): void {
    clearInterval(this.myTime);
  }
}
