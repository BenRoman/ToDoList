import { Injectable } from '@angular/core';

import { Task } from './Task';

@Injectable()
export class TaskService {

  tasks: Task[] = [{ stillActual: true, description: "some text", priority: '3', inTrash: false },
  { stillActual: true, description: "some text 2", priority: '2', inTrash: false },
  { stillActual: false, description: "some text 3", priority: '1', inTrash: false }
  ];

  oldTasks: Task[] = [];
  prChanger: number;
  desc: string = "";
  pr: string;

  Sort() {
    this.tasks.sort((A, B): number => {
      if (Number(A.priority) > Number(B.priority)) return 1;
      if (Number(A.priority) < Number(B.priority)) return -1;
      return 0;
    });
  }

  AddNewTask() {
    this.desc = this.desc.trim();
    if (this.desc != "" && this.pr != undefined) {
      this.tasks.push({ stillActual: true, description: this.desc, priority: this.pr });
      this.Sort();
      } 
    this.desc = "";
    this.pr = undefined;
    

  }

  MoveToTrash(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.oldTasks.push(task);
      task.inTrash = true;
    }
  }

  DeleteForever(tsk: Task) {
    const index = this.oldTasks.indexOf(tsk);
    if (index > -1)
      this.oldTasks.splice(index, 1);
  }

  AddToActual(tsk: Task) {
    this.tasks.push(tsk);
    const index = this.oldTasks.indexOf(tsk);
    if (index > -1)
      this.oldTasks.splice(index, 1);
    tsk.inTrash = false;
  }
}
