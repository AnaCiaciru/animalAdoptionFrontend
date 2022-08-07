import { style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat } from '../model/cat';
import { Quiz } from '../model/quiz';
import { CatService } from '../services/cat.service';
import { PCatService } from '../services/p-cat.service';

@Component({
  selector: 'app-p-cat-test',
  templateUrl: './p-cat-test.component.html',
  styleUrls: ['./p-cat-test.component.css'],
  animations: [
    trigger('answer', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-3rem)' }),
      ]),
    ]),
  ],
})
export class PCatTestComponent implements OnInit {
  quizzes!: Quiz[];
  currentQuiz!: Quiz;
  itQuiz!: number;
  start = true;
  end = false;
  pers: Array<number> = [0, 0, 0, 0, 0]; // cele 5 personalitati
  catId: number = 0;
  private sub!: Subscription;
  cat!: Cat;

  constructor(
    private quizService: PCatService,
    private router: Router,
    private catService: CatService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.itQuiz = 0;
    this.currentQuiz = this.quizzes[this.itQuiz];

    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.catId = parseInt(params['id']); //always a string
      this.catService
        .findOneCat(this.catId)
        .pipe(map((cat: Cat) => (this.cat = cat)))
        .subscribe(); /// because is an observable we need to sub
    });
  }

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

    // in pers vor fi cele 5 personalitati
    //this.cat.ratings = JSON.stringify(this.pers);
    //this.cat.ratings = this.pers;
    this.catService.updateCat(this.cat);
  }
}
