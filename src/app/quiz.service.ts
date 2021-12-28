import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private apiService: ApiService) { }

  getQuizs() {
    console.log('getQUiz')
    return this.apiService.httpClient .get('https://opentdb.com/api.php?amount=10')
    .subscribe((response) => {
      let newData: any[];
      // console.log('parse', JSON.parse(JSON.stringify(response)).results);
      newData = JSON.parse(JSON.stringify(response)).results.map(
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
      console.log('quizServices', newData);
    });
  }
}
