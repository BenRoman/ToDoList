import { Component, OnInit, Output, Input } from '@angular/core';

import { Task } from '../Task';
import { TaskService }  from '../task.service';

@Component({
  selector: 'display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent  {

  constructor(public tskSer :TaskService ) { }

  @Input() task : Task;

  tryToChange : boolean = false;
  
  getColor(){
    switch(this.task.priority){
      case('1'):{
        return 'red';
      }
      case('2'):{
        return 'yellow';
      }
      case('3'):{
        return "green";
      }
    }
  }

}
