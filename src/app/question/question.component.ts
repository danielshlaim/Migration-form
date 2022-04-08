import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Details } from '../interface/interface';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  
  person:Details = {age:0,status:'',kids:''}
  points:number = 0;
  isSubmitted: boolean = false
  showResults: boolean = false
 
  readonly Person_Key = 'Person'

  constructor() { }

  ngOnInit(): void {
    let savePerson = localStorage.getItem(this.Person_Key);
    if(savePerson != null){
      this.person = JSON.parse(savePerson);
    }
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
  handleReset(){
   this.isSubmitted = !this.isSubmitted;
  }

  handleSave():void{
      localStorage.setItem(this.Person_Key,JSON.stringify(this.person))
  }

}
