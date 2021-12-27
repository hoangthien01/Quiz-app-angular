import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 
   quizs:Array<{'category': string, 'type': string,difficulty: string, question: string, correct_answer: string, incorrect_answers: Array<string> }> = [
    {"category":"1Mythology","type":"multiple","difficulty":"easy","question":"Who was the only god from Greece who did not get a name change in Rome?", "correct_answer":"Apollo","incorrect_answers":["Demeter","Zeus","Athena"]},
    {"category":"Mythology","type":"multiple","difficulty":"easy","question":"The ancient Roman god of war was commonly known as which of the following?","correct_answer":"Mars","incorrect_answers":["Jupiter","Juno","Ares"]},
    {"category":"Mythology","type":"multiple","difficulty":"easy","question":"Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?","correct_answer":"Jason","incorrect_answers":["Castor","Daedalus","Odysseus"]},
    {"category":"Mythology","type":"multiple","difficulty":"easy","question":"This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.","correct_answer":"Eris","incorrect_answers":["Charon","Ceres","Dysnomia"]},
    {"category":"Mythology","type":"multiple","difficulty":"easy","question":"Who was the King of Gods in Ancient Greek mythology?","correct_answer":"Zeus","incorrect_answers":["Apollo","Hermes","Poseidon"]},
  ];
  quizId : number = 1;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  nextQuestion() {
    if(this.quizId === this.quizs.length) {
      console.log('lastItem',this.quizs[4])
      this.route.navigate(['/result']);
    }
    this.quizId +=1 ;
    console.log('quizid', this.quizId)
    console.log('length', this.quizs.length)
  }
}
