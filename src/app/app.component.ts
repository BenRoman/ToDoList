import { Component } from '@angular/core';

import { Task } from './Task';
import { TaskService }  from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // task:Task = { stillActual:true , description:"some text", priority:"low"  }
  
  constructor(public tskSer:TaskService){}


}
