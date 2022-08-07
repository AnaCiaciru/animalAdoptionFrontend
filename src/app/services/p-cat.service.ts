import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root',
})
export class PCatService {
  constructor() {}

  quizzes: Quiz[] = [
    {
      question: 'Miaună puțin',
      answer: 0,
      value: -1,
    },
    {
      question: 'E drăgăstoasă',
      answer: 0,
      value: 2,
    },
    {
      question: 'Îi este greu să recunoască oameni',
      answer: 0,
      value: -3,
    },
    {
      question: 'Se supără ușor',
      answer: 0,
      value: 4,
    },
    {
      question: 'Nu e interesată de multe lucruri',
      answer: 0,
      value: -5,
    },
    {
      question: 'Îi place să se bage în seamă la vizitatorii tăi',
      answer: 0,
      value: 1,
    },
    {
      question: 'Nu e interesată de alte pisici',
      answer: 0,
      value: -2,
    },
    {
      question: 'Îi place ordinea',
      answer: 0,
      value: 3,
    },
    {
      question: 'Își schimbă starea frecvent',
      answer: 0,
      value: -4,
    },
    {
      question: 'Înțelege lucrurile repede.',
      answer: 0,
      value: 5,
    },
    {
      question: 'Nu-i place să atragă atenția.',
      answer: 0,
      value: -1,
    },
    {
      question: 'Stă mult cu oamenii',
      answer: 0,
      value: 2,
    },
    {
      question: 'Nu se prea joacă',
      answer: 0,
      value: -3,
    },
    {
      question: 'Are schimbări de stare.',
      answer: 0,
      value: 4,
    },
    {
      question: 'Face lucruri deștepte',
      answer: 0,
      value: -5,
    },
    // {
    //   question: 'Nu mă deranjează să fiu în centrul atenției.',
    //   answer: 0,
    //   value: 1,
    // },
    // {
    //   question: 'Simt și eu ce simt alții.',
    //   answer: 0,
    //   value: -2,
    // },
    // {
    //   question: 'Respect un program.',
    //   answer: 0,
    //   value: 3,
    // },
    // {
    //   question: 'Mă irit ușor.',
    //   answer: 0,
    //   value: -4,
    // },
    // {
    //   question: 'Îmi acord timp să reflectez.',
    //   answer: 0,
    //   value: 5,
    // },
    // {
    //   question: 'Sunt tăcut/ă în jurul străinilor.',
    //   answer: 0,
    //   value: -1,
    // },
    // {
    //   question: 'Liniștesc oamenii.',
    //   answer: 0,
    //   value: 2,
    // },
    // {
    //   question: 'Sunt precis/ă în munca mea.',
    //   answer: 0,
    //   value: -3,
    // },
    // {
    //   question: 'Mă întristez ușor.',
    //   answer: 0,
    //   value: 4,
    // },
    // {
    //   question: 'Sunt plin/ă de idei.',
    //   answer: 0,
    //   value: 5,
    // },
  ];

  getQuizzes() {
    return this.quizzes;
  }

}
