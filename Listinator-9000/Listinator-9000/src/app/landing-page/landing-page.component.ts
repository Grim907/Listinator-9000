import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  userInput = "Type your To-Do here...";
  todos = [];
  constructor() {}

  ngOnInit(): void {}

  // method
  addNewTodo() {
    console.log('This is what I typed in ' + this.userInput);
    this.todos.push({description: this.userInput})
  }

  onDeleteTodo(i){
this.todos.splice(i, 1)
  }
}

