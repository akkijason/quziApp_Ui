import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quiz = {};
  quizzes;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getQuizzes().subscribe(res => {
      this.quizzes = res;
    });
  }

}