import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
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
export class QuizComponent implements OnInit {
  data: any = [
    {
      category: '1Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Who was the only god from Greece who did not get a name change in Rome?',
      correct_answer: 'Apollo',
      incorrect_answers: ['Demeter', 'Zeus', 'Athena'],
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'The ancient Roman god of war was commonly known as which of the following?',
      correct_answer: 'Mars',
      incorrect_answers: ['Jupiter', 'Juno', 'Ares'],
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?',
      correct_answer: 'Jason',
      incorrect_answers: ['Castor', 'Daedalus', 'Odysseus'],
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.',
      correct_answer: 'Eris',
      incorrect_answers: ['Charon', 'Ceres', 'Dysnomia'],
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who was the King of Gods in Ancient Greek mythology?',
      correct_answer: 'Zeus',
      incorrect_answers: ['Apollo', 'Hermes', 'Poseidon'],
    },
  ];
  quizId: number = 1;

  // vm$:  Observable<QuizListVm>;
  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.httpClient
      .get('https://opentdb.com/api.php?amount=10')
      .subscribe((response) => {
        let newData: any[];
        console.log('parse', JSON.parse(JSON.stringify(response)).results);
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
        console.log('newData', newData);
        this.data = newData;
        console.log('data', this.data);
      });
  }

  nextQuestion() {
    if (this.quizId === this.data.length) {
      this.route.navigate(['/result']);
    }
    this.quizId += 1;
    console.log('quizid', this.quizId);
    console.log('length', this.data.length);
  }

  htmlDecode(input: any) {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  }
}
