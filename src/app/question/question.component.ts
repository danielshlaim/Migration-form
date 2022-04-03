import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Details } from '../interface/interface';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  
  person:Details = {firstname:'',lastname:'',age:0,status:'',kids:''}
  points:number = 0;
  isSubmitted: boolean = false
  showResults: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  
  handleSubmit(info:any){
    this.person.age = info.age,
    this.person.status = info.status,
    this.person.kids = info.kids
    this.isSubmitted = true
    this.points =parseInt(info.age) + parseInt( info.status) + parseInt(info.kids)
  }
  getPoints(point:number){
    this.points = point
  }
  toggleResults() {
    this.showResults = !this.showResults;
  }


}
