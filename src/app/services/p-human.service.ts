import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PHumanService {
  quizzes: Quiz[] = [
    {
      question: 'Sunt sufletul petrecerii.',
      answer: 0,
      value: 1,
    },
    {
      question: 'Nu prea îmi pasă de ceilalți.',
      answer: 0,
      value: -2,
    },
    {
      question: 'Sunt mereu pregătit/ă.',
      answer: 0,
      value: 3,
    },
    {
      question: 'Devin stresat/ă repede.',
      answer: 0,
      value: -4,
    },
    {
      question: 'Am un vocabular dezvoltat.',
      answer: 0,
      value: 5,
    },
      {
      question: 'Nu prea vorbesc.',
      answer: 0,
      value: -1,
    },
    {
      question: 'Sunt interesat/ă de oameni.',
      answer: 0,
      value: 2,
    },
      {
      question: 'Îmi las lucrurile peste tot.',
      answer: 0,
      value: -3,
    },
    {
      question: 'Sunt relaxat/ă în majoritatea timpului.',
      answer: 0,
      value: 4,
    },
      {
      question: 'Găsesc dificil să înțeleg lucruri abstracte.',
      answer: 0,
      value: -5,
    },
    // {
    //   question: 'Mă simt confortabil în jurul altora.',
    //   answer: 0,
    //   value: 1,
    // },
    //   {
    //   question: 'Insult oameni.',
    //   answer: 0,
    //   value: -2,
    // },
    // {
    //   question: 'Sunt atent/ă la detalii.',
    //   answer: 0,
    //   value: 3,
    // },
    //   {
    //   question: 'Mă îngrijorez repede.',
    //   answer: 0,
    //   value: -4,
    // },
    // {
    //   question: 'Am o imaginație dezvoltată.',
    //   answer: 0,
    //   value: 5,
    // },
    // {
    //   question: 'Rămân în fundal.',
    //   answer: 0,
    //   value: -1,
    // },
    // {
    //   question: 'Empatizez cu sentimentele altora.',
    //   answer: 0,
    //   value: 2,
    // },
    // {
    //   question: 'Produc un dezastru.',
    //   answer: 0,
    //   value: -3,
    // },
    // {
    //   question: 'Rareori mă întristez.',
    //   answer: 0,
    //   value: 4,
    // },
    // {
    //   question: 'Nu mă interesează ideile abstracte.',
    //   answer: 0,
    //   value: -5,
    // },
    // {
    //   question: 'Încep o conversație.',
    //   answer: 0,
    //   value: 1,
    // },
    // {
    //   question: 'Nu sunt interesat/ă de problemele altora.',
    //   answer: 0,
    //   value: -2,
    // },
    // {
    //   question: 'Îmi termin sarcinile imediat.',
    //   answer: 0,
    //   value: 3,
    // },
    // {
    //   question: 'Sunt ușor deranjabil/ă.',
    //   answer: 0,
    //   value: -4,
    // },
    // {
    //   question: 'Am idei excelente.',
    //   answer: 0,
    //   value: 5,
    // },

  ];


  getQuizzes() {
    return this.quizzes;
  }
}
