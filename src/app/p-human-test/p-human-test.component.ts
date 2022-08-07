import { style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../model/cat';
import { Quiz } from '../model/quiz';
import { PHumanService } from '../services/p-human.service';
import { CatService } from '../services/cat.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-p-human-test',
  templateUrl: './p-human-test.component.html',
  styleUrls: ['./p-human-test.component.css'],
  animations: [
    trigger('answer', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-3rem)' }),
      ]),
    ]),
  ],
})
export class PHumanTestComponent {
  quizzes!: Quiz[];
  currentQuiz!: Quiz;
  itQuiz!: number;
  start = true;
  end = false;
  pers: Array<number> = [0, 0, 0, 0, 0]; // cele 5 personalitati
  cats: Array<Cat> = [];

  constructor(
    private quizService: PHumanService,
    private router: Router,
    private catService: CatService
  ) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.itQuiz = 0;
    this.currentQuiz = this.quizzes[this.itQuiz];

    this.catService.getCats().subscribe(
      (response: Cat[]) => {
        this.cats = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    console.log(this.quizzes);
  }

  // onAnswer() {
  //   this.answersSelected[this.itQuiz] = this.currentQuiz.answer;
  //   // console.log(this.currentQuiz);
  // }

  onNext(quiz: Quiz) {
    this.itQuiz += 1;
    this.currentQuiz = this.quizzes[this.itQuiz];
    console.log(this.quizzes);
  }

  onSubmit() {
    this.start = false;
    this.end = true;

    let i: number;
    for (i = 0; i < this.quizzes.length; i++) {
      console.log(this.quizzes[i]);
      console.log(this.pers);
      if (this.quizzes[i].value > 0)
        this.pers[i % 5] += +this.quizzes[i].answer;
      else this.pers[i % 5] += 5 - +this.quizzes[i].answer;
    }

    console.log("AICI");
    console.log(this.pers);

    const results: Cat[] = [];
    let coef: number = 0;
    let mean_cat: number = 0;
    let ratings: Array<number> = [0, 0, 0, 0, 0];
    let cat: any[];
    let val_pers: Array<number> = [0, 0, 0, 0, 0];
    let sum_pers_patrat: number = 0;
    let sum_cat_patrat: number = 0;
    let sum1: number = 0;
    let sum2: number = 0;

    const mean_pers = this.pers.reduce((a, b) => a + b, 0) / this.pers.length;
    console.log(mean_pers);
    console.log(typeof this.pers);

    for(let i = 0; i < 5; i++){
        val_pers[i] = this.pers[i] - mean_pers;
        sum_pers_patrat += val_pers[i]*val_pers[i];
    }

    for (let i = 0; i < this.cats.length; i++) {
      //convertim din string in number

      //console.log(typeof this.cats[i].ratings);
      cat = this.cats[i].ratings.replace('[', '').replace(']','').split(',');
      console.log(cat.length);
      if(cat.length > 1)
        for (let j = 0; j < 5; j++) {
          ratings[j] = +cat[j];
        }
      else
        ratings = [0,0,0,0,0];


      //calculam coeficientul de corelatie
      mean_cat = ratings.reduce((a, b) => a + b, 0) / 5;

      console.log(mean_cat);

      for (let j = 0; j < 5; j++) {
          sum1 += val_pers[j] * (cat[j] - mean_cat);
          sum2 += (cat[j] - mean_cat) * (cat[j] - mean_cat);
      }

      sum2 = Math.sqrt(sum2 * sum_pers_patrat);

      coef = sum1 / sum2;

      // pe baza scorului trebuie sa gasesc pisicile care au aceeasi personalitate
      console.log(coef);
      if(coef >= 0.5) {
        results.push(this.cats[i]);
      }
    }

    this.cats = results;

  }
}
