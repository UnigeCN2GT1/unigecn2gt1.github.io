import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { QuestionSet } from 'src/app/interfaces/question-set';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input('quiz') quiz: QuestionSet[];
  @ViewChild('anchor') anchor: ElementRef;

  numberOfQuestions: number;
  currentQuestion: number = 1;

  selectedAnswer: number = -1;
  reasonShown: boolean = false;

  correctAnswers: number = 0;
  Math = Math;

  constructor() { }

  ngOnInit(): void {
    this.numberOfQuestions = this.quiz.length;
    this.shuffleArray(this.quiz);
  }

  onClick(event, index) {
    if (this.reasonShown) {
      return;
    }
    const responses = document.getElementById('responses');
    Array.from(responses.children).forEach(x => x.classList.remove('alert-primary'));

    (event.target as HTMLDivElement).classList.add('alert-primary');

    this.selectedAnswer = index;
  }

  onVerify(): void {
    if (this.selectedAnswer < 0) {
      return;
    }
    const responses = document.getElementById('responses');
    Array.from(responses.children).forEach(x => x.classList.remove('selected'));

    this.reasonShown = true;

    // tslint:disable-next-line: triple-equals
    if (this.selectedAnswer == this.quiz[this.currentQuestion - 1].correct) {
      document.getElementById('response-' + this.selectedAnswer).classList.add('alert-success');
      this.correctAnswers += 1;
    } else {
      document.getElementById('response-' + this.selectedAnswer).classList.add('alert-danger');
      document.getElementById('response-' + this.quiz[this.currentQuestion - 1].correct).classList.add('alert-success');
    }
  }

  onNextQuestion(): void {
    this.currentQuestion += 1;
    this.selectedAnswer = -1;
    this.reasonShown = false;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
}
